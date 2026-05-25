import { borderClr } from "../../store/data";
import AboutText from "./AboutText";

export default function About() {
  return (
    <div className={`${borderClr} py-12`}>
      <div className="flex flex-col justify-center gap-15">
        <h2 className="text-4xl font-semibold w-fit text-[#007bff] mx-auto">
          About
        </h2>
        <AboutText />
      </div>
    </div>
  );
}
