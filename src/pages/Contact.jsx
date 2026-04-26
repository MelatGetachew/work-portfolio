import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "../Components/Navigation";
import { Send, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen overflow-auto bg-gradient-to-br from-neutral-50 via-blue-50/30 to-yellow-50/20">
      <Navigation />

      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-3"
        >
          Contact Me
        </motion.h1>

        <p className="text-gray-600 mb-10">
          Have a project or idea? Let’s talk.
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border rounded-2xl p-6 space-y-4"
        >
          <input
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            rows={5}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>

        {/* Email */}
        <div className="mt-10 text-center text-gray-600 flex items-center justify-center gap-2">
          <Mail size={16} />
          <span>or email me at melatgetachew700@gmail.com</span>
        </div>
      </div>
    </div>
  );
}