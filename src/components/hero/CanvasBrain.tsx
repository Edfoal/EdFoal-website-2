"use client";

import React, { useEffect, useRef } from "react";

// Brain silhouette: a realistic side-profile brain shape
const BRAIN_PATH_NORM = [
  [0.50, 0.92], // bottom stem left
  [0.45, 0.85],
  [0.38, 0.82],
  [0.28, 0.80],
  [0.18, 0.76],
  [0.10, 0.68],
  [0.06, 0.58],
  [0.05, 0.48],
  [0.07, 0.38],
  [0.10, 0.30],
  [0.13, 0.23], // frontal lobe area
  [0.17, 0.16],
  [0.23, 0.10],
  [0.30, 0.06],
  [0.38, 0.04],
  [0.46, 0.03], // top center
  [0.54, 0.04],
  [0.62, 0.06],
  [0.70, 0.10],
  [0.76, 0.15],
  [0.82, 0.22],
  [0.87, 0.30],
  [0.90, 0.38], // right side / parietal
  [0.92, 0.46],
  [0.91, 0.55],
  [0.88, 0.63],
  [0.83, 0.70], // occipital area
  [0.76, 0.76],
  [0.68, 0.80],
  [0.60, 0.83],
  [0.56, 0.88],
  [0.54, 0.93], // back to stem
  [0.52, 0.95],
  [0.50, 0.92],
];

// Internal sulcus concavity (a dip on left side = frontal/parietal boundary)
const SULCUS = [
  [0.25, 0.30],
  [0.32, 0.27],
  [0.36, 0.32],
  [0.33, 0.38],
  [0.27, 0.40],
  [0.23, 0.35],
  [0.25, 0.30],
];

const GOLD = ["#f5a623", "#f7c63a", "#e89010", "#ffcc44", "#f0a820", "#d4860a", "#fbb034", "#ffb347"];
const MID = ["#2dd4bf", "#a78bfa", "#818cf8", "#ffffff", "#34d399", "#c084fc", "#67e8f9", "#60a5fa", "#38bdf8", "#818cf8"];
const INNER = ["#e2e8f0", "#cbd5e1", "#a5b4fc", "#7dd3fc", "#c4b5fd", "#f0f4ff", "#ffffff", "#dde4ff", "#c7d2fe"];

const BG_C = [
  "#7c3aed",
  "rgba(124,58,237,0.5)",
  "rgba(255,255,255,0.18)",
  "rgba(255,255,255,0.10)",
  "#a78bfa",
  "rgba(167,139,250,0.4)",
];

