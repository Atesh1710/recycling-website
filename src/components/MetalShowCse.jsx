import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Stars, Environment } from '@react-three/drei';
import { useRef } from 'react';

function RotatingTorus() {
  const knotRef = useRef();

  useFrame(() => {
    if (knotRef.current) {
      knotRef.current.rotation.x += 0.01;
      knotRef.current.rotation.y += 0.01;
    }
  });

  return (
    <TorusKnot
      ref={knotRef}
      args={[1, 0.4, 128, 64]}
      scale={1.5}
    >
      <meshStandardMaterial color={'#c0c0c0'} metalness={1} roughness={0.3} />
    </TorusKnot>
  );
}

export default function MetalShowcase() {
  return (
    <section className="py-16 px-4 bg-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Premium 3D Visual Experience</h2>
      <div className="h-96">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} intensity={1.5} />

          <RotatingTorus />

          <OrbitControls enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
