'use client';

import React, { useEffect, useRef } from 'react';

export function WireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Icosahedron Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: [number, number, number][] = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    // Normalize
    const vertices = rawVertices.map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len] as [number, number, number];
    });

    // Edges of icosahedron
    const edges: [number, number][] = [];
    const threshold = 1.05 * (2 / Math.hypot(1, phi, 0));
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dist = Math.hypot(
          vertices[i][0] - vertices[j][0],
          vertices[i][1] - vertices[j][1],
          vertices[i][2] - vertices[j][2]
        );
        if (dist < threshold + 0.1) {
          edges.push([i, j]);
        }
      }
    }

    // Inner core vertices (dual pentagonal prism / inner octahedron)
    const innerVertices: [number, number, number][] = [
      [0, 1, 0],
      [0, -1, 0],
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
    ].map(([x, y, z]) => [x * 0.5, y * 0.5, z * 0.5]);

    const innerEdges: [number, number][] = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2],
    ];

    let rotX = 0.3;
    let rotY = 0.4;
    let targetRotX = 0.3;
    let targetRotY = 0.4;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
      targetRotX = y * 1.5;
      targetRotY = x * 1.8;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const project = (
      x: number,
      y: number,
      z: number,
      scale: number,
      angleX: number,
      angleY: number
    ) => {
      // Rotation Y
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotation X
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const fov = 3.5;
      const distance = fov / (fov + z2);
      const projX = width / 2 + x1 * scale * distance;
      const projY = height / 2 + y2 * scale * distance;

      return { x: projX, y: projY, z: z2, scale: distance };
    };

    let time = 0;

    const render = () => {
      time += 0.008;

      if (!isHovering) {
        targetRotY += 0.005;
        targetRotX = Math.sin(time * 0.5) * 0.25;
      }

      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const baseScale = Math.min(width, height) * 0.32;

      // Outer Icosahedron
      const projectedOuter = vertices.map(([x, y, z]) =>
        project(x, y, z, baseScale, rotX, rotY + time * 0.2)
      );

      // Inner Core
      const projectedInner = innerVertices.map(([x, y, z]) =>
        project(x, y, z, baseScale, rotX * 1.2, rotY * 1.4 - time * 0.3)
      );

      // Draw subtle orbital rings
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, baseScale * 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = isDark
        ? 'rgba(255, 255, 255, 0.04)'
        : 'rgba(45, 42, 36, 0.05)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.restore();

      // Draw inner edges
      ctx.lineWidth = 1;
      innerEdges.forEach(([i, j]) => {
        const p1 = projectedInner[i];
        const p2 = projectedInner[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.1, (avgZ + 1) * 0.3);

        ctx.strokeStyle = isDark
          ? `rgba(0, 180, 216, ${alpha * 0.8})`
          : `rgba(23, 108, 254, ${alpha * 0.7})`;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw outer edges
      edges.forEach(([i, j]) => {
        const p1 = projectedOuter[i];
        const p2 = projectedOuter[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, (avgZ + 1.2) * 0.38);

        ctx.lineWidth = avgZ > 0 ? 1.5 : 1;
        ctx.strokeStyle = isDark
          ? `rgba(255, 255, 255, ${alpha * 0.65})`
          : `rgba(45, 42, 36, ${alpha * 0.55})`;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw vertices / glow nodes
      projectedOuter.forEach((p, idx) => {
        const alpha = Math.max(0.2, (p.z + 1.2) * 0.45);
        const radius = Math.max(2, (p.z + 1.2) * 2.2);

        ctx.fillStyle = isDark
          ? idx % 2 === 0
            ? `rgba(0, 200, 255, ${alpha})`
            : `rgba(255, 255, 255, ${alpha})`
          : idx % 2 === 0
          ? `rgba(23, 108, 254, ${alpha})`
          : `rgba(45, 42, 36, ${alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[540px] max-h-[540px] cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
