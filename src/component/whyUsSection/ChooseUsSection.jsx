import {
  borderClr,
  chooseUsDataTitle,
  chooseUsContent,
} from "../../store/data";

const ChooseUsSection = () => {
  return (
    <div className={`${borderClr} p-6`}>
      <div className="w-[80%] mx-auto text-center">
        <h2 className="text-4xl">{chooseUsDataTitle[0].title}</h2>
        <p>{chooseUsDataTitle[0].description}</p>
      </div>
      <div>
        {chooseUsContent.map((item, index) => (
          <div key={index} className="w-[80%] mx-auto grid grid-cols-2 gap-2">
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-sm">{item.label}</h3>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUsSection;
