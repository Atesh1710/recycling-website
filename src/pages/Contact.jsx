import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_2llt54b',     
      'template_83z82jd',    
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      'MuOxaakhZNj7x-9-J'    
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      setForm({ name: "", email: "", phone: "", message: "" });
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      alert('❌ Failed to send message. Please try again later.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <PageWrapper>
      <section className="pt-24 px-6 text-center">
        <h1 className="text-4xl font-bold text-accent mb-6">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Have questions or want to collaborate? Reach out to us via the form below or use our contact details.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow-md">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            rows="5"
            required
          />
          <button
            className="bg-accent text-white px-6 py-3 rounded-full hover:bg-orange-600"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p>106, Sneha Nagar, Sapna Sangeeta, Indore, India</p>
          <p className="text-sm text-gray-600">
            <strong>Email:</strong>{" "}
            <a href="mailto:nmmishrdhatu95@gmail.com" className="text-accent">
              nmmishrdhatu95@gmail.com
            </a>
          </p>
          <p>Phone: +91 9770204740</p>
          <p>Mon–Sat: 9 AM – 6 PM</p>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6693679626087!2d75.86821107616838!3d22.703348979398772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6e9ce064d7%3A0x336edb68d7bd2860!2sNeel%20Madhav!5e0!3m2!1sen!2sin!4v1752920828299!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6 text-accent text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-600 transition duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-600 transition duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition duration-200" />
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
