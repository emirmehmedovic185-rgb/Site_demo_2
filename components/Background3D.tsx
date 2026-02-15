
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const points = useRef<THREE.Points>(null!);
  const particlesCount = 3500; // Plus dense
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const col = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      const r = Math.random();
      if (r > 0.7) {
        // Gold / Amber
        col[i * 3] = 0.85; // R
        col[i * 3 + 1] = 0.46; // G
        col[i * 3 + 2] = 0.02; // B
      } else {
        // Darkened Amber
        col[i * 3] = 0.15;
        col[i * 3 + 1] = 0.1;
        col[i * 3 + 2] = 0.05;
      }
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.03;
    points.current.rotation.z = Math.sin(time * 0.1) * 0.05;
    // Slight breathing effect
    points.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <color attach="background" args={['#050505']} />
        <ParticleField />
        <fog attach="fog" args={['#050505', 2, 8]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
