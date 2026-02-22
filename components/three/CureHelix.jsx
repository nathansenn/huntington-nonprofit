"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const VECTORS = [
  { id: 'V1', name: 'Gene Silencing', color: '#58A6FF', pos: [2.5, 2, 0] },
  { id: 'V2', name: 'Expansion Block', color: '#3FB950', pos: [2.5, 1, 0] },
  { id: 'V3', name: 'CRISPR', color: '#BC8CFF', pos: [2.5, 0, 0] },
  { id: 'V4', name: 'Protein Clear', color: '#F778BA', pos: [2.5, -1, 0] },
  { id: 'V5', name: 'Neuroprotection', color: '#D29922', pos: [2.5, -2, 0] },
  { id: 'V6', name: 'Lifestyle Shield', color: '#8B949E', pos: [2.5, -3, 0] },
];

function DNAHelix() {
  const groupRef = useRef();
  
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 60; i++) {
      const y = (i - 30) * 0.15;
      const angle = i * 0.4;
      const r = 1.0;
      temp.push({
        pos1: [Math.sin(angle) * r, y, Math.cos(angle) * r],
        pos2: [Math.sin(angle + Math.PI) * r, y, Math.cos(angle + Math.PI) * r],
        y
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.3;
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <group key={i}>
          <mesh position={p.pos1}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color="#58A6FF" emissive="#58A6FF" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={p.pos2}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color="#C4A265" emissive="#C4A265" emissiveIntensity={0.5} />
          </mesh>
          {i % 3 === 0 && (
            <mesh position={[0, p.y, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.005, 0.005, 2]} />
              <meshStandardMaterial color="white" transparent opacity={0.1} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

function VectorPulse({ vector }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      const scale = 1 + Math.sin(t * 2 + vector.pos[1]) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={vector.pos}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color={vector.color} 
          emissive={vector.color} 
          emissiveIntensity={1.0} 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function CureHelix() {
  return (
    <div className="cure-helix-container" style={{ width: '100%', height: '400px', background: '#0D1117', borderRadius: '14px', overflow: 'hidden', border: '1px solid #21262D' }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
        <color attach="background" args={['#0D1117']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFF" />
        <DNAHelix />
        {VECTORS.map(v => (
          <VectorPulse key={v.id} vector={v} />
        ))}
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
