"use client";

import dynamic from 'next/dynamic';

const LoadingRing = dynamic(() => import('@/components/3d/LoadingRing'), { ssr: false });
const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), { ssr: false });
const EffectComposer = dynamic(() => import('@react-three/postprocessing').then((mod) => mod.EffectComposer), { ssr: false });
const Bloom = dynamic(() => import('@react-three/postprocessing').then((mod) => mod.Bloom), { ssr: false });

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col items-center justify-center">
      <div className="w-64 h-64">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#D4AF37" />
          <LoadingRing />
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} mipmapBlur intensity={2} />
          </EffectComposer>
        </Canvas>
      </div>
      
      <div className="mt-8 flex items-center gap-3">
        <span className="text-xl font-serif text-white tracking-widest uppercase">Loading</span>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
