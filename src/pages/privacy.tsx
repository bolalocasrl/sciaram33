import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* ── CONTENUTO ── */}
      <section className="pt-32 pb-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Informativa</p>
            <h1
              className="font-serif text-primary mb-16"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              Privacy Policy
            </h1>
          </ScrollReveal>

          <div className="space-y-12 text-foreground/85 font-light leading-relaxed">

            <ScrollReveal delay={0.05}>
              <p className="text-sm text-foreground/65 mb-8">
                Ultimo aggiornamento: maggio 2026
              </p>
              <p>
                La presente informativa descrive come Silvia Ciaramitaro, titolare dello Studio SCIARAM 33, raccoglie, utilizza e protegge i dati personali degli utenti che visitano questo sito web, in conformità al Regolamento (UE) 2016/679 (GDPR) e alla normativa italiana in materia di protezione dei dati personali.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">1. Titolare del trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è:
              </p>
              <div className="mt-4 pl-5 border-l border-primary/20 space-y-1">
                <p><span className="text-foreground font-normal">Silvia Ciaramitaro</span></p>
                <p>Via Castelvetrano 45, Mazara del Vallo (TP)</p>
                <p>P.IVA: 02966860815</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info.sciaram33@gmail.com" className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity">
                    info.sciaram33@gmail.com
                  </a>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">2. Dati raccolti</h2>
              <p className="mb-4">
                Il sito raccoglie esclusivamente i dati che l'utente fornisce volontariamente attraverso i moduli presenti nelle pagine:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Form di contatto</span>: nome, indirizzo email e testo del messaggio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Form newsletter</span>: indirizzo email.</span>
                </li>
              </ul>
              <p className="mt-4">
                Non vengono raccolti dati sensibili né dati relativi a minori. Non vengono acquisiti automaticamente dati di navigazione, indirizzi IP o informazioni sul dispositivo dell'utente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">3. Finalità del trattamento</h2>
              <p className="mb-4">I dati raccolti sono trattati per le seguenti finalità:</p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span>Rispondere alle richieste di contatto e fornire le informazioni richieste dall'utente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span>Inviare comunicazioni relative ai prossimi eventi, workshop e appuntamenti organizzati dallo studio, per gli utenti iscritti alla newsletter.</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">4. Base giuridica</h2>
              <p>
                Il trattamento dei dati personali si basa sul <span className="text-foreground font-normal">consenso espresso dell'interessato</span> (art. 6, par. 1, lett. a del GDPR), fornito al momento della compilazione e invio del modulo di contatto o di iscrizione alla newsletter.
              </p>
              <p className="mt-4">
                Il conferimento dei dati è facoltativo; tuttavia, il mancato conferimento impedisce di rispondere alla richiesta o di iscrivere l'utente alle comunicazioni.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">5. Conservazione dei dati</h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti, e comunque non oltre:
              </p>
              <ul className="space-y-3 mt-4 pl-5">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Messaggi di contatto</span>: fino alla conclusione della corrispondenza e per i successivi 12 mesi, salvo diversa necessità.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Email newsletter</span>: fino alla revoca del consenso da parte dell'interessato.</span>
                </li>
              </ul>
              <p className="mt-4">
                Decorsi tali termini, i dati saranno cancellati o resi anonimi in modo irreversibile.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">6. Comunicazione a terzi</h2>
              <p>
                I dati personali non sono ceduti, venduti né comunicati a terzi per finalità proprie di questi ultimi. Possono essere condivisi esclusivamente con soggetti che agiscono come responsabili del trattamento (es. fornitori di servizi email), vincolati da appositi accordi di riservatezza, nei limiti strettamente necessari alle finalità indicate.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">7. Cookie e strumenti di tracciamento</h2>
              <p>
                Questo sito <span className="text-foreground font-normal">non utilizza cookie di profilazione</span> né strumenti di tracciamento di terze parti (es. Google Analytics, Facebook Pixel). Possono essere presenti esclusivamente cookie tecnici strettamente necessari al corretto funzionamento del sito, che non richiedono il consenso dell'utente ai sensi della normativa vigente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">8. Diritti dell'interessato</h2>
              <p className="mb-4">
                In qualità di interessato, l'utente ha il diritto di:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Accesso</span>: ottenere conferma che sia in corso un trattamento di dati personali che lo riguardano e richiederne copia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Rettifica</span>: richiedere la correzione di dati inesatti o incompleti.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Cancellazione</span>: richiedere la cancellazione dei propri dati personali ("diritto all'oblio"), nei casi previsti dalla normativa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Limitazione</span>: richiedere la limitazione del trattamento nelle ipotesi previste dall'art. 18 GDPR.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Opposizione</span>: opporsi al trattamento dei propri dati in qualsiasi momento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Portabilità</span>: ricevere i propri dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span><span className="text-foreground font-normal">Revoca del consenso</span>: revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento effettuato prima della revoca.</span>
                </li>
              </ul>
              <p className="mt-6">
                Per esercitare i propri diritti è sufficiente inviare una richiesta a:{" "}
                <a href="mailto:info.sciaram33@gmail.com" className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity">
                  info.sciaram33@gmail.com
                </a>
              </p>
              <p className="mt-4">
                È inoltre riconosciuto il diritto di proporre reclamo all'autorità di controllo competente. In Italia, tale autorità è il <span className="text-foreground font-normal">Garante per la protezione dei dati personali</span> (www.garanteprivacy.it).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">9. Modifiche alla presente informativa</h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento, dandone comunicazione agli utenti tramite pubblicazione sul sito. Si invita pertanto a consultare periodicamente questa pagina.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="pt-8 border-t border-primary/10">
                <p className="text-sm text-foreground/65">
                  Per qualsiasi domanda relativa al trattamento dei tuoi dati personali, scrivici a{" "}
                  <a href="mailto:info.sciaram33@gmail.com" className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity">
                    info.sciaram33@gmail.com
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>

          </div>
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
