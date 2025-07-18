import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { useRef } from 'react';

function AluminiumIngot() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005; 
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI, 0, 0]} scale={1.5}>
      {/* bottom radius smaller to form pot shape */}
      <cylinderGeometry args={[0.8, 0.6, 1, 64]} />
      <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} />
    </mesh>
  );
}

export default function MetalShowcase() {
  return (
    <section className="py-16 px-4 bg-gray-800 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Aluminium Alloy Ingot</h2>
      <div className="h-96">
        <Canvas camera={{ position: [0, 1, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} intensity={1.2} />

          <AluminiumIngot />

          <OrbitControls enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
