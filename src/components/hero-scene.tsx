"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

const techColors = ["#61DAFB", "#3178C6", "#339933", "#7928CA"];

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
      ref.current.rotation.x = state.clock.elapsedTime * 0.25;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2.2, 16, 16]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#0070f3" wireframe transparent opacity={0.2} />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#7928ca" />
      <Stars radius={60} depth={40} count={800} factor={2} saturation={0} fade speed={0.3} />
      <Globe />
      {techColors.map((color, i) => {
        const angle = (i / techColors.length) * Math.PI * 2;
        const radius = 3.5;
        return (
          <FloatingOrb
            key={color}
            position={[
              Math.cos(angle) * radius,
              Math.sin(i * 1.2) * 1.2,
              Math.sin(angle) * radius,
            ]}
            color={color}
            scale={0.28}
          />
        );
      })}
    </>
  );
}

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 768px)").matches;
    if (reducedMotion || narrow) return;

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setEnabled(true), { timeout: 2500 })
      : window.setTimeout(() => setEnabled(true), 1500);

    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idle as number);
      } else {
        clearTimeout(idle as number);
      }
    };
  }, []);

  if (!enabled) {
    return (
      <div
        className="absolute inset-0 -z-10 animated-gradient opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-70" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.25]}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background pointer-events-none" />
    </div>
  );
}
