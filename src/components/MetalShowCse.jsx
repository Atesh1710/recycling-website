import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { useRef } from 'react';

// Aluminium ingot — rectangular box
function AluminiumIngot({ position }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 0.5, 0.6]} />
      <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.3} />
    </mesh>
  );
}

export default function MetalShowcase() {
  return (
    <section className="py-16 px-4 bg-gray-800 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Aluminium Alloy Ingot</h2>
      <div className="h-96">
        <Canvas camera={{ position: [0, 1, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} intensity={1.2} />

          <group>
            {/* Base row: 3 ingots */}
            <AluminiumIngot position={[-1.1, 0, 0]} />
            <AluminiumIngot position={[0, 0, 0]} />
            <AluminiumIngot position={[1.1, 0, 0]} />

            {/* Middle row: 2 ingots */}
            <AluminiumIngot position={[-0.55, 0.35, 0]} />
            <AluminiumIngot position={[0.55, 0.35, 0]} />

            {/* Top ingot */}
            <AluminiumIngot position={[0, 0.7, 0]} />
          </group>

          <OrbitControls enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
