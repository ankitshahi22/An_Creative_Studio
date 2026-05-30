import { borderClr } from "../../store/data";

const GetInTouchSection = () => {
  return (
    <div className={`${borderClr}`}>
      <div className="flex flex-col items-center gap-8 p-8 w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-[#007bff] text-center">
          GET IN TOUCH
        </h2>
        <button className="animate-bounce px-3 py-1.5 text-sm bg-blue-500 text-white rounded w-fit mx-auto">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default GetInTouchSection;
