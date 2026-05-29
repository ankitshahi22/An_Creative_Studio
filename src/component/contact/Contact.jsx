"use client";

import { borderClr } from "../../store/data";
import Input from "../../utils/Input";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const Contact = () => {
  const [result, setResult] = useState("");
  const { pending } = useFormStatus();

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2f05bd48-6ad6-4b7e-846f-ba6c1831255c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className={`${borderClr}`}>
      <div className="flex flex-col items-center gap-8 p-8 w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-[#007bff] text-center">
          Get in Touch
        </h2>
        <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded w-fit mx-auto">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="p-8 w-[80%] mx-auto">
  <h2 className="text-4xl font-bold text-[#007bff] text-center">CONTACT</h2>
  <form className="flex flex-col gap-4 py-8" onSubmit={onSubmit}>
    <div className="flex flex-col gap-6">
      <Input label="Full Name" name="fullName" placeholder="Enter your name" />
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
      <button type="reset">Reset</button>
      <button
        type="submit"
        className="px-2 py-1.5 bg-blue-500 text-white rounded"
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
    <span>{result}</span>
  </form>
</div>; */
}
