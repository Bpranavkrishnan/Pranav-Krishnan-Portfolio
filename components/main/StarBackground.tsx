"use client";

import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

const StarBackground = (props: any) => {
  const ref = useRef<{ rotation: { x: number; y: number } }>(null);

  const sphere = useMemo(() => {
    const buffer = new Float32Array(5000 * 3); // Each point has x, y, z
    inSphere(buffer, { radius: 1.2 });

    // 🚨 Validate there's no NaN
    const hasNaN = buffer.some((val) => isNaN(val));
    if (hasNaN) {
      console.error("⚠️ NaN detected in sphere buffer!");
    }

    return buffer;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
