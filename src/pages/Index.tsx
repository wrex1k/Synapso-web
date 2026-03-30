import { useState, useEffect, useRef } from "react";

/* ─── Floating blur circles (matching app style — large, vivid) ─── */
const FloatingBlurs = () => {
  // Generate random initial positions for the blur balls
  function getRandomBall(i: number) {
    // Different ranges for each ball for better spread
    if (i === 0) {
      return {
        x: 35 + Math.random() * 30, // 35-65
        y: 15 + Math.random() * 40, // 15-55
        vx: 0,
        vy: 0,
        r: 350,
      };
    } else {
      return {
        x: 20 + Math.random() * 60, // 20-80
        y: 40 + Math.random() * 40, // 40-80
        vx: 0,
        vy: 0,
        r: 275,
      };
    }
  }
  // Animované pozície v percentách (x, y)
  const [balls, setBalls] = useState([getRandomBall(0), getRandomBall(1)]);

  useEffect(() => {
    let frame: number;
    setBalls((prev) =>
      prev.map((b) => ({
        ...b,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })),
    );
    const animate = () => {
      setBalls((prev) =>
        prev.map((b) => {
          let { x, y, vx, vy, r } = b;
          // Jednoduchý pohyb: odraz od okrajov
          x += vx;
          y += vy;
          if (x < 0 || x > 100) vx = -vx;
          if (y < 0 || y > 100) vy = -vy;
          // Udržuj v rámci okna
          x = Math.max(0, Math.min(100, x));
          y = Math.max(0, Math.min(100, y));
          return { x, y, vx, vy, r };
        }),
      );
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${balls[0].x}%`,
          top: `${balls[0].y}%`,
          background:
            "radial-gradient(circle, hsl(166 50% 37% / 0.35) 0%, hsl(166 50% 37% / 0.12) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${balls[1].x}%`,
          top: `${balls[1].y}%`,
          background:
            "radial-gradient(circle, hsl(166 50% 37% / 0.25) 0%, hsl(166 50% 37% / 0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

/* ─── Download button ─── */
const DownloadButton = () => (
  <a
    href="https://github.com/wrex1k/Synapso/releases/latest/download/Synapso-v1.0.0.zip"
    download
    className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-primary font-semibold text-primary-foreground text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(166_50%_37%/0.35)] glow-primary"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
      />
    </svg>
    Download for Windows
  </a>
);

/* ─── Feature card (no icon) ─── */
const FeatureCard = ({
  title,
  description,
  accentColor,
}: {
  title: string;
  description: string;
  accentColor: string;
}) => (
  <div className="glass rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-primary/40 group">
    <div
      className="w-2 h-8 rounded-full mb-5"
      style={{ backgroundColor: accentColor }}
    />
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

/* ─── Main page ─── */
const Index = () => {
  const [mounted, setMounted] = useState(false);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => setMounted(true), []);

  /* Snap-scroll: one wheel event on hero → scroll to features */
  useEffect(() => {
    let scrolling = false;
    const handleWheel = (e: WheelEvent) => {
      if (scrolling) return;
      const scrollY = window.scrollY;
      const featuresTop = featuresRef.current?.offsetTop ?? 0;
      const heroHeight = featuresTop;

      // Only snap when in the hero zone
      if (scrollY < heroHeight * 0.5 && e.deltaY > 0) {
        e.preventDefault();
        scrolling = true;
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          scrolling = false;
        }, 900);
      } else if (scrollY > 0 && scrollY < heroHeight * 0.8 && e.deltaY < 0) {
        e.preventDefault();
        scrolling = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          scrolling = false;
        }, 900);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  /* Scroll-triggered fade-in for features */
  const [featuresVisible, setFeaturesVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFeaturesVisible(true);
      },
      { threshold: 0.15 },
    );
    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative select-none">
      <FloatingBlurs />

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div
          className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <span className="text-primary">Synapso</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed font-light">
            <span
              dangerouslySetInnerHTML={{
                __html: `
                <b>Synapso</b> is a cognitive training app designed to improve memory, attention, focus, and mental flexibility through interactive brain games.<br><br>
              `,
              }}
            />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DownloadButton />
            <a
              href="https://github.com/wrex1k/Synapso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-muted-foreground font-medium transition-all duration-300 hover:text-foreground hover:border-primary/40"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </a>
          </div>
        </div>
      </section>
      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Synapso</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
