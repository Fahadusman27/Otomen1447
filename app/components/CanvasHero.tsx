"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Register BOTH plugins at module level ───────────────────────────────────
// useGSAP itself must be registered so React Strict Mode cleanup works correctly.
gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── Custom frame sequence ───────────────────────────────────────────────────
// Phase 1 (Car enters):  frames 35–46  → indices  0–11
// Phase 2 (Lights on):   frames 47–60  → indices 12–25
// Phase 3 (Lights off):  frame  06     → index   26
// Phase 4 (Car exits):   frames 07–09  → indices 27–29
const FRAME_SEQUENCE: number[] = [
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  6,
  7, 8, 9,
];
const TOTAL_FRAMES = FRAME_SEQUENCE.length; // 30

// Phase boundary indices
const PHASE_2_START = 12; // first "lights on" frame index
const PHASE_3_START = 26; // "lights off" frame index

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getFrameUrl(frameNum: number): string {
  return `/frammer/frame_${String(frameNum).padStart(4, "0")}.jpg`;
}

/** Draw an image onto the canvas using object-fit: cover semantics. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
) {
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = cw / ch;
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

  if (ir > cr) {
    sw = img.naturalHeight * cr;
    sx = (img.naturalWidth - sw) / 2;
  } else {
    sh = img.naturalWidth / cr;
    sy = (img.naturalHeight - sh) / 2;
  }

  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function CanvasHero() {
  // containerRef is the scope root for useGSAP
  const containerRef = useRef<HTMLDivElement>(null);
  // sectionRef is the actual ScrollTrigger trigger / pin target
  const sectionRef  = useRef<HTMLElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);

  const imagesRef      = useRef<HTMLImageElement[]>([]);
  const currentIdxRef  = useRef(0);

  const [isLoaded,      setIsLoaded]      = useState(false);
  const [loadProgress,  setLoadProgress]  = useState(0);

  // ── Resize: keep canvas pixel dimensions in sync with CSS size ──────────────
  const syncCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width  = Math.round(width);
    canvas.height = Math.round(height);
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[currentIdxRef.current];
    if (ctx && img) drawCover(ctx, img, canvas.width, canvas.height);
  }, []);

  // ── Preload all frames before GSAP is initialised ───────────────────────────
  useEffect(() => {
    let done = 0;
    const total = FRAME_SEQUENCE.length;

    const promises = FRAME_SEQUENCE.map((num) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload  = () => { done++; setLoadProgress(Math.round((done / total) * 100)); resolve(img); };
        img.onerror = () => reject(new Error(`Failed: ${getFrameUrl(num)}`));
        img.src     = getFrameUrl(num);
      })
    );

    Promise.all(promises)
      .then((imgs) => { imagesRef.current = imgs; setIsLoaded(true); })
      .catch((err) => { console.error("[CanvasHero] preload error:", err); setIsLoaded(true); });
  }, []);

  // ── Draw frame 0 immediately once images are ready ──────────────────────────
  useEffect(() => {
    if (!isLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width  = Math.round(width);
    canvas.height = Math.round(height);
    const ctx = canvas.getContext("2d");
    if (ctx && imagesRef.current[0]) drawCover(ctx, imagesRef.current[0], canvas.width, canvas.height);
    window.addEventListener("resize", syncCanvas);
    return () => window.removeEventListener("resize", syncCanvas);
  }, [isLoaded, syncCanvas]);

  // ── GSAP ScrollTrigger (pin + scrub) ────────────────────────────────────────
  useGSAP(
    () => {
      // Guard: don't run until all frames are in memory
      if (!isLoaded) return;
      if (!sectionRef.current || !canvasRef.current || !overlayRef.current) return;

      const images  = imagesRef.current;
      if (!images.length) return;

      // Also register inside the hook — required for Strict Mode safety
      gsap.registerPlugin(ScrollTrigger);

      // ── Render a specific frame index onto the canvas ────────────────────
      function renderFrame(rawIndex: number) {
        const index = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(rawIndex)));
        currentIdxRef.current = index;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        const { width, height } = canvas.getBoundingClientRect();
        if (canvas.width  !== Math.round(width))  canvas.width  = Math.round(width);
        if (canvas.height !== Math.round(height)) canvas.height = Math.round(height);

        drawCover(ctx, img, canvas.width, canvas.height);
      }

      // ── Drive overlay opacity/blur directly from scroll progress ─────────
      // Phase fractions (progress 0 → 1 maps across all TOTAL_FRAMES)
      const p2In  = PHASE_2_START / (TOTAL_FRAMES - 1);       // ~0.414 — overlay starts fading in
      const p2Full = (PHASE_2_START + 3) / (TOTAL_FRAMES - 1); // ~0.517 — overlay fully visible
      const p3Out = PHASE_3_START / (TOTAL_FRAMES - 1);         // ~0.897 — overlay starts fading out
      const p3End = (PHASE_3_START + 0.8) / (TOTAL_FRAMES - 1); // overlay fully gone

      function updateOverlay(progress: number) {
        const el = overlayRef.current;
        if (!el) return;
        let opacity = 0;
        let blurPx  = 20;

        if (progress <= p2In) {
          opacity = 0; blurPx = 20;
        } else if (progress <= p2Full) {
          const t = (progress - p2In) / (p2Full - p2In);
          opacity = t; blurPx = (1 - t) * 20;
        } else if (progress <= p3Out) {
          opacity = 1; blurPx = 0;
        } else if (progress <= p3End) {
          const t = (progress - p3Out) / (p3End - p3Out);
          opacity = 1 - t; blurPx = t * 20;
        } else {
          opacity = 0; blurPx = 20;
        }

        gsap.set(el, { opacity, filter: `blur(${blurPx}px)` });
      }

      // ── Create the pinned, scrubbed ScrollTrigger ────────────────────────
      const st = ScrollTrigger.create({
        trigger:      sectionRef.current,
        start:        "top top",
        end:          "+=300%",        // 3 viewport-heights of scroll space
        pin:          true,
        pinSpacing:   true,
        anticipatePin: 1,
        scrub:        1.5,             // slight lag for cinematic feel
        onUpdate: (self) => {
          renderFrame(self.progress * (TOTAL_FRAMES - 1));
          updateOverlay(self.progress);
        },
      });

      // Force ScrollTrigger to recalculate after React's hydration pass
      ScrollTrigger.refresh();

      return () => {
        st.kill();
        ScrollTrigger.refresh();
      };
    },
    // scope = containerRef so GSAP cleans up correctly in Strict Mode
    { scope: containerRef, dependencies: [isLoaded] }
  );

  // ─── JSX ──────────────────────────────────────────────────────────────────
  return (
    // containerRef is the useGSAP scope — a plain wrapper with no visual styles
    <div ref={containerRef}>
      {/* sectionRef is the ScrollTrigger trigger and pin target */}
      <section
        ref={sectionRef}
        id="hero"
        aria-label="Hero animation section"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {/* ── Loading screen ─────────────────────────────────────────────── */}
        {!isLoaded && (
          <div
            style={{
              position: "absolute", inset: 0, zIndex: 50,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              background: "#000", gap: "1rem",
            }}
          >
            <span
              style={{
                color: "var(--accent)", fontSize: "0.75rem",
                fontFamily: "monospace", letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Loading Frames
            </span>
            <div
              style={{
                width: "12rem", height: "1px",
                background: "#27272a", position: "relative", overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: "0 auto 0 0",
                  background: "var(--accent)",
                  width: `${loadProgress}%`,
                  transition: "width 100ms linear",
                }}
              />
            </div>
            <span
              style={{
                color: "#52525b", fontSize: "0.75rem", fontFamily: "monospace",
              }}
            >
              {loadProgress}%
            </span>
          </div>
        )}

        {/* ── Canvas ─────────────────────────────────────────────────────── */}
        <canvas
          ref={canvasRef}
          id="hero-canvas"
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            display: isLoaded ? "block" : "none",
            background: "#000",
          }}
        />

        {/* ── Vignette ───────────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            pointerEvents: "none", zIndex: 10,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* ── "About" overlay (driven by updateOverlay) ──────────────────── */}
        <div
          ref={overlayRef}
          id="about-overlay"
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            zIndex: 20,
            display: "flex", alignItems: "center", justifyContent: "flex-end",
            pointerEvents: "none",
            opacity: 0,
            filter: "blur(20px)",
          }}
        >
          <div
            style={{
              marginRight: "clamp(2rem, 8vw, 6rem)",
              maxWidth: "min(28rem, 90vw)",
              textAlign: "right",
              display: "flex", flexDirection: "column", gap: "1rem",
            }}
          >
            <span
              style={{
                color: "var(--accent)", fontSize: "0.7rem",
                fontFamily: "monospace", letterSpacing: "0.4em",
                textTransform: "uppercase",
              }}
            >
              Tentang Kami
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700, lineHeight: 1.1,
                background: "linear-gradient(135deg, #e8c98a 0%, #c8a96e 50%, #9a7a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Otomen<br />Automotive
            </h2>

            <div
              style={{
                marginLeft: "auto",
                width: "60px", height: "1px",
                background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              }}
            />

            <p style={{ fontSize: "0.9rem", color: "#d4d4d8", lineHeight: 1.7 }}>
              Kami adalah dealer otomotif premium yang berkomitmen menghadirkan
              kendaraan berkualitas tinggi dengan layanan terbaik. Kepuasan
              pelanggan adalah prioritas utama kami.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2rem", justifyContent: "flex-end", paddingTop: "0.5rem" }}>
              {[
                { value: "15+", label: "Tahun" },
                { value: "2K+", label: "Unit Terjual" },
                { value: "98%", label: "Kepuasan" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--accent)" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "#52525b", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scroll hint ─────────────────────────────────────────────────── */}
        <div
          id="scroll-hint"
          style={{
            position: "absolute",
            bottom: "2rem", left: "50%",
            transform: "translateX(-50%)",
            zIndex: 30,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem", fontFamily: "monospace",
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px", height: "2rem",
              background: "var(--accent)",
              animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
        </div>
      </section>
    </div>
  );
}
