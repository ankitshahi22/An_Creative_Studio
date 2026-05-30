"use client";

import { useEffect, useState } from "react";

const initialValues = { name: "", email: "", message: "" };
const initialTouched = { name: false, email: false, message: false };

const useForm = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(initialTouched);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setResult(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const errors = {
    name: touched.name && values.name.length < 2,
    email: touched.email && !values.email.includes("@"),
    message: touched.message && values.message.length < 2,
  };

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: false }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const reset = () => {
    setValues(initialValues);
    setTouched(initialTouched);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const hasErrors =
      values.name.length < 2 ||
      !values.email.includes("@") ||
      values.message.length < 2;

    if (hasErrors) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "976df133-3ebe-4428-92be-25e10e586e2c");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setResult("Message sent successfully!");
        reset();
      } else {
        setResult("Error: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setResult("Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    result,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
};

export default useForm;
