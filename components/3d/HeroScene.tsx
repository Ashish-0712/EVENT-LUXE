"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import GoldenParticles from './GoldenParticles';

function Chandelier() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 5, 0]}>
      {/* Central crystal */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          transmission={1} 
          thickness={0.5} 
          roughness={0.1} 
          color="#ffffff" 
          emissive="#D4AF37"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 1, 0]}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Lights */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;
        return (
          <group key={i} position={[x, 1, z]}>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
            <pointLight distance={10} intensity={2} color="#ffeedd" />
          </group>
        );
      })}
    </group>
  );
}

function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame((state) => {
    if (cameraRef.current) {
      // Cinematic slow orbit
      const t = state.clock.elapsedTime * 0.05;
      cameraRef.current.position.x = Math.sin(t) * 15;
      cameraRef.current.position.z = Math.cos(t) * 15;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 15]} fov={45} />
      
      <color attach="background" args={['#0B0B0B']} />
      <fog attach="fog" args={['#0B0B0B', 5, 30]} />
      
      <ambientLight intensity={0.2} color="#6A38FF" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#D4AF37" />
      <spotLight position={[-10, 10, -5]} intensity={2} color="#6A38FF" angle={0.5} penumbra={1} />
      
      <Suspense fallback={null}>
        <Environment preset="night" />
        
        {/* Floating abstract decorative elements */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-5, 2, -5]}>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshPhysicalMaterial 
              transmission={1} 
              thickness={0.5} 
              roughness={0.1} 
              color="#6A38FF" 
            />
          </mesh>
        </Float>
        
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[6, -2, -3]}>
          <mesh>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshPhysicalMaterial 
              color="#D4AF37" 
              metalness={0.9} 
              roughness={0.1} 
            />
          </mesh>
        </Float>
        
        <Chandelier />
        <GoldenParticles count={800} />
        
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial 
            color="#050505" 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      </Suspense>

      <EffectComposer>
        <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}>
        <Scene />
      </Canvas>
    </div>
  );
}
