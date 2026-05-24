import AboutText from "./AboutText";

export default function About() {
  return (
    <div className="py-12">
      <div className="flex flex-col justify-center gap-15">
        <div className="flex items-center gap-2">
          <div className="h-[3px] w-23 bg-[#007bff] border-l rounded-full"></div>
          <h2 className="text-4xl font-semibold w-fit text-[#007bff]">About</h2>
        </div>
        <AboutText />
        <div></div>
      </div>
    </div>
  );
}
