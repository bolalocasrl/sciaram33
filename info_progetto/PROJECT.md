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

## Stile Visivo
- Colori: primario bordeaux/rosso scuro `hsl(var(--primary))`, secondario beige chiaro `#fdf1db`
- Font: serif per titoli, sans-serif per testo
- Animazioni: componente `ScrollReveal` con framer-motion
- Immagini: tutte `.webp` nella cartella `/public`
- Bottoni CTA: `rounded-full`, bordeaux, testo bianco
- Tono di voce: elegante, spirituale, evocativo — non commerciale
- Testi: `text-foreground/85` come opacità standard

---

## Navbar (uguale in tutte le pagine)
- Sfondo fisso `#fdf1db` con `borderBottom` sempre visibile
- Mobile: `grid grid-cols-3` — logo occhio sinistra, logofinitosciaram33.png centro, hamburger destra
- Menu mobile: Home, Eventi, Percorsi, Lo Studio 33, Chi Sono, Contatti
- Desktop: `hidden md:flex relative` — gruppo sinistro `flex-1 flex items-center justify-around pr-16`, logo occhio `absolute left-1/2 -translate-x-1/2`, gruppo destro `flex-1 flex items-center justify-around pl-16`
- Link sinistri: Eventi, Percorsi
- Link destri: Lo Studio 33, Chi Sono
- CTA destra: Contatti (bottone bordeaux con bordo)

---

## Immagini Disponibili in /public
- `heronatura.webp` → hero background home
- `chisonosilvia.webp` → foto Silvia
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
- `logofinitosciaram33.png` → logo scritta navbar (SCYARAM 33)

---

## Struttura Pagine
| Pagina | File | Stato |
|--------|------|-------|
| / | home.tsx | ✅ Completata |
| /silvia | silvia.tsx | ✅ Completata |
| /studio | studio.tsx | ✅ Completata |
| /percorsi | percorsi.tsx | ✅ Completata |
| /eventi | eventi.tsx | ✅ Completata |
| /privacy | privacy.tsx | ✅ Completata |
| * | not-found.tsx | ✅ |

---

## Sanity CMS
- **Account:** bolalocasrl (Google)
- **Project ID:** `6xywmoj8`
- **Organization ID:** `oL5fa331A`
- **Studio URL:** https://sciaram33.sanity.studio/
- **Piano:** Growth Trial → passa a Free automaticamente dopo 30 giorni
- **Schema:** evento (titolo, data, descrizione, immagine, attivo)
- **Silvia invitata come:** Editor (info.sciaram33@gmail.com)
- **Pagine collegate:** eventi.tsx + sezione eventi in home.tsx

---

## Servizi Collegati
| Servizio | Account | Uso |
|----------|---------|-----|
| Vercel | bolalocasrl | Deploy automatico |
| Sanity | bolalocasrl | CMS eventi |
| Formspree | Silvia Ciaramitaro | Form contatti (endpoint: mnjynaol) |
| Brevo | info.sciaram33@gmail.com | Newsletter eventi (lista ID: 2) |

---

## Variabili d'Ambiente
In `.env.local` (non nel repository) e su Vercel:
- `VITE_SANITY_PROJECT_ID=6xywmoj8`
- `VITE_SANITY_DATASET=production`
- `VITE_SANITY_TOKEN=...`
- `VITE_BREVO_API_KEY=...`

---

## Stato Lavori

### ✅ Completato
- Navbar unificata in tutte le pagine con logo, link equidistanti, CTA Contatti
- Testi scuriti da /70 a /85 in tutte le pagine
- silvia.tsx: hero a due colonne, testo Founder, grassetto paesi
- percorsi.tsx: rimosso dettaglio percorsi individuali, aggiunta sezione Discipline
- eventi.tsx: form newsletter collegato a Brevo, data grande e visibile
- home.tsx: form contatti collegato a Formspree, sezione eventi collegata a Sanity
- Privacy Policy pagina + link footer
- Footer: P.IVA 02966860815 + sede legale
- Sanity CMS: setup completo, studio deployato, Silvia invitata
- Brevo: account creato, lista Newsletter Sciaram33 (ID: 2), API collegata
- Fix route SPA su Vercel (vercel.json)

### 📋 Da fare (in attesa)
- Collegare dominio sciaram33.it a Vercel (in attesa acquisto da Silvia)
- Aggiungere CORS origin sciaram33.it su Sanity dopo collegamento dominio
- Foto reali delle due sale studio (metà giugno da Silvia)
- Test completo mobile e desktop pre-lancio
- Invitare Silvia su Brevo quando vuole gestire newsletter autonomamente

---

## Contatti
- WhatsApp: +39 320 448 8202
- Email: info.sciaram33@gmail.com
- Instagram: @studiouno_pilatesreformer
- Indirizzo: Via Castelvetrano 45, Mazara del Vallo (TP)
- P.IVA: 02966860815