export default function CanvasBrain() {
  const floatCanvasRef = useRef<HTMLCanvasElement>(null);
  const brainCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const floatCanvas = floatCanvasRef.current;
    const brainCanvas = brainCanvasRef.current;
    if (!floatCanvas || !brainCanvas) return;

    let animationFrameId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    floatCanvas.width = W;
    floatCanvas.height = H;
    const fX = floatCanvas.getContext("2d")!;

    let BW = Math.round(W * 0.65);
    let BH = H;
    brainCanvas.width = BW;
    brainCanvas.height = BH;
    const bX = brainCanvas.getContext("2d")!;

    let MARGIN_X = BW * 0.05;
    let MARGIN_Y = BH * 0.08;
    let SCALE_X = BW * 0.90;
    let SCALE_Y = BH * 0.82;

    function norm2px(nx: number, ny: number): [number, number] {
      return [MARGIN_X + nx * SCALE_X, MARGIN_Y + ny * SCALE_Y];
    }

    function buildPath(pts: number[][]): Path2D {
      const path = new Path2D();
      const [x0, y0] = norm2px(pts[0][0], pts[0][1]);
      path.moveTo(x0, y0);
      for (let i = 1; i < pts.length; i++) {
        const [x, y] = norm2px(pts[i][0], pts[i][1]);
        path.lineTo(x, y);
      }
      path.closePath();
      return path;
    }

    let pixData: Uint8ClampedArray;

    function initOffscreen() {
      const offC = document.createElement("canvas");
      offC.width = BW;
      offC.height = BH;
      const offX = offC.getContext("2d")!;

      const brainPath = buildPath(BRAIN_PATH_NORM);
      const sulcusPath = buildPath(SULCUS);

      offX.fillStyle = "#fff";
      offX.fill(brainPath);
      offX.fillStyle = "#000";
      offX.fill(sulcusPath);

      pixData = offX.getImageData(0, 0, BW, BH).data;
    }

    initOffscreen();

    function inBrain(x: number, y: number): boolean {
      const ix = Math.round(x);
      const iy = Math.round(y);
      if (ix < 0 || ix >= BW || iy < 0 || iy >= BH) return false;
      if (!pixData) return false;
      const idx = (iy * BW + ix) * 4;
      return pixData[idx] > 128;
    }

    let CX = MARGIN_X + 0.50 * SCALE_X;
    let CY = MARGIN_Y + 0.45 * SCALE_Y;
    let RADIUS = Math.min(SCALE_X, SCALE_Y) * 0.45;

    function updateCentroid() {
      CX = MARGIN_X + 0.50 * SCALE_X;
      CY = MARGIN_Y + 0.45 * SCALE_Y;
      RADIUS = Math.min(SCALE_X, SCALE_Y) * 0.45;
    }

    function zoneDist(x: number, y: number): number {
      return Math.sqrt((x - CX) ** 2 + (y - CY) ** 2) / RADIUS;
    }

    function pickColor(x: number, y: number): string {
      const d = zoneDist(x, y);
      if (d > 0.80) return GOLD[Math.floor(Math.random() * GOLD.length)];
      if (d > 0.45) return MID[Math.floor(Math.random() * MID.length)];
      return INNER[Math.floor(Math.random() * INNER.length)];
    }

    class BrainTri {
      x: number = 0;
      y: number = 0;
      sz: number = 0;
      color: string = "";
      alpha: number = 1;
      rot: number = 0;
      rSpeed: number = 0;
      outline: boolean = false;

      constructor() {
        this.place();
      }

      place() {
        let x = 0, y = 0, tries = 0;
        do {
          x = MARGIN_X + Math.random() * SCALE_X;
          y = MARGIN_Y + Math.random() * SCALE_Y;
          tries++;
        } while (!inBrain(x, y) && tries < 300);
        this.x = x;
        this.y = y;
        this.sz = 3 + Math.random() * 6.5;
        this.color = pickColor(x, y);
        this.alpha = 0.55 + Math.random() * 0.45;
        this.rot = Math.random() * Math.PI * 2;
        this.rSpeed = (Math.random() - 0.5) * 0.005;
        this.outline = Math.random() < 0.38;
      }

      draw() {
        bX.save();
        bX.translate(this.x, this.y);
        bX.rotate(this.rot);
        bX.globalAlpha = this.alpha;
        const s = this.sz;
        bX.beginPath();
        bX.moveTo(0, -s);
        bX.lineTo(s * 0.866, s * 0.5);
        bX.lineTo(-s * 0.866, s * 0.5);
        bX.closePath();
        if (this.outline) {
          bX.strokeStyle = this.color;
          bX.lineWidth = 0.7;
          bX.stroke();
        } else {
          bX.fillStyle = this.color;
          bX.fill();
        }
        bX.restore();
        this.rot += this.rSpeed;
      }
    }

    class FloatTri {
      x: number = 0;
      y: number = 0;
      sz: number = 0;
      vx: number = 0;
      vy: number = 0;
      rot: number = 0;
      rS: number = 0;
      color: string = "";
      alpha: number = 1;
      outline: boolean = false;

      constructor(init: boolean) {
        this.reset(init);
      }

      reset(init: boolean) {
        this.x = init ? Math.random() * W : (Math.random() < 0.5 ? -30 : W + 30);
        this.y = Math.random() * H;
        this.sz = 9 + Math.random() * 24;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.rot = Math.random() * Math.PI * 2;
        this.rS = (Math.random() - 0.5) * 0.009;
        this.color = BG_C[Math.floor(Math.random() * BG_C.length)];
        this.alpha = 0.10 + Math.random() * 0.28;
        this.outline = Math.random() < 0.65;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rot += this.rS;
        if (this.x < -60 || this.x > W + 60 || this.y < -60 || this.y > H + 60) {
          this.reset(false);
        }
      }

      draw() {
        fX.save();
        fX.translate(this.x, this.y);
        fX.rotate(this.rot);
        fX.globalAlpha = this.alpha;
        const s = this.sz;
        fX.beginPath();
        fX.moveTo(0, -s);
        fX.lineTo(s * 0.866, s * 0.5);
        fX.lineTo(-s * 0.866, s * 0.5);
        fX.closePath();
        if (this.outline) {
          fX.strokeStyle = this.color;
          fX.lineWidth = 1.4;
          fX.stroke();
        } else {
          fX.fillStyle = this.color;
          fX.fill();
        }
        fX.restore();
      }
    }

    let brainTris = Array.from({ length: 2800 }, () => new BrainTri());
    const floatTris = Array.from({ length: 65 }, () => new FloatTri(true));

    let tick = 0;
    function loop() {
      fX.clearRect(0, 0, W, H);
      for (const f of floatTris) {
        f.update();
        f.draw();
      }

      bX.clearRect(0, 0, BW, BH);
      tick++;
      if (tick % 2 === 0) {
        for (let i = 0; i < 12; i++) {
          const p = brainTris[Math.floor(Math.random() * brainTris.length)];
          if (p) {
            p.alpha = 0.30 + Math.random() * 0.70;
          }
        }
      }
      for (const t of brainTris) {
        t.draw();
      }
      animationFrameId = requestAnimationFrame(loop);
    }

    loop();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      floatCanvas.width = W;
      floatCanvas.height = H;

      BW = Math.round(W * 0.65);
      BH = H;
      brainCanvas.width = BW;
      brainCanvas.height = BH;

      MARGIN_X = BW * 0.05;
      MARGIN_Y = BH * 0.08;
      SCALE_X = BW * 0.90;
      SCALE_Y = BH * 0.82;

      updateCentroid();
      initOffscreen();
      brainTris = Array.from({ length: 2800 }, () => new BrainTri());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={floatCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-1"
        style={{ display: "block" }}
      />
      <canvas
        ref={brainCanvasRef}
        className="absolute right-0 top-0 bottom-0 pointer-events-none z-2"
        style={{ display: "block" }}
      />
    </>
  );
}
