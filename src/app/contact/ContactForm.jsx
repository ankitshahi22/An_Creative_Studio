"use client";

import { showPopupClasses } from "../../store/data";
import Input from "../../utils/Input";
import { motion } from "motion/react";
import useForm from "../../component/hooks/useForm";

const ContactForm = () => {
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <form
          className="flex flex-col gap-8 text-[#888]"
          onSubmit={handleSubmit}
        >
          <Input
            label="Name"
            name="name"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            placeholder="your@email.com"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            error={errors.email}
          />
          <Input
            label="Message"
            name="message"
            placeholder="Tell us about your project"
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            error={errors.message}
          />

          <div className="flex items-center justify-end gap-6 pt-2">
            <button
              type="button"
              onClick={reset}
              className="text-sm text-[#888] hover:text-yellow-600 transition-colors"
            >
              Clear
            </button>
            <motion.button
              type="submit"
              className="px-4 py-2.5 bg-[#111] text-white text-sm font-semibold rounded-lg hover:bg-[#333] transition-colors dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Sending..." : "Send message →"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {result && (
        <div className={`${showPopupClasses} opacity-100`}>
          <div className="w-1.5 h-1.5 bg-[#5aab6e] rounded-full" />
          {result}
        </div>
      )}
    </>
  );
};

export default ContactForm;
