"use client";

import { borderClr, showPopupClasses } from "../../store/data";
import Input from "../../utils/Input";
import { motion } from "framer-motion";
import useForm from "../../component/hooks/useForm";

const Contact = () => {
  const {
    values,
    errors,
    result,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useForm();

  return (
    <div className={`${borderClr}`}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-24 w-[80%] mx-auto">
        <div className="w-[80%] mx-auto">
          <motion.h1 className="text-7xl font-bold uppercase text-gray-800">
            Let&apos;s start a <br />
            <span>project together</span>
          </motion.h1>
        </div>
        <form className="flex flex-col gap-6 w-[60%]" onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Example@gmail.com"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            error={errors.email}
          />
          <Input
            label="Message"
            name="message"
            placeholder="Enter your message"
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            error={errors.message}
          />
          <div className="flex gap-6 justify-end">
            <button className="hover:text-blue-500" onClick={reset}>
              Reset
            </button>
            <motion.button
              type="submit"
              className="border px-3 py-1 rounded-lg bg-black text-white hover:bg-blue-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </div>
        </form>
        {result && (
          <div className={`${showPopupClasses} opacity-100 translate-y-0`}>
            <div className="w-2 h-2 bg-[#5aab6e] rounded-full" />
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
