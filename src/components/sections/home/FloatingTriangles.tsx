"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingTriangles() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 120;

  // Define color palette matching Edfoal design (Purple, Gold, White, Cyan)
  const colors = useMemo(() => [
    new THREE.Color("#e91e63"), // Purple
    new THREE.Color("#2196F3"), // Gold
    new THREE.Color("#64B5F6"), // White
    new THREE.Color("#06b6d4"), // Cyan
  ], []);

  // Generate initial particle data
  const particles = useMemo(() => {
    const data = [];
    const getRand = (index: number, salt: number) => {
      const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453123;
      return x - Math.floor(x);
    };
    for (let i = 0; i < count; i++) {
      data.push({
        // Spread particles across depth
        x: (getRand(i, 1) - 0.5) * 12,
        y: (getRand(i, 2) - 0.5) * 8,
        z: -2.0 - getRand(i, 3) * 8.0, // Z between -2 and -10 for parallax
        scale: 0.3 + getRand(i, 4) * 0.8,
        vx: (getRand(i, 5) - 0.5) * 0.005,
        vy: 0.002 + getRand(i, 6) * 0.006, // Drift upwards slowly
        rotX: getRand(i, 7) * Math.PI,
        rotY: getRand(i, 8) * Math.PI,
        rotZ: getRand(i, 9) * Math.PI,
        spinX: (getRand(i, 10) - 0.5) * 0.008,
        spinY: (getRand(i, 11) - 0.5) * 0.008,
        color: colors[Math.floor(getRand(i, 12) * colors.length)],
        opacity: 0.05 + getRand(i, 13) * 0.2, // very faint, premium background elements
      });
    }
    return data;
  }, [colors]);

  // Temporary variable to perform matrix operations
  const tempMatrix = useMemo(() => new THREE.Matrix4(), []);
  const tempPosition = useMemo(() => new THREE.Vector3(), []);
  const tempRotation = useMemo(() => new THREE.Euler(), []);
  const tempQuaternion = useMemo(() => new THREE.Quaternion(), []);
  const tempScale = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // 1. Drifting coordinates and matrix update
    particles.forEach((p, i) => {
      // Apply speed drift
      p.y += p.vy;
      p.x += p.vx;
      p.rotX += p.spinX;
      p.rotY += p.spinY;

      // Wrap-around boundary check
      if (p.y > 5.5) {
        p.y = -5.5;
        p.x = (Math.random() - 0.5) * 12;
      }
      if (p.x < -6.5 || p.x > 6.5) {
        p.vx = -p.vx;
      }

      // Configure local transformation matrices
      tempPosition.set(p.x, p.y, p.z);
      tempRotation.set(p.rotX, p.rotY, p.rotZ);
      tempQuaternion.setFromEuler(tempRotation);
      tempScale.set(p.scale, p.scale, p.scale);

      tempMatrix.compose(tempPosition, tempQuaternion, tempScale);
      mesh.setMatrixAt(i, tempMatrix);
      mesh.setColorAt(i, p.color);
    });

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

    // 2. Mouse parallax effect (shift coordinates slightly based on pointer position)
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.3;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        {/* 3-sided cone geometry = a wireframe pyramid */}
        <coneGeometry args={[0.12, 0.3, 3]} />
        <meshBasicMaterial
          wireframe
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>
    </group>
  );
}
