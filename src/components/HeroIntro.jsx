"use client";

import { useEffect, useRef } from "react";

/**
 * HeroIntro
 * A full-screen animated intro section that sits ABOVE the main Hero.
 *
 * Background:
 *   - A loyalty-themed animated canvas with floating DIGITAL LOYALTY CARDS
 *     (chip, stripe, moving sheen, card-number dots), coins/points, "+10"
 *     points tags, tier stars, sparkles and a subtle connected-node network.
 *   - Depth parallax: particles live on different depth layers, so nearer
 *     items are larger/brighter/faster and far ones drift slowly behind.
 *   - Mouse parallax: the whole field shifts gently with the cursor.
 *   - Optional real video: pass `videoSrc` (e.g. "/hero-bg.mp4") after placing
 *     the file in the /public folder, and it will play behind the animation.
 *
 * Foreground:
 *   - The "Rewaldo" wordmark reveals letter-by-letter with a shine sweep,
 *     followed by a tagline, a CTA and a scroll cue.
 */
const HeroIntro = ({ videoSrc = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let rafId = 0;
    let t = 0;

    // Smoothed mouse parallax target (-1..1 on each axis).
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(rand(0, arr.length))];

    const POINT_LABELS = ["+10", "+25", "+50", "★", "+5"];
    // Spawn weights: cards are now a prominent part of the mix.
    const TYPE_BAG = [
      "card", "card", "card",
      "coin", "coin",
      "points", "points",
      "star",
      "spark", "spark",
      "node",
    ];

    const makeParticle = () => {
      const type = pick(TYPE_BAG);
      const z = rand(0.4, 1); // depth: small = far, 1 = near
      const base =
        type === "card"
          ? rand(46, 74)
          : type === "coin"
          ? rand(16, 26)
          : type === "points"
          ? rand(15, 22)
          : type === "spark"
          ? rand(1.4, 3.2)
          : rand(12, 20);
      return {
        type,
        z,
        x: rand(0, width),
        y: rand(0, height),
        size: base * z,
        vx: rand(-0.18, 0.18) * z,
        vy: (type === "spark" ? rand(-0.35, -0.15) : rand(-0.5, -0.2)) * z,
        rot: rand(-0.5, 0.5),
        vr: rand(-0.006, 0.006),
        sway: rand(6, 20) * z,
        opacity: (0.35 + 0.5 * z) * (type === "card" ? 0.9 : 1),
        phase: rand(0, Math.PI * 2),
        label: pick(POINT_LABELS),
      };
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.round(Math.min(42, Math.max(20, width / 34)));
      particles = Array.from({ length: target }, makeParticle);
      // Draw nearer particles last (on top).
      particles.sort((a, b) => a.z - b.z);
    };

    // ---------- shape helpers ----------
    const roundRect = (x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    const starPath = (radius) => {
      ctx.beginPath();
      const spikes = 5;
      const inner = radius * 0.45;
      let rot = -Math.PI / 2;
      const step = Math.PI / spikes;
      ctx.moveTo(Math.cos(rot) * radius, Math.sin(rot) * radius);
      for (let i = 0; i < spikes; i++) {
        rot += step;
        ctx.lineTo(Math.cos(rot) * inner, Math.sin(rot) * inner);
        rot += step;
        ctx.lineTo(Math.cos(rot) * radius, Math.sin(rot) * radius);
      }
      ctx.closePath();
    };

    // ---------- particle renderers (drawn in local, centered space) ----------
    const drawCard = (p) => {
      const w = p.size;
      const h = w * 0.63;
      const r = w * 0.12;
      const x = -w / 2;
      const y = -h / 2;

      // body with a soft green gradient
      const g = ctx.createLinearGradient(x, y, x + w, y + h);
      g.addColorStop(0, "rgba(120,230,175,0.95)");
      g.addColorStop(0.55, "rgba(63,174,106,0.92)");
      g.addColorStop(1, "rgba(20,102,63,0.92)");
      roundRect(x, y, w, h, r);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.stroke();

      // chip
      const cw = w * 0.16;
      const ch = cw * 0.78;
      roundRect(x + w * 0.12, y + h * 0.26, cw, ch, cw * 0.18);
      ctx.fillStyle = "rgba(245,199,65,0.95)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // star mark (top-right)
      ctx.save();
      ctx.translate(x + w * 0.82, y + h * 0.26);
      starPath(w * 0.07);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
      ctx.restore();

      // card-number dots (two rows)
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      for (let row = 0; row < 2; row++) {
        for (let i = 0; i < 4; i++) {
          ctx.fillRect(
            x + w * 0.12 + i * w * 0.09,
            y + h * (0.62 + row * 0.16),
            w * 0.055,
            h * 0.05
          );
        }
      }

      // moving sheen, clipped to the card
      ctx.save();
      roundRect(x, y, w, h, r);
      ctx.clip();
      const sweep = ((t * 0.6 + p.phase * 40) % (w * 2)) - w * 0.5;
      const sg = ctx.createLinearGradient(sweep - w * 0.2, y, sweep + w * 0.2, y + h);
      sg.addColorStop(0, "rgba(255,255,255,0)");
      sg.addColorStop(0.5, "rgba(255,255,255,0.28)");
      sg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = sg;
      ctx.fillRect(x, y, w, h);
      ctx.restore();
    };

    const drawCoin = (p) => {
      const rad = p.size / 2;
      const g = ctx.createRadialGradient(-rad * 0.3, -rad * 0.3, rad * 0.1, 0, 0, rad);
      g.addColorStop(0, "rgba(255,255,255,0.95)");
      g.addColorStop(1, "rgba(120,220,170,0.7)");
      ctx.beginPath();
      ctx.arc(0, 0, rad, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.stroke();
      starPath(rad * 0.5);
      ctx.fillStyle = "rgba(20,102,63,0.85)";
      ctx.fill();
    };

    const drawPoints = (p) => {
      const w = p.size * 1.7;
      const h = p.size * 0.92;
      roundRect(-w / 2, -h / 2, w, h, h / 2);
      ctx.fillStyle = "rgba(15,72,50,0.55)";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(180,240,205,0.8)";
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.font = `600 ${Math.round(p.size * 0.62)}px Poppins, system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(p.label, 0, h * 0.06);
    };

    const drawStar = (p) => {
      starPath(p.size / 2);
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fill();
    };

    const drawSpark = (p) => {
      const tw = 0.5 + 0.5 * Math.sin(p.phase + t * 0.05);
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.35 + 0.5 * tw})`;
      ctx.fill();
    };

    const drawNode = () => {
      ctx.beginPath();
      ctx.arc(0, 0, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(233,247,239,0.9)";
      ctx.fill();
    };

    const connectNodes = (ox, oy) => {
      const nodes = particles.filter((p) => p.type === "node");
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const ax = a.x + ox * a.z;
          const ay = a.y + oy * a.z;
          const bx = b.x + ox * b.z;
          const by = b.y + oy * b.z;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - dist / 160)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const draw = () => {
      t += 1;
      // ease mouse toward target
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const ox = mouse.x * 26; // parallax strength
      const oy = mouse.y * 20;

      ctx.clearRect(0, 0, width, height);
      connectNodes(ox, oy);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.phase += 0.01;

        if (p.y < -80) {
          p.y = height + 60;
          p.x = rand(0, width);
        }
        if (p.x < -80) p.x = width + 60;
        if (p.x > width + 80) p.x = -60;

        const drawX = p.x + ox * p.z + Math.sin(p.phase) * p.sway;
        const drawY = p.y + oy * p.z;

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.opacity;
        if (p.type === "card") drawCard(p);
        else if (p.type === "coin") drawCoin(p);
        else if (p.type === "points") drawPoints(p);
        else if (p.type === "star") drawStar(p);
        else if (p.type === "spark") drawSpark(p);
        else drawNode();
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };

    const onPointerMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw();
      cancelAnimationFrame(rafId);
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const word = "Rewaldo".split("");

  return (
    <section
      id="intro"
      className="relative min-h-[88svh] flex items-center justify-center overflow-hidden"
    >
      {/* Base brand gradient */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0b3d2b_0%,#14663f_26%,#3FAE6A_56%,#66C293_74%,#A6DDC1_88%,#E3F5EC_100%)]" />

      {/* Optional real video background (drop a file in /public and pass videoSrc) */}
      {videoSrc ? (
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
        />
      ) : null}

      {/* Soft glowing bokeh */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-emerald-300/25 blur-3xl animate-float [animation-delay:1.5s]" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Animated loyalty particles */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />

      {/* Legibility scrim (stronger at top for the text, clears before the bottom) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0)_70%)]" />

      {/* Bottom fade into the light-green boundary shared with the Hero section */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-[#E3F5EC]" />

      {/* Foreground content */}
      <div className="relative px-6 text-center">
        <span className="hero-kicker inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Digital Loyalty Platform
        </span>

        <h1 className="hero-word mt-7 flex justify-center text-[64px] font-bold leading-none tracking-tight text-white sm:text-[92px] lg:text-[132px]">
          {word.map((letter, i) => (
            <span
              key={i}
              className="hero-letter inline-block"
              style={{ animationDelay: `${0.25 + i * 0.09}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="hero-tagline mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85 sm:text-[20px]">
          One digital wallet for every store you love. Collect points, unlock
          tiers and enjoy live rewards, all from a single app.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#top"
            className="rounded-pill bg-white px-8 py-3.5 text-[15px] font-semibold text-primaryDark shadow-soft transition-colors hover:bg-primaryLight"
          >
            Explore Rewaldo
          </a>
          <a
            href="#how-it-works"
            className="rounded-pill border border-white/40 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#top"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1">
          <span className="hero-scroll-dot h-2 w-2 rounded-full bg-white/80" />
        </span>
      </a>

      <style jsx>{`
        .hero-letter {
          opacity: 0;
          transform: translateY(40px) scale(0.9);
          filter: blur(8px);
          background: linear-gradient(
            100deg,
            #ffffff 0%,
            #eafff2 40%,
            #ffffff 60%,
            #d7ffe6 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: letterIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards,
            shine 5s ease-in-out 1.4s infinite;
        }
        @keyframes letterIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes shine {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .hero-kicker {
          opacity: 0;
          animation: fadeUp 0.8s ease-out 0.1s forwards;
        }
        .hero-tagline {
          opacity: 0;
          animation: fadeUp 0.9s ease-out 1.1s forwards;
        }
        .hero-cta {
          opacity: 0;
          animation: fadeUp 0.9s ease-out 1.35s forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-scroll-dot {
          animation: scrollDot 1.8s ease-in-out infinite;
        }
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          70% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-letter,
          .hero-kicker,
          .hero-tagline,
          .hero-cta,
          .hero-scroll-dot {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
            -webkit-text-fill-color: #ffffff;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroIntro;