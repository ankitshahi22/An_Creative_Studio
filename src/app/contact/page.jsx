import { motion } from "motion/react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Nirjal Timalsina for video editing projects and collaborations.",
};

const Contact = () => {
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

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
