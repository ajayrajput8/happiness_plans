import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormData({name:'',email:'',message:''});
  };

  return (
    <section
  id="contact"
  className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-blue-100"
>
  <h3 className="text-3xl font-semibold mb-8 text-center">Contact Us</h3>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md space-y-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={formData.message}
      onChange={handleChange}
      required
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</section>

  );
}