import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100 text-primary">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <motion.img
  src="https://images.unsplash.com/photo-1684259499227-e9844ab79747?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Iron Casting"
  className="rounded-lg shadow-lg"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}  // <-- fallback
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
/>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            We are a leading manufacturer of high-quality iron castings, delivering precision engineering and durable solutions for industrial needs since 1990.
          </p>
          <button className="bg-accent text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
