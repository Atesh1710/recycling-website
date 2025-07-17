import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>
      <section className="pt-24 px-6 text-center">
        <h1 className="text-4xl font-bold text-accent mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Your Name" className="w-full p-3 border rounded" required />
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="Your Email" className="w-full p-3 border rounded" required />
          <textarea name="message" value={form.message} onChange={handleChange}
            placeholder="Your Message" className="w-full p-3 border rounded" rows="5" required />
          <button className="bg-accent text-white px-6 py-3 rounded-full hover:bg-orange-600">
            Send Message
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}
