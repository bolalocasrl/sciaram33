import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

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

const salaMacchinePieces = [
  {
    name: "Cadillac",
    desc: "La macchina più completa del Pilates. Permette di lavorare in sospensione, in trazione e in appoggio, rendendo possibili esercizi impossibili altrove. Ideale per riabilitazione e per chi cerca una pratica profonda e articolata.",
  },
  {
    name: "Reformer",
    desc: "Il simbolo del Pilates. Una piattaforma scorrevole con un sistema di molle regolabili che crea resistenza e supporto simultanei. Ogni esercizio sul Reformer richiede controllo, precisione e consapevolezza corporea totale.",
  },
  {
    name: "Ladder Barrel",
    desc: "Una combinazione di scala e barile che permette un'estensione della colonna profonda e sicura. Fondamentale per aprire il petto, allungare i flessori dell'anca e aumentare la mobilità laterale.",
  },
  {
    name: "Spine Corrector",
    desc: "Disegnato per correggere e allungare la colonna vertebrale. Perfetto per chi soffre di tensioni dorsali, per chi lavora seduto o per chi vuole ritrovare la naturalezza delle curve fisiologiche della schiena.",
  },
];

const salaMatworkPieces = [
  {
    name: "Pilates Matwork",
    desc: "La radice di tutto. Il Pilates a corpo libero su tappetino è la pratica originale di Joseph Pilates. Ogni esercizio nasce dalla connessione tra respiro, centro e movimento — senza macchinari, solo il tuo corpo e la tua consapevolezza.",
  },
  {
    name: "Yoga",
    desc: "Una pratica millenaria che unisce movimento, respiro e meditazione. Nella sala piccola, pratichiamo uno yoga che dialoga con il Pilates — attenzione all'allineamento, all'apertura e alla presenza.",
  },
  {
    name: "Meditazione",
    desc: "Il silenzio è parte della pratica. La meditazione guidata è integrata nelle sessioni per portare la mente nello stesso stato di quiete e attenzione che il corpo sta imparando a trovare.",
  },
  {
    name: "Piccoli attrezzi",
    desc: "Foam roller, magic circle, elastic band, soft ball. Strumenti semplici che amplificano la consapevolezza propriocettiva e permettono un lavoro più mirato su specifiche catene muscolari.",
  },
];

const discipline = [
  {
    title: "Pilates con macchine",
    img: "/2persone.webp",
    desc: "Il Pilates alle macchine permette un lavoro che il solo peso corporeo non potrebbe raggiungere. Le molle creano resistenza adattiva — sfidano senza sovraccaricare, supportano senza compensare. Ogni sessione è un dialogo tra il tuo corpo e la macchina.",
    tags: ["Reformer", "Cadillac", "Ladder Barrel", "Spine Corrector"],
  },
  {
    title: "Pilates Matwork",
    img: "/StudioCorpoLibero.webp",
    desc: "Adatto a tutti, dalle prime sessioni agli atleti avanzati. Indicato per anziani che vogliono mantenere mobilità e forza, per donne in gravidanza che cercano sostegno sicuro, per chi è in riabilitazione post-intervento e per chiunque voglia ritrovare connessione con il proprio centro.",
    tags: ["Anziani", "Gravidanza", "Riabilitazione", "Tutti i livelli"],
  },
  {
    title: "Yoga",
    img: "/CorpoLibero.webp",
    desc: "Non uno yoga spettacolare, ma uno yoga onesto. Praticato lentamente, con attenzione alle transizioni, al respiro e alla qualità del contatto con il suolo. Un'ora di yoga a SCIARAM 33 è un ritorno a sé.",
    tags: ["Hatha", "Yin", "Pranayama", "Tutti i livelli"],
  },
  {
    title: "Meditazione",
    img: "/StudioMix.webp",
    desc: "La meditazione non è svuotare la mente — è imparare a osservarla. Le sessioni di meditazione guidata usano tecniche di mindfulness, body scan e visualizzazione per portare il sistema nervoso in uno stato di calma profonda e consapevole.",
    tags: ["Mindfulness", "Body scan", "Visualizzazione", "Respirazione"],
  },
];

