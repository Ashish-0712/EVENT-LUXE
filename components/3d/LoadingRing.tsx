"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function LoadingRing() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <Torus ref={meshRef} args={[1.5, 0.1, 16, 100]}>
      <meshStandardMaterial 
        color="#D4AF37" 
        emissive="#D4AF37"
        emissiveIntensity={1.5}
        metalness={1} 
        roughness={0.2}
        toneMapped={false}
      />
    </Torus>
  );
}
