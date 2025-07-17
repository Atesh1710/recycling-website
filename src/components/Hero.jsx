import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-primary flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="text-center text-white mt-20">Loading 3D...</div>}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Sphere args={[1.5, 64, 64]} scale={2}>
              <MeshDistortMaterial
                color="#E67E22"
                distort={0.4}
                speed={2}
                roughness={0.2}
              />
            </Sphere>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </Suspense>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-metallic mb-4">
          Premium Iron Casting Solutions
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Delivering Quality, Durability & Precision Since 1990
        </p>
        <button className="bg-accent px-6 py-3 rounded hover:bg-orange-600 transition">
          Get a Quote
        </button>
      </motion.div>
    </section>
  );
}
