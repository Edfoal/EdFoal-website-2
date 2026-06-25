"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';

interface WovenLightHeroProps {
  kicker?: string;
  titleLines?: string[];
  subtitle?: string;
}

// --- Main Hero Component ---
export const WovenLightHero: React.FC<WovenLightHeroProps> = ({
  kicker = "Case Studies",
  titleLines = ["Real Results,", "Real Impact"],
  subtitle = "Explore how we're transforming businesses with cutting-edge AI solutions — backed by measurable outcomes."
}) => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    // Add a more elegant font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    textControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03 + 1.2,
        duration: 1.0,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }));
    buttonControls.start({
        opacity: 1,
        transition: { delay: 2.2, duration: 1 }
    });

    return () => {
        document.head.removeChild(link);
    }
  }, [textControls, buttonControls]);

  // Calculate total character count for subtitle stagger delay
  const totalChars = titleLines.reduce((acc, line) => acc + line.length, 0);

  return (
    <div className="relative flex h-[65vh] mx-2.5 mt-2.5 flex-col items-center justify-center overflow-hidden bg-black">
      <WovenCanvas />
      
      {/* Bottom fade overlay to transition the black canvas background into the white content area below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center select-none">
        {/* kicker/label */}
        {kicker && (
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-400 block mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {kicker}
          </motion.span>
        )}

        {/* Multi-line Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-extrabold leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 0 50px rgba(255, 255, 255, 0.3)' }}>
          {titleLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-3 last:mr-0">
                  {word.split("").map((char, charIdx) => {
                    const delayIdx = lineIdx * 15 + wordIdx * 5 + charIdx;
                    return (
                      <motion.span 
                        key={charIdx} 
                        custom={delayIdx} 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={textControls} 
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          custom={totalChars}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {subtitle}
        </motion.p>

        {/* Action Button */}
        {/* <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-10">
          <button className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explore Case Studies
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

// --- Navigation Component (Kept for reference/compatibility) ---
export const HeroNav = () => {
    return (
        <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="absolute top-0 left-0 right-0 z-20 p-6"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">⎎</span>
                    <span className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Woven</span>
                </div>
            </div>
        </motion.nav>
    );
};

// --- Three.js Canvas Component ---
const WovenCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Style the canvas to ensure it behaves correctly inside the absolute container
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    mountRef.current.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // --- Woven Silk ---
    const particleCount = 50000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);

    for (let i = 0; i < particleCount; i++) {
        const vertexIndex = i % torusKnot.attributes.position.count;
        const x = torusKnot.attributes.position.getX(vertexIndex);
        const y = torusKnot.attributes.position.getY(vertexIndex);
        const z = torusKnot.attributes.position.getZ(vertexIndex);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;

        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.8, isDarkMode ? 0.5 : 0.7);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        velocities[i * 3] = 0;
        velocities[i * 3 + 1] = 0;
        velocities[i * 3 + 2] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        blending: isDarkMode ? THREE.NormalBlending : THREE.AdditiveBlending,
        transparent: true,
        opacity: isDarkMode ? 1.0 : 0.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const handleMouseMove = (event: MouseEvent) => {
        // Calculate mouse position relative to the container instead of window
        if (!mountRef.current) return;
        const rect = mountRef.current.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        
        const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0);

        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
            const originalPos = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
            const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

            const dist = currentPos.distanceTo(mouseWorld);
            if (dist < 1.5) {
                const force = (1.5 - dist) * 0.01;
                const direction = new THREE.Vector3().subVectors(currentPos, mouseWorld).normalize();
                velocity.add(direction.multiplyScalar(force));
            }

            // Return to original position
            const returnForce = new THREE.Vector3().subVectors(originalPos, currentPos).multiplyScalar(0.001);
            velocity.add(returnForce);
            
            // Damping
            velocity.multiplyScalar(0.95);

            positions[ix] += velocity.x;
            positions[iy] += velocity.y;
            positions[iz] += velocity.z;
            
            velocities[ix] = velocity.x;
            velocities[iy] = velocity.y;
            velocities[iz] = velocity.z;
        }
        geometry.attributes.position.needsUpdate = true;

        points.rotation.y = elapsedTime * 0.05;
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        if (!mountRef.current) return;
        const w = mountRef.current.clientWidth;
        const h = mountRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden" />;
};
