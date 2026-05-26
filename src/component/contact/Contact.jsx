import { borderClr } from "../../store/data";
import Input from "../../utils/Input";

const Contact = () => {
  return (
    <div className={`${borderClr}`}>
      <div className="p-8 w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-[#007bff] text-center">
          CONTACT
        </h2>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col gap-6">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="Enter your name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Example@gmail.com"
            />
            <Input
              label="Message"
              name="message"
              type="textarea"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex justify-end gap-6 text-sm">
            <button>Reset</button>
            <button className="px-2 py-1.5 bg-blue-500 text-white rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
