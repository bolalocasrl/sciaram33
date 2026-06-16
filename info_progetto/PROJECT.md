# PROJECT.md — SCIARAM 33

## Il Progetto
Sito web di uno studio di Pilates e Yoga a Mazara del Vallo (TP), fondato da Silvia Ciaramitaro.

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

## Colori
- Bordeaux primario: `hsl(var(--primary))` = **#8C3B3B**
- Beige sfondo: **#FDF1DB**
- Avorio link navbar: `rgba(255,255,255,0.85)` = **#F5EDE0** per Canva

---

## Stile Visivo
- Font: serif per titoli, sans-serif per testo
- Testi: `text-foreground/85` come opacità standard
- Bottoni CTA: `rounded-full`, bordeaux, testo bianco
- Tono di voce: elegante, spirituale, evocativo

---

## Navbar (uguale in tutte le pagine)
- Sfondo: `hsl(var(--primary))` bordeaux
- Mobile: `grid grid-cols-3` — logo occhio sinistra (`logofooternavbar.png` con filter bianco), scritta centro (`scrittanuova.png`), hamburger destra
- Menu mobile: Home, Eventi, Percorsi, Lo Studio 33, Chi Sono, Contatti (button con scroll smooth)
- Desktop: gruppo sinistro `flex-1 flex items-center justify-around pr-16` con `scrittanuova.png` + link Eventi + Percorsi; logo occhio `logofooternavbar.png` centrato absolute; gruppo destro con Lo Studio 33 + Chi Sono + Contatti (bottone con bordo bianco)
- Testi link: `rgba(255,255,255,0.85)`

---

## Immagini in /public
- `heronatura.webp` → hero background home
- `chisonosilvia.webp` → foto Silvia
- `sessioneindividuale.webp` → sezione Body Freedom home
- `StudioCorpoLibero.webp` → placeholder studio/percorsi
- `2persone.webp` → placeholder studio/percorsi
- `CorpoLibero.webp` → placeholder percorsi
- `StudioMix.webp` → placeholder studio
- `sciamanaperu1.webp` → evento sciamana (pagina eventi)
- `studiosilviavuoto.webp` → hero studio
- `logofooternavbar.png` → logo occhio navbar centro + footer (con filter bianco su bordeaux)
- `scrittanuova.png` → logo scritta sinistra navbar (su sfondo bordeaux)
- `silvia_logo_fine.png` → vecchio logo (non più usato in navbar)

---

## Struttura Pagine
| Pagina | File | Contenuto |
|--------|------|-----------|
| / | home.tsx | Hero, Chi Sono, Body Freedom, I Percorsi (3 card), Lo Studio (Sala Macchine + Sciala), Eventi Speciali (da Sanity), Contatti |
| /silvia | silvia.tsx | Hero 2 colonne (testo+foto), Percorso, Formazione & Competenze, Welfare Aziendale, Filosofia, CTA |
| /studio | studio.tsx | Hero, Carosello 4 foto, Adatto a tutti (CTA) |
| /percorsi | percorsi.tsx | Hero "Coscienza Corporea", Sala Macchine (3 card), Sciala (2 card + popup Patanjali), Collaborazioni, CTA |
| /eventi | eventi.tsx | Lista eventi da Sanity, form newsletter Brevo |
| /privacy | privacy.tsx | Privacy Policy GDPR |
| * | not-found.tsx | 404 |

---

## Sanity CMS
- **Account:** bolalocasrl (Google)
- **Project ID:** `6xywmoj8`
- **Organization ID:** `oL5fa331A`
- **Studio URL:** https://sciaram33.sanity.studio/
- **Piano:** Growth Trial → Free automatico dopo 30 giorni
- **Schema evento:** titolo, data, descrizione, immagine, attivo
- **Silvia:** Editor invitata (info.sciaram33@gmail.com)
- **Pagine collegate:** eventi.tsx (lista completa) + home.tsx (sezione eventi, griglia adattiva 1/2/3/4+ eventi, refresh ogni 60s)

---

## Servizi Collegati
| Servizio | Account | Uso | Note |
|----------|---------|-----|------|
| Vercel | bolalocasrl | Deploy | Auto da push main |
| Sanity | bolalocasrl | CMS eventi | Studio su sciaram33.sanity.studio |
| Formspree | Silvia Ciaramitaro | Form contatti | Endpoint: mnjynaol |
| Brevo | info.sciaram33@gmail.com | Newsletter | Lista ID: 2 |
| Aruba | Silvia | Dominio sciaram33.it | Da acquistare |

---

## Variabili d'Ambiente (.env.local + Vercel)
- `VITE_SANITY_PROJECT_ID=6xywmoj8`
- `VITE_SANITY_DATASET=production`
- `VITE_SANITY_TOKEN=...` (non condividere)
- `VITE_BREVO_API_KEY=...` (non condividere)

---

## Stato Lavori

### ✅ Completato
- Navbar bordeaux unificata in tutte le pagine con nuovi loghi
- Tutti i form funzionanti (Formspree + Brevo)
- Sanity CMS collegato e funzionante
- Privacy Policy pagina + link footer
- Footer con P.IVA 02966860815 + sede legale
- percorsi.tsx: contenuto sostituito con sale + Sciala + popup Patanjali
- studio.tsx: carosello foto + CTA
- Fix routing SPA Vercel
- Griglia eventi adattiva in home
- Data eventi grande e visibile

### 📋 Da fare
- Collegare dominio sciaram33.it a Vercel (in attesa acquisto da Silvia)
- Aggiungere CORS origin sciaram33.it su Sanity dopo dominio
- Foto reali delle due sale studio (da Silvia)
- Test completo mobile e desktop pre-lancio
- Aggiungere CORS origin nuovo dominio su Sanity quando disponibile

---

## Contatti Studio
- WhatsApp: +39 320 448 8202
- Email: info.sciaram33@gmail.com
- Instagram: @sciaram33.pilates
- Indirizzo: Via Castelvetrano 45, Mazara del Vallo (TP)
- P.IVA: 02966860815
