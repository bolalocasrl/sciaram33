import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, MessageCircle, Send, ChevronRight, Users, User, Layers } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(1, "Il nome è obbligatorio"),
  email: z.string().email("Inserisci un'email valida"),
  message: z.string().min(10, "Il messaggio è troppo corto"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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

const WHATSAPP_URL = "https://wa.me/393204488202";

const percorsi = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Pilates Matwork & Yoga",
    subtitle: "Small Group · 6 posti",
    description: "Lavoro a corpo libero per ritrovare equilibrio, respiro e connessione con il tuo centro. Un'esperienza collettiva ma profondamente personale.",
    img: "/StudioCorpoLibero.webp",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Reformer & Cadillac",
    subtitle: "Duetto · 2 posti",
    description: "Precisione profonda con macchinari professionali. Ogni movimento calibrato per trasformare il corpo dall'interno.",
    img: "/2persone.webp",
  },
  {
    icon: <User className="w-5 h-5" />,
    title: "Sessioni Individuali",
    subtitle: "1-to-1 · Su misura",
    description: "Percorsi personalizzati per riabilitazione, prevenzione o obiettivi specifici. Attenzione totale al tuo corpo, alla tua storia.",
    img: "/CorpoLibero.webp",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Studio Mix",
    subtitle: "Esperienza completa",
    description: "L'unione tra matwork e macchine. Una pratica integrata che porta il corpo a una libertà totale e consapevole.",
    img: "/StudioMix.webp",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    const mailtoLink = `mailto:info@sciaram33.com?subject=Richiesta SCIARAM 33 da ${data.name}&body=Nome: ${data.name}%0AEmail: ${data.email}%0A%0AMessaggio:%0A${data.message}`;
    window.location.href = mailtoLink;
  };

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── NAVBAR — sticky, backdrop blur activates on scroll ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          backgroundColor: scrolled ? "rgba(245,243,242,0.82)" : "rgba(0,0,0,0.10)",
          borderBottom: scrolled ? "1px solid rgba(140,59,59,0.10)" : "none",
        }}
      >
        <img
          src="/SilviaLogo_Final.png"
          alt="SCIARAM 33"
          className="object-contain transition-all duration-500"
          style={{
            maxHeight: "40px",
            width: "auto",
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? "auto" : "none",
          }}
          data-testid="img-logo-navbar"
        />
        <nav
          className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase transition-colors duration-500"
          style={{ color: scrolled ? "hsl(var(--foreground))" : "rgba(255,255,255,0.92)" }}
        >
          <a href="#chi-sono" className="hover:opacity-60 transition-opacity">Chi Sono</a>
          <a href="#percorsi" className="hover:opacity-60 transition-opacity">Percorsi</a>
          <a href="#lo-studio" className="hover:opacity-60 transition-opacity">Lo Studio</a>
          <a href="#rituali" className="hover:opacity-60 transition-opacity">Rituali</a>
          <a href="#contatti" className="hover:opacity-60 transition-opacity">Contatti</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-whatsapp-navbar"
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
        {/* Background — pure CSS, zero JS, smooth on all devices */}
        <div
          className="absolute inset-0"
          data-testid="img-hero-bg"
          style={{
backgroundImage: "url('/studiosilviavuoto.webp')",
backgroundSize: "cover",
backgroundPosition: "center 30%",
backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
backgroundRepeat: "no-repeat",
          }}
        />
        {/* Uniform dark overlay 40% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        {/* Gradient bands: top (navbar contrast) + bottom (text contrast) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 22%, transparent 70%, rgba(0,0,0,0.36) 100%)",
          }}
        />

        {/* ── CENTRED HERO CONTENT ── */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 w-full max-w-2xl mx-auto"
        >
          {/* 1. Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-white leading-none mb-8"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
              fontWeight: 500,
              letterSpacing: "0.20em",
              textShadow: "0 2px 20px rgba(0,0,0,0.40)",
            }}
            data-testid="text-title-hero"
          >
            SCIARAM 33
          </motion.h1>

          {/* 2. Logo — centred, glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <img
              src="/SilviaLogo_Final.png"
              alt="SCIARAM 33 Logo"
              className="object-contain"
              style={{
                width: "clamp(140px, 22vw, 280px)",
                height: "clamp(140px, 22vw, 280px)",
                filter: [
                  "drop-shadow(0 0 30px rgba(255,242,225,0.75))",
                  "drop-shadow(0 0 70px rgba(255,242,225,0.45))",
                  "drop-shadow(0 0 120px rgba(255,242,225,0.22))",
                  "drop-shadow(0 6px 14px rgba(0,0,0,0.28))",
                ].join(" "),
              }}
              data-testid="img-logo-hero"
            />
          </motion.div>

          {/* 3. Payoff */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: "easeOut" }}
            className="text-white/80 font-light mb-7 tracking-[0.34em] uppercase"
            style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.88rem)" }}
          >
            Movement Medicine
          </motion.p>

          {/* 4. Quote */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.50, ease: "easeOut" }}
            className="font-serif italic text-white/90 mb-10 max-w-md"
            style={{
              fontSize: "clamp(0.88rem, 1.5vw, 1.05rem)",
              fontWeight: 400,
              lineHeight: "1.90",
              textShadow: "0 2px 14px rgba(0,0,0,0.65)",
            }}
          >
            "È il tempo di darsi spazio.
            <br />Uno spazio dove il tempo per sé diventa priorità.
            <br />Qui il movimento è medicina."
          </motion.p>

          {/* 5. CTA */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-hero"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-10 py-4 text-white text-xs tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all duration-300 shadow-xl"
            style={{
              backgroundColor: "hsl(var(--primary))",
              borderRadius: "50px",
            }}
          >
            Prenota su WhatsApp
          </motion.a>
        </motion.div>

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

      {/* ── FILOSOFIA ── */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-14 h-14 border border-primary rounded-full mx-auto mb-12 flex items-center justify-center">
              <span className="block w-2 h-2 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
              Il cerchio è totalità, equilibrio, infinito. Uno spazio dove corpo e spirito si
              incontrano. Il movimento diventa medicina: libera, smuove, riporta a uno.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CHI SONO ── */}
      <section id="chi-sono" className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <ScrollReveal direction="left">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">L'Anima di Sciaram 33</p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Ciao, sono Silvia.
              </h2>
              <div className="space-y-5 text-lg text-foreground/70 font-light leading-relaxed">
                <p>
                  Ho dedicato anni a studiare il corpo e il movimento. Non come un insieme di
                  muscoli da allenare, ma come uno spazio da abitare con consapevolezza e cura.
                </p>
                <p>
                  SCIARAM 33 nasce da questa visione: creare un luogo dove la pratica fisica si
                  intreccia con l'ascolto interiore. Dove ogni sessione è un ritorno a sé.
                </p>
                <p>
                  Il mio approccio unisce la precisione del Pilates alla profondità dello yoga,
                  creando percorsi su misura per ogni corpo, ogni storia, ogni obiettivo.
                </p>
              </div>
              <div className="mt-10 h-[1px] w-20 bg-primary/30" />
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="/chisonosilvia.webp"
                  alt="Silvia - SCIARAM 33"
                  loading="lazy"
                  className="w-full object-cover rounded-[2.5rem] shadow-2xl shadow-primary/10"
                  style={{ aspectRatio: "4/5" }}
                  data-testid="img-chisonosilvia"
                />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-secondary/60 -z-10" />
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-accent/30 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BODY FREEDOM ── */}
      <section className="py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-lg">
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden rounded-t-full rounded-b-[100px] aspect-[3/4] shadow-2xl shadow-primary/10">
                <img
                  src="/sessioneindividuale.webp"
                  alt="Sessione individuale"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  data-testid="img-body-freedom"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 max-w-xl">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
                Quanto è libero il tuo corpo?
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-10">
                Tratteniamo emozioni, parole, esperienze. Il corpo si irrigidisce, si
                appesantisce. La libertà nasce creando spazio. E si parte sempre da qui: dal corpo.
              </p>
              <div className="h-[1px] w-24 bg-primary/20" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── I PERCORSI ── */}
      <section id="percorsi" className="py-32 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-serif opacity-[0.04] whitespace-nowrap pointer-events-none select-none">
          SCIARAM
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 text-center mb-4">La pratica</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-20">I Percorsi</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {percorsi.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="group flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-7 bg-white/5 group-hover:bg-white/[0.08] transition-colors duration-500">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white/60 group-hover:border-white/50 group-hover:text-white transition-all duration-300">
                      {p.icon}
                    </div>
                    <h3 className="text-lg font-serif mb-1">{p.title}</h3>
                    <p className="text-xs tracking-widest uppercase text-white/40 mb-4">{p.subtitle}</p>
                    <p className="text-white/60 font-light leading-relaxed text-sm flex-1">{p.description}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-whatsapp-percorso-${i}`}
                      className="mt-7 inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-white/20 rounded-full px-5 py-3 hover:bg-white hover:text-primary transition-all duration-300 self-start"
                    >
                      Richiedi informazioni <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LO STUDIO ── */}
      <section id="lo-studio" className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">Il nostro spazio</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">Lo Studio</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal direction="left">
              <div className="rounded-3xl border border-primary/10 p-10 bg-secondary/20 h-full">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Sala Grande</p>
                <h3 className="text-2xl font-serif text-primary mb-6">Sala Macchine</h3>
                <ul className="space-y-3 text-foreground/70 font-light text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Cadillac
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Reformer
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Ladder Barrel
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Spine Corrector
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl border border-primary/10 p-10 bg-secondary/20 h-full">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Sala Piccola</p>
                <h3 className="text-2xl font-serif text-primary mb-6">Sala Matwork</h3>
                <ul className="space-y-3 text-foreground/70 font-light text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Pilates Matwork
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Yoga
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Meditazione
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    Piccoli attrezzi
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="text-center text-foreground/60 font-light text-lg mb-10 max-w-2xl mx-auto">
              Adatto a tutti: anziani, donne in gravidanza, riabilitazione post intervento.
            </p>
            <div className="flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-widest uppercase rounded-full text-white transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg"
                style={{ backgroundColor: "hsl(var(--primary))" }}
              >
                Vieni a trovarci <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RITUALI SPECIALI ── */}
      <section id="rituali" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">Ogni mese</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">Rituali Speciali</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="group rounded-3xl border border-primary/10 bg-background p-10 flex flex-col h-full hover:border-primary/25 transition-all duration-500">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">3 Luglio 2026</p>
                <h3 className="text-2xl font-serif text-primary mb-4">Sciamana Peruviana</h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-8 flex-1">
                  Un evento immersivo con una sciamana peruviana. Lettura delle foglie di coca, cerimonie di connessione con la terra e rituali di trasformazione. Un'esperienza che va oltre il corpo.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-primary/30 rounded-full px-5 py-3 hover:bg-primary hover:text-white transition-all duration-300 self-start text-primary"
                >
                  Prenota il posto <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group rounded-3xl border border-primary/10 bg-background p-10 flex flex-col h-full hover:border-primary/25 transition-all duration-500">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Prossimamente</p>
                <h3 className="text-2xl font-serif text-primary mb-4">Costellazioni Familiari</h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-8 flex-1">
                  Un percorso di esplorazione profonda dei legami familiari. Attraverso le costellazioni, riscopri i pattern che plasmano il tuo presente e apri spazio a nuove possibilità.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-primary/30 rounded-full px-5 py-3 hover:bg-primary hover:text-white transition-all duration-300 self-start text-primary"
                >
                  Ricevi aggiornamenti <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CONTATTI ── */}
      <section id="contatti" className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-serif text-primary mb-12">
                Ritrova il tuo spazio.
              </h2>
              <div className="space-y-8 font-light text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Lo Studio</p>
                    <p className="text-foreground/70">
                      Via Castelvetrano 45<br />Mazara del Vallo (TP)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Telefono & WhatsApp</p>
                    <a
                      href="tel:3204488202"
                      className="text-foreground/70 hover:text-primary transition-colors block"
                    >
                      320 448 8202
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-whatsapp-contact"
                      className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-wide"
                    >
                      Scrivimi su WhatsApp <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-accent shrink-0 mt-1"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/studiouno_pilatesreformer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-instagram-contact"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      @studiouno_pilatesreformer
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1">
            <ScrollReveal delay={0.2}>
              <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl border border-secondary/50">
                <h3 className="text-2xl font-serif text-primary mb-8">Scrivici un messaggio</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wider text-xs">Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Il tuo nome"
                              className="bg-transparent border-t-0 border-x-0 border-b border-primary/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg"
                              data-testid="input-contact-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wider text-xs">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="la.tua@email.com"
                              className="bg-transparent border-t-0 border-x-0 border-b border-primary/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg"
                              data-testid="input-contact-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wider text-xs">Messaggio</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Come possiamo aiutarti?"
                              className="bg-transparent border-t-0 border-x-0 border-b border-primary/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[100px] resize-none text-lg"
                              data-testid="textarea-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full rounded-full py-6 text-sm uppercase tracking-widest mt-8 bg-primary hover:bg-primary/90 text-white group"
                      data-testid="button-contact-submit"
                    >
                      <span>Invia Messaggio</span>
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

{/* ── WHATSAPP BUTTON FISSO ── */}
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
          data-testid="img-logo-footer"
        />
        <p className="text-background/50 text-sm tracking-wide mb-2">
          © {new Date().getFullYear()} SCIARAM 33. Tutti i diritti riservati.
        </p>
        <p className="text-background/30 text-xs">Movement Medicine · Mazara del Vallo</p>
      </footer>
    </main>
  );
}
