# Memoria Proiectului — ITP-Site (ACW Fălticeni)

## 1. Identitate și Scop

- **Proiect:** Site public de prezentare pentru stația ITP ACW Fălticeni.
- **Folder local:** `D:\Proiecte\ITP-Site`
- **Arhitectură găzduire:** Domeniul principal (`public_html/`), separat de aplicația internă `ITP-Programari` care rulează pe subdomeniu (`agenda.*`).
- **Stadiu curent:** Proiect inițializat (structură standard `.agents/`, `README.md`, `.gitignore`).

## 2. Date Oficiale Firmă (preluate pentru site)

- **Denumire:** AUTOMOTIVE CENTER WERKSTAT S.R.L.
- **CUI:** `47740129`
- **Nr. Reg. Com.:** `J33/463/2023` (`EUID: ROONRC.J2023000463330`)
- **Data înființării:** 2 martie 2023
- **Adresă:** Str. Magazia Gării, nr. 3F, Fălticeni, jud. Suceava, cod poștal `725200`
- **Cod CAEN principal:** `4520` — Întreținerea și repararea autovehiculelor
- **Activități promovate pe site:** **Stație ITP • Service Auto • Vopsitorie • Vulcanizare**
- **Direcție vizuală:** **Temă Deschisă 2027 (Light Theme)** — fundal luminos curat, contrast ridicat, tipografie clară, stil sobru enterprise/auto.

## 3. Reguli Active

- Se aplică regulile globale din `D:\Proiecte\AGENTS.md` (Temă Deschisă exclusiv, fără iconițe/clișee AI, marcare descriptivă pe toate modulele/secțiunile, `MEMORY.md` actualizat înainte de commit).

## 4. Implementare Inițială Site Public (27 noiembrie 2026)
- **Skill consultat:** `ui-ux-pro-max` (`--design-system` pentru ACW Fălticeni, Trust & Authority + Flat Light Design).
- **Fișiere create în `D:\Proiecte\ITP-Site`:**
  - `index.html` — structură completă în limba română cu secțiunile: Topbar, Header/Nav, Hero, Servicii (`Stație ITP`, `Service Auto & Mecanică`, `Vopsitorie Auto`, `Vulcanizare & Roți`), Despre noi, Atelier/Galerie, Contact & Hartă Google Maps Fălticeni, Footer cu datele legale `AUTOMOTIVE CENTER WERKSTAT S.R.L.` (`CUI: 47740129`, `J33/463/2023`, `CAEN 4520`).
  - `assets/css/style.css` — **Temă Deschisă 2027** (`#f8fafc` / `#ffffff` / `#f1f5f9` / `#1e40af`), tipografie `Poppins` + `Open Sans`, responsive desktop/tabletă/mobil, `prefers-reduced-motion`, zero dark mode.
  - `assets/js/main.js` — meniu mobil și actualizare an curent.
  - `assets/images/` — sigla `aw-logo.png` + resursele vizuale din referința `autofix`.
- **Verificare:** `node --check assets/js/main.js` și balans acolade CSS (`0` erori); toate secțiunile sunt marcate cu comentarii descriptive conform `AGENTS.md`.
- **Tunel Cloudflare local:** adăugat `tools/cloudflared.exe` (exclus din Git via `.gitignore`) și scriptul `start_cloudflare.bat` pentru pornire rapidă (`http://127.0.0.1:8091`).
