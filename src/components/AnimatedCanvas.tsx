import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "../assets/styles/AnimatedCanvas.css";

const AnimatedCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const largeHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ctx: CanvasRenderingContext2D | null = null;
    let points: any[] = [];
    const target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    const initializeCanvas = () => {
      if (largeHeaderRef.current) {
        largeHeaderRef.current.style.height = `${height}px`;
      }

      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");

        if (!ctx) {
          console.error("Failed to get 2D context");
          return;
        }
      }

      createPoints();
      initAnimation();
    };

    const createPoints = () => {
      points = [];
      const pointSpacing = width / 20;
      for (let x = 0; x < width; x += pointSpacing) {
        for (let y = 0; y < height; y += pointSpacing) {
          const px = x + Math.random() * pointSpacing;
          const py = y + Math.random() * pointSpacing;
          const point = {
            x: px,
            y: py,
            originX: px,
            originY: py,
            closest: [],
            circle: null,
          };
          points.push(point);
        }
      }

      points.forEach((p1) => {
        const closest: any[] = [];
        points.forEach((p2) => {
          if (p1 !== p2) {
            closest.push(p2);
            closest.sort((a, b) => getDistance(p1, a) - getDistance(p1, b));
            if (closest.length > 5) closest.pop();
          }
        });
        p1.closest = closest;
        p1.circle = new Circle(p1, 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
      });
    };

    const initAnimation = () => {
      animate();
      points.forEach((point) => shiftPoint(point));
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      points.forEach((point) => {
        const distance = Math.abs(getDistance(target, point));
        if (distance < 4000) {
          point.active = 0.3;
          point.circle.active = 0.6;
        } else if (distance < 20000) {
          point.active = 0.1;
          point.circle.active = 0.3;
        } else {
          point.active = 0;
          point.circle.active = 0;
        }

        drawLines(point);
        point.circle.draw();
      });

      if (animateHeader) requestAnimationFrame(animate);
    };

    const shiftPoint = (point: any) => {
      gsap.to(point, {
        x: point.originX - 50 + Math.random() * 100,
        y: point.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        duration: 1 + Math.random(),
        onComplete: () => shiftPoint(point),
      });
    };

    const drawLines = (point: any) => {
      if (!ctx || !point.active) return;

      ctx.beginPath();
      point.closest.forEach((closestPoint: any) => {
        ctx?.moveTo(point.x, point.y);
        ctx?.lineTo(closestPoint.x, closestPoint.y);
      });
      ctx.strokeStyle = `rgba(156,217,249,${point.active})`;
      ctx.stroke();
    };

    class Circle {
      pos: any;
      radius: number;
      color: string;
      active: number;

      constructor(pos: any, radius: number, color: string) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
        this.active = 0;
      }

      draw() {
        if (!ctx || !this.active) return;

        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      }
    }

    const getDistance = (p1: any, p2: any) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }

      initializeCanvas();
    };

    window.addEventListener("mousemove", (e) => {
      target.x = e.pageX || e.clientX;
      target.y = e.pageY || e.clientY;
    });

    window.addEventListener("resize", resizeHandler);

    initializeCanvas();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div ref={largeHeaderRef} className="large-header">
      <canvas ref={canvasRef} />
      <h1 className="main-title">
         <span className="thin"></span>
      </h1>
    </div>
  );
};

export default AnimatedCanvas;
