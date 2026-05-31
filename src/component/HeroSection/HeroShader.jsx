"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/store/ThemeContext";

// Cinematic color-grade background shader.
// Simulates the look of a color-grading monitor:
//   • warm amber corner (shadows lift) — bottom-left
//   • cool blue corner (highlight push) — top-right
//   • subtle center brightening (key light)
//   • tiny cyan brand accent — top-right edge
// All zones breathe slowly with opposite phase so it feels alive.

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform float u_t;
uniform vec2 u_res;
uniform float u_dark;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 c  = uv - 0.5;
  float t = u_t * 0.18;

  float wPulse = 0.68 + 0.32 * sin(t * 0.6);
  float cPulse = 0.68 + 0.32 * cos(t * 0.5 + 1.2);
  float sPulse = 0.5  + 0.5  * sin(t * 0.35 + 2.4);

  float warmZone = smoothstep(0.9, 0.0, length(uv - vec2(0.0,  0.0)));
  float coolZone = smoothstep(0.9, 0.0, length(uv - vec2(1.0,  1.0)));
  float cyanZone = smoothstep(0.5, 0.0, length(uv - vec2(0.92, 0.18)));

  float vignette = 1.0 - dot(c, c) * 1.6;
  vignette = smoothstep(0.0, 1.0, vignette);

  // Light palette
  vec3 baseL = vec3(0.961, 0.957, 0.949);
  vec3 warmL = vec3(1.0,   0.940, 0.875);
  vec3 coolL = vec3(0.875, 0.925, 1.0  );
  vec3 vigL  = vec3(1.0,   0.992, 0.984);

  // Dark palette
  vec3 baseD = vec3(0.047, 0.047, 0.047);
  vec3 warmD = vec3(0.12,  0.07,  0.02 );
  vec3 coolD = vec3(0.02,  0.05,  0.14 );
  vec3 vigD  = vec3(0.08,  0.08,  0.09 );

  vec3 base = mix(baseL, baseD, u_dark);
  vec3 warm = mix(warmL, warmD, u_dark);
  vec3 cool = mix(coolL, coolD, u_dark);
  vec3 vig  = mix(vigL,  vigD,  u_dark);
  vec3 cyan = vec3(0.055, 0.647, 0.914);

  vec3 col = base;
  col = mix(col, warm, warmZone * 0.28 * wPulse);
  col = mix(col, cool, coolZone * 0.22 * cPulse);
  col = mix(col, vig,  vignette * 0.09);
  col = mix(col, cyan, cyanZone * 0.038 * sPulse);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function HeroShader() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const darkRef = useRef(theme === "dark" ? 1 : 0);

  useEffect(() => {
    darkRef.current = theme === "dark" ? 1 : 0;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vert || !frag) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const posLoc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_t");
    const uRes  = gl.getUniformLocation(prog, "u_res");
    const uDark = gl.getUniformLocation(prog, "u_dark");

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const w = Math.round(canvas.clientWidth  * dpr);
      const h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    let blended = darkRef.current;
    let raf;
    const t0 = performance.now();
    const render = () => {
      // Smooth lerp toward target so theme transition is gradual
      blended += (darkRef.current - blended) * 0.06;
      gl.uniform1f(uTime, (performance.now() - t0) * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uDark, blended);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ display: "block", zIndex: 0, pointerEvents: "none" }}
    />
  );
}
