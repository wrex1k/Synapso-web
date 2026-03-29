import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Môžeš použiť rovnaký vizuálny efekt ako na hlavnej stránke
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative select-none">
      {/* Hero section similar to the main page */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div
          className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 text-primary">
            404
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed font-light">
            Oops! This page does not exist.
            <br />
            <span className="text-sm text-muted-foreground">
              ({location.pathname})
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-muted-foreground font-medium transition-all duration-300 hover:text-foreground hover:border-primary/40"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
      {/* Footer same as on the main page */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Synapso</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
