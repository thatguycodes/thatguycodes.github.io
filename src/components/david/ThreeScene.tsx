'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { WireframeCanvas } from './WireframeCanvas';

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLFailed(true);
        return;
      }
    } catch {
      setWebGLFailed(true);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to 2D Canvas:', e);
      setWebGLFailed(true);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xe09f3e, 2.5); // Sahara Amber glow
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc86d3b, 1.8); // Sahara Terracotta highlight
    dirLight2.position.set(-5, -4, 3);
    scene.add(dirLight2);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Faceted Crystal (Icosahedron with flat shading)
    const geom = new THREE.IcosahedronGeometry(1.25, 0);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xdfd1bc,
      roughness: 0.25,
      metalness: 0.1,
      transmission: 0.45,
      thickness: 1.2,
      ior: 1.5,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const crystal = new THREE.Mesh(geom, mat);
    mainGroup.add(crystal);

    // 2. Wireframe Cage
    const wireGeom = new THREE.IcosahedronGeometry(1.26, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x393431,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.Mesh(wireGeom, wireMat);
    mainGroup.add(wireframe);

    // 3. Inner Glowing Core (Octahedron)
    const innerGeom = new THREE.OctahedronGeometry(0.65, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xffba56,
      emissive: 0xe09f3e,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.8,
      flatShading: true,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    mainGroup.add(innerCore);

    // 4. Orbital Ring
    const ringGeom = new THREE.TorusGeometry(1.9, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffba56,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    mainGroup.add(ring);

    // 5. Floating Dust / Point Cloud
    const particlesCount = 75;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 1.8 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }
    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xffba56,
      transparent: true,
      opacity: 0.65,
    });
    const particleCloud = new THREE.Points(particlesGeom, particlesMat);
    mainGroup.add(particleCloud);

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse tracking & smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (prefersReducedMotion) return;
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        targetX = mouseX * 0.45;
        targetY = mouseY * 0.45;

        mainGroup.rotation.y += 0.005;
        mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, targetY, 0.05);
        mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, targetX + elapsedTime * 0.15, 0.05);

        const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.04;
        innerCore.scale.set(pulse, pulse, pulse);
        innerCore.rotation.y -= 0.012;
        innerCore.rotation.z += 0.008;

        ring.rotation.z += 0.003;
        particleCloud.rotation.y -= 0.002;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      particlesGeom.dispose();
      particlesMat.dispose();
    };
  }, []);

  if (webGLFailed) {
    return <WireframeCanvas />;
  }

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-none select-none"
    />
  );
}
