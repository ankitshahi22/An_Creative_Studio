"use client";

import { showPopupClasses } from "../../store/data";
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
    <div className="min-h-screen border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-[#888] text-xs tracking-widest uppercase mb-6">
            Get in touch
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-(--fg) leading-tight mb-8"
          >
            Let&apos;s start a
            <br />
            project together.
          </motion.h1>
          <div className="flex flex-col gap-3 text-sm text-[#999]">
            <a
              href="mailto:ancreativestudio@gmail.com"
              className="text-sm text-[#888] hover:text-[#0EA5E9] transition-colors mt-1"
            >
              ancreativestudio@gmail.com
            </a>
            <p>+977 9845839985</p>
            <p>Hetauda, Nepal</p>
            <p>Sun – Fri · 9:00 AM – 5:00 PM NPT</p>
          </div>
        </div>

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
                className="px-4 py-2.5 bg-[#111] text-white text-sm font-semibold hover:bg-[#333] transition-colors rounded-lg hover:bg-[#333] transition-colors dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? "Sending..." : "Send message →"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {result && (
        <div className={`${showPopupClasses} opacity-100`}>
          <div className="w-1.5 h-1.5 bg-[#5aab6e] rounded-full" />
          {result}
        </div>
      )}
    </div>
  );
};

export default Contact;
