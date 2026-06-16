import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/393204488202";

function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

const CAROUSEL_IMAGES = [
  "/studiosilviavuoto.webp",
  "/StudioCorpoLibero.webp",
  "/2persone.webp",
  "/StudioMix.webp",
];

export default function Studio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrentSlide((s) => (s - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => setCurrentSlide((s) => (s + 1) % CAROUSEL_IMAGES.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── NAVBAR ── */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "hsl(var(--primary))",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        {/* Barra mobile — grid 3 colonne */}
        <div className="md:hidden grid grid-cols-3 items-center px-6 py-3">
          <a href="/" className="justify-self-start">
            <img src="/logofooternavbar.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "50px", width: "auto", filter: "brightness(0) invert(1)" }} />
          </a>
          <a href="/" className="justify-self-center">
            <img src="/scrittanuova.png" alt="Silvia" className="object-contain" style={{ maxHeight: "52px", width: "auto" }} />
          </a>
          <button className="justify-self-end p-2" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
            {mobileMenuOpen
              ? <X className="w-5 h-5" style={{ color: "white" }} />
              : <Menu className="w-5 h-5" style={{ color: "white" }} />
            }
          </button>
        </div>

        {/* Barra desktop — flex con logo occhio absolute centrato */}
        <div className="relative hidden md:flex" style={{ color: "rgba(255,255,255,0.85)" }}>
          <div className="flex items-center w-full px-8 py-2">
            <div className="flex-1 flex items-center justify-around pr-16">
              <a href="/"><img src="/scrittanuova.png" alt="Silvia" className="object-contain" style={{ maxHeight: "45px", width: "auto" }} /></a>
              <a href="/eventi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Eventi</a>
              <a href="/percorsi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Percorsi</a>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="/"><img src="/logofooternavbar.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "65px", width: "auto", filter: "brightness(0) invert(1)" }} /></a>
            </div>
            <div className="flex-1 flex items-center justify-around pl-16">
              <a href="/studio" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Lo Studio 33</a>
              <a href="/silvia" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Chi Sono</a>
              <a href="/#contatti" className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-300 hover:bg-primary hover:text-white" style={{ color: "white", border: "1px solid rgba(255,255,255,0.40)" }}>Contatti</a>
            </div>
          </div>
        </div>

        {/* Menu mobile a tendina */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col px-8 pb-6 pt-2 gap-5 text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.85)", backgroundColor: "hsl(var(--primary))" }}>
            <a href="/" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/eventi" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Eventi</a>
            <a href="/percorsi" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Percorsi</a>
            <a href="/studio" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Lo Studio 33</a>
            <a href="/silvia" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Chi Sono</a>
            <button
              className="hover:opacity-60 transition-opacity text-xs tracking-widest uppercase text-left"
              style={{ color: "rgba(255,255,255,0.85)" }}
              onClick={() => {
                setMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  setTimeout(() => {
                    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  sessionStorage.setItem('scrollTo', 'contatti');
                  window.location.href = '/';
                }
              }}
            >Contatti</button>
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-primary">
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-16 w-full max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.20, ease: "easeOut" }}
            className="text-white/50 font-light mb-5 tracking-widest uppercase text-xs"
          >
            Il nostro spazio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.30, ease: "easeOut" }}
            className="font-serif text-white leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
            }}
          >
            Lo Studio 33
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-12 bg-white/30 mx-auto overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* ── CAROSELLO ── */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Slides */}
            <div
              className="relative overflow-hidden rounded-3xl"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="aspect-[4/3] md:aspect-[16/9] relative">
                {CAROUSEL_IMAGES.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Studio ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    style={{
                      opacity: i === currentSlide ? 1 : 0,
                      transform: i === currentSlide ? "scale(1)" : "scale(1.03)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Frecce desktop */}
            <button
              onClick={prev}
              aria-label="Precedente"
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/90 shadow-lg transition-all duration-300 hover:bg-primary hover:text-white"
              style={{ color: "hsl(var(--primary))" }}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={next}
              aria-label="Successiva"
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/90 shadow-lg transition-all duration-300 hover:bg-primary hover:text-white"
              style={{ color: "hsl(var(--primary))" }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pallini indicatori */}
            <div className="flex justify-center gap-2 mt-6">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Foto ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === currentSlide ? "hsl(var(--primary))" : "rgba(140,59,59,0.25)",
                    transform: i === currentSlide ? "scale(1.4)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESSIBILITÀ ── */}
      <section className="py-32 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Adatto a tutti.
            </h2>
            <p className="text-white/70 font-light text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Lo studio è pensato per accogliere corpi di ogni tipo, età e condizione. Lavoriamo con anziani, donne in gravidanza, persone in riabilitazione post-operatoria e chiunque voglia iniziare o approfondire una pratica corporea consapevole.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-widest uppercase rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Prenota una visita <ChevronRight className="w-3 h-3" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHATSAPP FISSO ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background py-1 px-6 text-center">
        <img
          src="/logofooternavbar.png"
          alt="SCIARAM 33"
          className="mx-auto mb-3 object-contain"
          style={{ maxHeight: "40px", width: "auto" }}
        />
        <p className="text-background/50 text-sm tracking-wide mb-2">
          © {new Date().getFullYear()} SCIARAM 33. Tutti i diritti riservati.
          <a href="/privacy" className="text-background/40 hover:text-background/70 transition-colors underline ml-2 text-xs">Privacy Policy</a>
        </p>
        <p className="text-background/30 text-xs">Movement Medicine · Mazara del Vallo</p>
        <p className="text-background/30 text-xs mt-1">Via Castelvetrano 45, Mazara del Vallo (TP) · P.IVA: 02966860815</p>
      </footer>
    </main>
  );
}
