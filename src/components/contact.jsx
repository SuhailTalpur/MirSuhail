import React, { useState } from "react";
import contactimg from "../assets/images/contact.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // EmailJS keys (add your actual keys here)
  const SERVICE_ID = "service_y1dqm6h";
  const TEMPLATE_ID = "template_7cg99dt";
  const PUBLIC_KEY = "aAMW7nSAksZAHYlw0";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Thank you for reaching out! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-[#190019] text-white py-20 px-6 flex flex-col items-center justify-center">
      <ToastContainer />
      {/* Headings */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-2xl  font-bold mb-3">Contact</h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-[#FBE4D8] mb-2">
          Get In Touch With Me
        </h3>
        <p className="text-gray-300 max-w-xl mx-auto">
          Contact us for any queries — always available for you.
        </p>
      </div>

      <div className="flex rounded-2xl overflow-hidden max-w-4xl w-full flex-col md:flex-row items-center md:items-start gap-6 md:gap-0">
        <img src={contactimg} alt="" className="w-100"/>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded-r-2xl rounded-l-4xl shadow-lg w-full max-w-md"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#FBE4D8] focus:ring-1 focus:ring-[#FBE4D8] outline-none text-gray-200"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#FBE4D8] focus:ring-1 focus:ring-[#FBE4D8] outline-none text-gray-200"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#FBE4D8] focus:ring-1 focus:ring-[#FBE4D8] outline-none text-gray-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full bg-[#DFB6B2] text-gray-900 hover:bg-[#FBE4D8] cursor-pointer font-semibold py-2.5 rounded-lg transition duration-200 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
