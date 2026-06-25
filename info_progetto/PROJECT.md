# PROJECT.md — SCIARAM 33

## Il Progetto
Sito web di uno studio di Pilates e Yoga a Mazara del Vallo (TP), fondato da Silvia Ciaramitaro.

- **Sito live:** https://sciaram33.vercel.app/ (presto su sciaram33.it)
- **Repository:** https://github.com/bolalocasrl/sciaram33
- **Deploy:** Vercel (auto-deploy da push su main) — account intestato a Matte (bolalocasrl)
- **Dominio:** sciaram33.it — acquistato da Silvia su Aruba, in fase di collegamento a Vercel

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

## Navbar (uguale in tutte le pagine)
- Sfondo: `hsl(var(--primary))` bordeaux
- Mobile: `grid grid-cols-3` — logo occhio sinistra (`logofooternavbar.png` con filter bianco), scritta centro (`scrittanuova.png`), hamburger destra
- Menu mobile ordine: Home, Chi Sono, Lo Studio, Percorsi, Eventi, Contatti
- Desktop ordine link: Chi Sono, Lo Studio, Percorsi, Eventi, Contatti
- Logo occhio centrato absolute: `logofooternavbar.png` con filter bianco
- Testi link: `rgba(255,255,255,0.85)`
- Bottone Contatti con bordo bianco

---

## Immagini in /public
- `heronatura.webp` → hero background home
- `chisonosilvia.webp` → foto Silvia sezione Chi Sono home
- `sessioneindividuale.webp` → non più usata
- `StudioCorpoLibero.webp` → card Pilates Matwork home
- `reformerecadillac.webp` → card Reformer & Cadillac home e percorsi
- `IndividualeAttrezzo.webp` → card Sessioni Individuali home e percorsi
- `cadillac.webp` → card Cadillac studio + foto sale home
- `reformer.webp` → card Reformer studio
- `matworkpiccolaattrezzi.webp` → card Pilates Matwork studio + foto Shala home
- `yogaemeditazione.webp` → card Yoga & Meditazione studio
- `_NZF2759.webp` → foto dettaglio World Pilates (carosello studio)
- `_NZF2741-2794.webp` → NON più nel carosello (rimosse)
- `primovideosilvia.webm` → video hero pagina Chi Sono (60MB, loop)
- `logofooternavbar.png` → logo occhio navbar + footer
- `scrittanuova.png` → logo scritta sinistra navbar

---

## Struttura Pagine
| Pagina | File | Contenuto |
|--------|------|-----------|
| / | home.tsx | Hero ("Ritorna alla tua natura"), Chi Sono (Founder), I Percorsi (3 card), Lo Studio (Sala Macchine + Shala con foto), Il Metodo & La Pratica, Eventi (da Sanity), Contatti |
| /silvia | silvia.tsx | Hero video background loop, Percorso, Formazione (solo titoli), Welfare, CTA WhatsApp |
| /studio | studio.tsx | Hero, Carosello 5 foto reali, Le Sale (Sala Macchine + Shala con foto), Adatto a tutti |
| /percorsi | percorsi.tsx | Hero "Coscienza Corporea", 3 card percorsi (sfondo beige), Il Metodo Pilates + Lo Yoga (sfondo bordeaux), Collaborazioni, CTA |
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
- **Pagine collegate:** eventi.tsx + home.tsx (griglia adattiva, refresh ogni 60s)
- **⚠️ DA FARE:** Aggiungere CORS origin `https://sciaram33.it` e `https://www.sciaram33.it`

---

## Servizi Collegati
| Servizio | Account | Uso | Note |
|----------|---------|-----|------|
| Vercel | bolalocasrl | Deploy | Auto da push main |
| Sanity | bolalocasrl | CMS eventi | sciaram33.sanity.studio |
| Formspree | Silvia | Form contatti | Endpoint: mnjynaol |
| Brevo | info.sciaram33@gmail.com | Newsletter | Lista ID: 2 |
| Aruba | Silvia (19893732@aruba.it) | Dominio sciaram33.it | Scadenza 16/6/2027 |

---

## Variabili d'Ambiente (.env.local + Vercel)
- `VITE_SANITY_PROJECT_ID=6xywmoj8`
- `VITE_SANITY_DATASET=production`
- `VITE_SANITY_TOKEN=...`
- `VITE_BREVO_API_KEY=...`

---

## Collegamento Dominio — Stato Attuale
- **Record A:** @ → 216.198.79.1 ✅ modificato su Aruba
- **Record CNAME:** www → e9cb5e2772bffc7d.vercel-dns-017.com ✅ aggiunto su Aruba
- **Vercel:** sciaram33.it e www.sciaram33.it aggiunti ma ancora "Invalid Configuration"
- **⚠️ Prossimo step:** Aspettare propagazione DNS (10-30 min, max 24h), poi cliccare Refresh su Vercel, poi aggiungere CORS su Sanity

---

## Stato Lavori

### ✅ Completato
- Navbar bordeaux unificata, loghi aggiornati, ordine link corretto
- Hero home: "Ritorna alla tua natura" + nuovo sottotitolo
- home.tsx: sezione Chi Sono con bio Silvia, rimosse sezioni Body Freedom e citazione
- home.tsx: sezione Il Metodo & La Pratica con link a /percorsi
- home.tsx: foto reali nelle card percorsi e foto nelle sale
- percorsi.tsx: 3 card + Il Metodo Pilates + Lo Yoga (sfondo bordeaux) + Collaborazioni
- studio.tsx: carosello 5 foto reali + Le Sale con foto attrezzature
- silvia.tsx: hero video loop, rimossa citazione bordeaux, formazione solo titoli
- Sanity CMS funzionante, Silvia invitata
- Formspree + Brevo collegati
- Privacy Policy
- Dominio sciaram33.it: record DNS inseriti su Aruba

### 📋 Da fare
- Aspettare propagazione DNS e verificare su Vercel
- Aggiungere CORS origin sciaram33.it su Sanity
- Test completo mobile e desktop pre-lancio
- Navbar desktop: aggiungere "Home" come primo link (richiesta Silvia, rimandato)
