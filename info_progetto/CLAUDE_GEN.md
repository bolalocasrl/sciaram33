# CLAUDE_GEN.md — Profilo operativo di Matte

Questo file descrive come lavoro e come devi aiutarmi. Leggilo sempre all'inizio di ogni chat.

---

## Chi sono
Non sono uno sviluppatore tecnico. Uso l'AI come copilota per costruire e gestire siti web per clienti. Ho un flusso di lavoro consolidato che funziona bene e voglio mantenerlo.

---

## Il mio setup
- **Editor:** Visual Studio Code (locale) con estensione Claude Code
- **Repository:** GitHub
- **Deploy:** Vercel (automatico — ogni push su `main` → deploy in ~1 minuto)
- **Package manager:** npm
- **Stack:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui, framer-motion, wouter (router)
- **Terminale:** Terminale del Mac (non quello di VS Code)
- **Cartella progetti:** `~/Desktop/PROGETTI/[nome-progetto]`

---

## Il mio workflow

1. Apro il progetto in VS Code
2. Uso Claude Code (estensione VS Code) per modificare i file — gli incollo i prompt che mi dai tu
3. Aspetto che Claude Code finisca (può richiedere 1-3 minuti per file lunghi)
4. **Non chiudo VS Code finché Claude Code non ha finito**
5. Dal **terminale del Mac** (non VS Code) eseguo sempre:
   ```
   cd ~/Desktop/PROGETTI/[nome-progetto] && git add . && git commit -m "descrizione" && git push
   ```
6. Vercel deploya automaticamente in ~1 minuto
7. Verifico il risultato online

---

## Come devi aiutarmi

### Regole generali
- **Istruzioni sempre passo per passo** — nessun passaggio dato per scontato
- **Dimmi sempre quale file aprire** e dove si trova
- **Scrivi sempre i comandi terminale completi** — li copio e incollo direttamente nel terminale del Mac
- **Non assumere conoscenze tecniche** — spiegami cosa fa ogni cosa se è rilevante
- **Se ci sono più modi per fare una cosa, scegli il più semplice**
- **Avvisami sempre prima di fare modifiche che potrebbero rompere qualcosa**
- **Un problema alla volta** — non fare più modifiche in parallelo senza dirmelo
- **Chiedimi sempre conferma prima di scrivere un prompt** — riepilogami cosa farà e aspetta il mio ok
- **Prima di scrivere un prompt, leggi il codice che ti ho fornito** — non fare supposizioni
- **Se non capisci la struttura del codice, chiedi a Claude Code di spiegartela prima di modificare**

### Come scrivo i prompt per Claude Code
I prompt migliori sono così:
- Specificano il file esatto con percorso: `src/pages/home.tsx`
- Descrivono il risultato visivo atteso, non solo la modifica tecnica
- Indicano le classi Tailwind esatte da usare quando le conosco
- Dicono esplicitamente cosa NON toccare
- Sono diretti e concreti, non vaghi
- Per modifiche complesse al layout, chiedono prima a Claude Code di descrivere la struttura esistente

**Esempio di prompt efficace:**
> "Nel progetto sciaram33 in src/pages/home.tsx, nella navbar desktop, trova il div con classe `flex-1 flex items-center justify-around pr-16` e cambia `pr-16` in `pr-8`. Non toccare nient'altro."

### Quando fare un prompt unico vs prompt separati
- **Prompt unico:** stessa modifica ripetuta in più file (es. navbar uguale in 6 pagine)
- **Prompt separati:** modifiche diverse su file diversi, o modifiche complesse con rischio di errori
- **Regola d'oro:** se una modifica fallisce, deve essere facile capire cosa è andato storto

---

## Flusso di lavoro per nuovi progetti

### 1. Raccolta info iniziale
Chiedi sempre:
- Nome progetto e URL live (se esiste)
- Repository GitHub
- Stack tecnico (di solito uguale al mio setup standard)
- Pagine esistenti — fatti incollare i file .tsx principali

### 2. Prima di iniziare le modifiche
- Crea sempre un riepilogo delle modifiche da fare diviso per file
- Chiedi conferma prima di procedere
- Inizia sempre dalla modifica più impattante o più visibile

### 3. Ordine consigliato per le modifiche
1. Navbar (componente presente in tutte le pagine — fix una volta, replica ovunque)
2. Stile globale (colori, testi, font)
3. Struttura delle pagine (layout, sezioni)
4. Contenuti (testi, immagini)
5. Funzionalità (form, link, CMS)

---

## Gestione immagini
- Formato preferito: `.webp` (supporta trasparenza, più leggero)
- Conversione da PNG a WebP: `sips -s format webp input.png --out output.webp` (solo se funziona — alcuni Mac hanno problemi)
- Alternativa: copiare direttamente come PNG — `cp ~/Downloads/file.png ~/Desktop/PROGETTI/[progetto]/public/`
- Tutte le immagini vanno nella cartella `/public`

---

## CMS con Sanity
Per progetti con contenuti dinamici (eventi, blog, prodotti):
- Usare **Sanity** (piano free sufficiente per progetti piccoli)
- Account Sanity intestato al cliente
- Setup: `npx sanity@latest init` nella cartella del progetto
- Studio deployato su `[progetto].sanity.studio`
- Client nel sito: `src/lib/sanity.ts`
- Variabili d'ambiente: `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, `VITE_SANITY_TOKEN`
- Aggiungere CORS origins per ogni dominio del sito

## Form con Formspree
Per form contatti senza backend:
- Account Formspree intestato al cliente
- Endpoint: `https://formspree.io/f/[codice]`
- Variabile d'ambiente non necessaria — endpoint pubblico
- Gestire stati: loading, success, error

## Newsletter con Brevo
Per raccolta email e invio campagne:
- Account Brevo intestato al cliente
- Piano free: 300 email/giorno
- API key nelle variabili d'ambiente: `VITE_BREVO_API_KEY`
- Aggiungere contatti via API: `POST https://api.brevo.com/v3/contacts`
- Creare lista contatti nel pannello Brevo e usare il suo ID numerico

---

## Variabili d'ambiente
- File locale: `.env.local` (mai nel repository — verificare `.gitignore`)
- Su Vercel: Settings → Environment Variables
- Variabili Vite devono iniziare con `VITE_`

---

## Gestione commit e push
Il comando push è sempre questo, dal terminale del Mac:
```
cd ~/Desktop/PROGETTI/[nome-progetto] && git add . && git commit -m "descrizione breve" && git push
```

---

## Dominio e Deploy
- Vercel può essere intestato a me, il dominio al cliente — si collegano senza problemi
- Processo: cliente acquista dominio (Aruba consigliato per .it) → Vercel Settings → Domains → aggiungere record DNS su Aruba
- Dopo collegamento dominio: aggiornare CORS origins su Sanity

---

## Strumenti consigliati per i clienti
| Strumento | Uso | Piano | Intestato a |
|-----------|-----|-------|-------------|
| Vercel | Deploy | Gratuito | Me (Matte) |
| Sanity | CMS contenuti | Gratuito | Cliente |
| Formspree | Form contatti | Gratuito (50/mese) | Cliente |
| Brevo | Newsletter | Gratuito (300/giorno) | Cliente |
| Aruba/Namecheap | Dominio | ~10-15€/anno | Cliente |
