# PROJECT.md — SCIARAM 33

## Il Progetto
Sito web di uno studio di Pilates e Yoga a Mazara del Vallo (TP), fondato da Silvia.

- **Sito live:** https://sciaram33.vercel.app/
- **Repository:** https://github.com/bolalocasrl/sciaram33
- **Deploy:** Vercel (auto-deploy da push su main)

---

## Stack Tecnico
- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui + framer-motion
- react-hook-form + zod (form contatti)
- Package manager: npm

---

## Stile Visivo
- Colori: primario bordeaux/rosso scuro `hsl(var(--primary))`, secondario beige chiaro
- Font: serif per titoli, sans-serif per testo
- Animazioni: componente `ScrollReveal` con framer-motion (direction: up/down/left/right, delay)
- Immagini: tutte `.webp` nella cartella `/public`
- Bottoni CTA: `rounded-full`, bordeaux, testo bianco
- Tono di voce: elegante, spirituale, evocativo — non commerciale

---

## Componenti Chiave
- `ScrollReveal` → animazione entrata elementi
- `WHATSAPP_URL` → costante già definita in home.tsx
- Navbar sticky con blur on scroll
- Pulsante WhatsApp fisso in basso a destra verde `#25D366`

---

## Immagini Disponibili in /public
- `studiosilviavuoto.webp` → hero background
- `chisonosilvia.webp` → foto Silvia sezione Chi Sono
- `sessioneindividuale.webp` → sezione Body Freedom
- `StudioCorpoLibero.webp` → percorso Pilates Matwork
- `2persone.webp` → percorso Reformer & Cadillac
- `CorpoLibero.webp` → percorso Sessioni Individuali
- `StudioMix.webp` → percorso Studio Mix
- `SilviaLogo_Final.png` → logo navbar, hero, footer

---

## Struttura home.tsx (in ordine)
1. Navbar
2. Hero
3. Filosofia
4. Chi Sono
5. Body Freedom
6. I Percorsi
7. Lo Studio ⬅ DA CREARE
8. Rituali Speciali ⬅ DA CREARE
9. Contatti
10. Footer
11. Pulsante WhatsApp fisso

---

## Pagine
| Pagina | File | Stato |
|--------|------|-------|
| / | home.tsx | ✅ In corso |
| /studio | studio.tsx | ❌ Da creare |
| /rituali | rituali.tsx | ❌ Da creare |
| /silvia | silvia.tsx | ❌ Da creare |
| * | not-found.tsx | ✅ |

---

## Stato Lavori

### ✅ Completato
- Conversione immagini in WebP
- Preload immagine Hero
- Meta description (SEO 100)
- Fix background-attachment su mobile
- Rimossi componenti shadcn non utilizzati
- Lazy loading immagini sotto la fold
- Pulsante WhatsApp fisso
- DS_Store in .gitignore

### 🔜 In corso
- Sezione "Lo Studio" in home.tsx
- Sezione "Rituali Speciali" in home.tsx

### 📋 Da fare
- Pagina /silvia → biografia con viaggi (India, Tailandia, ecc.)
- Pagina /studio → Lo Studio e i Percorsi approfonditi
- Pagina /rituali → Rituali Speciali approfonditi
- Aggiornare navbar con link alle nuove pagine
- Aggiungere foto reali dello studio quando disponibili
- Ottimizzare performance mobile (obiettivo 70+)

---

## Contenuti Confermati

### Lo Studio
- Due sale: Sala Macchine (grande) e Sala Matwork (piccola)
- Attrezzature: Cadillac, Reformer, Ladder Barrel, Spine Corrector
- Discipline: Pilates con macchine, Pilates Matwork, Yoga, Meditazione

### Rituali Speciali
- Evento 1: 3 luglio — Sciamana peruviana, lettura foglie di coca
- Evento 2: Data TBD — Costellazioni familiari
- Prenotazione via WhatsApp

### Chi è Silvia
- Anni di viaggi: India, Tailandia e altri paesi
- Percorso spirituale e di consapevolezza
- Formazione in Pilates e Yoga
- Fondatrice di SCIARAM 33
- Testo completo: da scrivere con Silvia

---

## Contatti
- WhatsApp: +39 320 448 8202
- Email: info@sciaram33.com
- Instagram: @studiouno_pilatesreformer
- Indirizzo: Via Castelvetrano 45, Mazara del Vallo (TP)
