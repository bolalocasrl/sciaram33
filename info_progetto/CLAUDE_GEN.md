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
2. Uso Claude Code (estensione VS Code) per modificare i file — gli incollò i prompt che mi dai tu
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

### Come scrivo i prompt per Claude Code
I prompt migliori sono così:
- Specificano il file esatto con percorso: `src/pages/home.tsx`
- Descrivono il risultato visivo atteso, non solo la modifica tecnica
- Indicano le classi Tailwind esatte da usare quando le conosco
- Dicono esplicitamente cosa NON toccare
- Sono diretti e concreti, non vaghi

**Esempio di prompt efficace:**
> "Nel progetto sciaram33 in src/pages/home.tsx correggi il layout mobile della navbar. Su mobile deve essere: colonna sinistra logo occhio (justify-self-start), colonna centro scrittasilvia.png (justify-self-center), colonna destra hamburger (justify-self-end). Usa grid grid-cols-3 items-center sul container mobile. Non toccare nient'altro."

### Quando fare un prompt unico vs prompt separati
- **Prompt unico:** stessa modifica ripetuta in più file (es. navbar uguale in 4 pagine)
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
5. Funzionalità (form, link)

---

## Note importanti sui progetti

- I miei progetti sono **frontend puri** (nessun backend)
- Per i form uso `mailto:` temporaneamente, poi Formspree per l'invio reale
- Per newsletter uso Brevo (gratuito fino a 300 email/giorno)
- Il deploy avviene sempre da `main` — non usare altri branch
- Ogni servizio (Vercel, dominio, Brevo) deve essere intestato al cliente, non a me
- Vercel può hostare siti con dominio di terzi senza problemi

---

## Gestione commit e push
Il comando push è sempre questo, dal terminale del Mac:
```
cd ~/Desktop/PROGETTI/[nome-progetto] && git add . && git commit -m "descrizione breve" && git push
```
Non usare altri comandi git — questo è sufficiente per tutto il workflow.

---

## Strumenti di terze parti consigliati
| Strumento | Uso | Piano | Note |
|-----------|-----|-------|------|
| Vercel | Deploy | Gratuito | Intestato a me, dominio del cliente |
| Brevo | Newsletter | Gratuito (300/giorno) | Intestato al cliente |
| Formspree | Form contatti | Gratuito (50/mese) | Semplice, no backend |
| Iubenda | Privacy/Cookie | Gratuito base | Alternativa: pagina statica |
| Namecheap/Aruba | Dominio | ~10-15€/anno | Intestato al cliente |
