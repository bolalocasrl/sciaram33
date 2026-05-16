# PROJECT.md — SCIARAM 33

## Il Progetto
Sito web di uno studio di Pilates e Yoga a Mazara del Vallo (TP), fondato da Silvia.

- **Sito live:** https://sciaram33.vercel.app/
- **Repository:** https://github.com/bolalocasrl/sciaram33
- **Deploy:** Vercel (auto-deploy da push su main) — account intestato a Matte (bolalocasrl)
- **Dominio futuro:** sciaram33.it — da acquistare da Silvia con i suoi dati

---

## Stack Tecnico
- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui + framer-motion
- react-hook-form + zod (form contatti)
- Package manager: npm
- Router: wouter

---

## Stile Visivo
- Colori: primario bordeaux/rosso scuro `hsl(var(--primary))`, secondario beige chiaro `#fdf1db`
- Font: serif per titoli, sans-serif per testo
- Animazioni: componente `ScrollReveal` con framer-motion (direction: up/down/left/right, delay)
- Immagini: tutte `.webp` nella cartella `/public`
- Bottoni CTA: `rounded-full`, bordeaux, testo bianco
- Tono di voce: elegante, spirituale, evocativo — non commerciale
- Testi: `text-foreground/85` come opacità standard (non /70 che è troppo chiaro sul beige)

---

## Navbar (aggiornata — uguale in tutte le pagine)
- Sfondo fisso `#fdf1db` con `borderBottom` sempre visibile
- Mobile: `grid grid-cols-3` — logo occhio sinistra, scrittasilvia.png centro, hamburger destra
- Desktop: `hidden md:flex relative` — gruppo sinistro con `flex-1 flex items-center justify-end pr-24`, logo occhio `absolute left-1/2 -translate-x-1/2`, gruppo destro con `flex-1 flex items-center justify-start pl-24`
- Link sinistri: Eventi, Percorsi
- Link destri: Lo Studio 33, Chi Sono, Prenota (bottone)

---

## Componenti Chiave
- `ScrollReveal` → animazione entrata elementi
- `WHATSAPP_URL` → costante definita in ogni file pagina
- Pulsante WhatsApp fisso in basso a destra verde `#25D366`

---

## Immagini Disponibili in /public
- `heronatura.webp` → hero background home
- `chisonosilvia.webp` → foto Silvia (hero silvia.tsx + sezione Chi Sono home)
- `sessioneindividuale.webp` → sezione Body Freedom home
- `StudioCorpoLibero.webp` → percorso Pilates Matwork
- `2persone.webp` → percorso Reformer & Cadillac
- `CorpoLibero.webp` → percorso Sessioni Individuali
- `StudioMix.webp` → percorso Studio Mix
- `sciamanaperu1.webp` → evento sciamana (pagina eventi)
- `sciamanaperu2.webp` → evento sciamana (home)
- `costellazionifamiliari.webp` → evento costellazioni
- `studiosilviavuoto.webp` → hero studio.tsx
- `silvia_logo_fine.png` → logo occhio navbar/footer
- `scrittasilvia.png` → logo scritta navbar

---

## Struttura Pagine
| Pagina | File | Stato |
|--------|------|-------|
| / | home.tsx | ✅ Completata |
| /silvia | silvia.tsx | ✅ Completata |
| /studio | studio.tsx | ✅ Completata |
| /percorsi | percorsi.tsx | ✅ Completata |
| /eventi | eventi.tsx | ✅ Completata |
| /privacy | privacy.tsx | ❌ Da creare |
| * | not-found.tsx | ✅ |

---

## Stato Lavori

### ✅ Completato (sessione 15 Maggio 2026)
- Navbar unificata e aggiornata in tutte le pagine
- Link navbar equidistanti dal logo centrale su desktop
- Testi scuriti da /70 a /85 in tutte le pagine
- Data evento in grande nella home
- silvia.tsx: nuova hero a due colonne (testo sinistra, foto destra)
- silvia.tsx: grassetto su paesi e "Divino Femminile"
- silvia.tsx: rimossa sezione "Un sapere costruito nel tempo"
- percorsi.tsx: fix parola PERCORSI tagliata su mobile
- percorsi.tsx: aggiunta sezione Collaborazioni
- percorsi.tsx: aggiunta sezione "Le Discipline" (spostata da studio.tsx)
- studio.tsx: rimossa sezione "Le Discipline"
- eventi.tsx: form newsletter frontend (senza logica invio)
- Footer: aggiunta P.IVA (in aggiornamento) e sede legale in tutte le pagine
- Form contatti home: aggiunto link privacy policy
- Bug navigazione primo click: risolto con nuova navbar

### 📋 Da fare (Matte)
- Creare pagina /privacy con testo GDPR standard (in attesa P.IVA da Silvia)
- Aggiungere link /privacy nel footer (in attesa pagina privacy)
- Collegare form contatti a email reale via Formspree (decidere con Silvia)
- Collegare form newsletter a Brevo (in attesa mail ufficiale Silvia)
- Collegare dominio sciaram33.it a Vercel (in attesa acquisto da Silvia)
- Sostituire "P.IVA: in aggiornamento" con numero reale (in attesa da Silvia)
- Test completo mobile e desktop prima del lancio

### 📋 Da fare (Silvia)
- Fornire P.IVA
- Acquistare dominio sciaram33.it con i suoi dati
- Inviare foto professionali delle due sale studio
- Inviare foto sezione Collaborazioni pagina Chi Sono
- Testo definitivo sezione Chi Sono

---

## Contatti
- WhatsApp: +39 320 448 8202
- Email: info@sciaram33.com / info.silviaciaramitaro@gmail.com
- Instagram: @studiouno_pilatesreformer
- Indirizzo: Via Castelvetrano 45, Mazara del Vallo (TP)

---

## Note Tecniche
- Il form contatti usa `mailto:` — da sostituire con Formspree
- Il form newsletter non ha logica di invio — da collegare a Brevo
- Vercel intestato a bolalocasrl (Matte) — dominio sarà intestato a Silvia, si possono collegare senza problemi
- Brevo: creare account con mail ufficiale Silvia (info@sciaram33.com) quando disponibile
