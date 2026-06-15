"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

const techColors = ["#61DAFB", "#3178C6", "#339933", "#F7DF1E", "#E34F26", "#7928CA"];

function FloatingOrb({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2.2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#0070f3"
        wireframe
        transparent
        opacity={0.25}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#7928ca" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0070f3" />
      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
      <Globe />
      {techColors.map((color, i) => {
        const angle = (i / techColors.length) * Math.PI * 2;
        const radius = 4;
        return (
          <FloatingOrb
            key={color}
            position={[
              Math.cos(angle) * radius,
              Math.sin(i * 1.2) * 1.5,
              Math.sin(angle) * radius,
            ]}
            color={color}
            scale={0.3 + (i % 3) * 0.1}
          />
        );
      })}
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-80">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background pointer-events-none" />
    </div>
  );
}