export default function Studio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          backgroundColor: scrolled ? "rgba(245,243,242,0.82)" : "rgba(0,0,0,0.10)",
          borderBottom: scrolled ? "1px solid rgba(140,59,59,0.10)" : "none",
        }}
      >
        <a href="/">
          <img
            src="/SilviaLogo_Final.png"
            alt="SCIARAM 33"
            className="object-contain transition-all duration-500"
            style={{
              maxHeight: "40px",
              width: "auto",
              opacity: 1,
            }}
          />
        </a>
        <nav
          className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase transition-colors duration-500"
          style={{ color: scrolled ? "hsl(var(--foreground))" : "rgba(255,255,255,0.92)" }}
        >
          <a href="/#chi-sono" className="hover:opacity-60 transition-opacity">Chi Sono</a>
          <a href="/#percorsi" className="hover:opacity-60 transition-opacity">Percorsi</a>
          <a href="/#lo-studio" className="hover:opacity-60 transition-opacity">Lo Studio</a>
          <a href="/#rituali" className="hover:opacity-60 transition-opacity">Rituali</a>
          <a href="/#contatti" className="hover:opacity-60 transition-opacity">Contatti</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-500"
          style={{
            color: scrolled ? "hsl(var(--primary))" : "rgba(255,255,255,0.92)",
            border: scrolled
              ? "1px solid rgba(140,59,59,0.35)"
              : "1px solid rgba(255,255,255,0.50)",
          }}
        >
          Prenota
        </a>
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/studiosilviavuoto.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 w-full max-w-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.20, ease: "easeOut" }}
            className="text-white/70 font-light mb-5 tracking-[0.34em] uppercase"
            style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.88rem)" }}
          >
            Mazara del Vallo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.30, ease: "easeOut" }}
            className="font-serif text-white leading-none mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textShadow: "0 2px 20px rgba(0,0,0,0.40)",
            }}
          >
            Lo Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: "easeOut" }}
            className="text-white/75 font-light max-w-md"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: "1.80" }}
          >
            Uno spazio progettato per il movimento consapevole. Due sale, macchine professionali, un'atmosfera che invita al silenzio interiore.
          </motion.p>
        </motion.div>

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

      {/* ── SALA MACCHINE ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">Sala Grande</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-6">Sala Macchine</h2>
            <p className="text-center text-foreground/60 font-light text-lg mb-16 max-w-2xl mx-auto">
              Attrezzatura professionale Pilates per un lavoro profondo, preciso e trasformativo.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salaMacchinePieces.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="rounded-3xl border border-primary/10 p-10 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-500 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <h3 className="text-2xl font-serif text-primary">{item.name}</h3>
                  </div>
                  <p className="text-foreground/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALA MATWORK ── */}
      <section className="py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">Sala Piccola</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-6">Sala Matwork</h2>
            <p className="text-center text-foreground/60 font-light text-lg mb-16 max-w-2xl mx-auto">
              Uno spazio raccolto per il lavoro a corpo libero — yoga, meditazione, movimento essenziale.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salaMatworkPieces.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="rounded-3xl border border-primary/10 p-10 bg-background hover:bg-secondary/10 transition-colors duration-500 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <h3 className="text-2xl font-serif text-primary">{item.name}</h3>
                  </div>
                  <p className="text-foreground/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCIPLINE ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">La pratica</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-20">Le Discipline</h2>
          </ScrollReveal>

          <div className="space-y-24">
            {discipline.map((d, i) => (
              <ScrollReveal key={d.title} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
                  <div className="flex-1 w-full max-w-lg">
                    <div className="overflow-hidden rounded-3xl aspect-[4/3] shadow-xl shadow-primary/8">
                      <img
                        src={d.img}
                        alt={d.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex-1 max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">{d.title}</h3>
                    <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">{d.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20 text-primary/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
          src="/SilviaLogo_Final.png"
          alt="SCIARAM 33"
          className="mx-auto mb-3 object-contain"
          style={{ maxHeight: "40px", width: "auto" }}
        />
        <p className="text-background/50 text-sm tracking-wide mb-2">
          © {new Date().getFullYear()} SCIARAM 33. Tutti i diritti riservati.
        </p>
        <p className="text-background/30 text-xs">Movement Medicine · Mazara del Vallo</p>
      </footer>
    </main>
  );
}
