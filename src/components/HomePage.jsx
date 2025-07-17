import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Stars, Environment } from '@react-three/drei';
import MetalShowcase from './MetalShowCse';
// function MetalIngot() {
//   return (
//     <mesh>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color={'silver'} metalness={0.8} roughness={0.2} />
//     </mesh>
//   );
// }

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/drnxntvrq/video/upload/v1752775669/recycling-background_vbl65i.mp4"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforming Waste into Resources
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Sustainable Aluminium & Iron Casting | Plastic Granules
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl">
            Explore Our Process
          </button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 text-center bg-gray-800">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Our Mission & Vision
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p>
            <strong>Mission:</strong> To transform industrial and household waste into high-value resources using sustainable technologies, reducing landfill dependency, lowering carbon emissions, and fostering a circular economy.
          </p>
          <p>
            <strong>Vision:</strong> To become a global leader in waste-to-resource conversion, delivering innovative recycling solutions that generate economic value and environmental benefits.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Do</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p>We segregate metals, especially non-ferrous metals and PET plastics from municipal and industrial waste.</p>
          <p>Our advanced sorting technology includes Eddy current separators, X-ray scan separators—all built indigenously.</p>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="py-16 px-4 bg-gray-800 text-center">
        <MetalShowcase/>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 text-center bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Impact</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <StatCard number="100K+" label="Tons of Waste Recycled" />
          <StatCard number="50K+" label="Carbon Emissions Reduced" />
          <StatCard number="200+" label="Manufacturing Partners" />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 text-center bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <p>Get in touch with us for partnerships or more information about our sustainable solutions.</p>
        <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-xl">
          Contact Now
        </button>
      </section>

      <footer className="bg-gray-900 text-center py-6">
        &copy; {new Date().getFullYear()} | Aluminium & Iron Recycling Company
      </footer>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gray-700 p-6 rounded-xl shadow-md w-48"
    >
      <h3 className="text-3xl font-bold text-emerald-400">{number}</h3>
      <p className="mt-2 text-gray-300">{label}</p>
    </motion.div>
  );
}
