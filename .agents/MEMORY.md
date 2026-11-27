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
- **Optimizare SEO Local & Tehnic:** adăugate `<title>` și `<meta description/keywords>` localizate (`Fălticeni`), Open Graph + Twitter Cards, `Schema.org` JSON-LD (`AutoRepair` + `FAQPage`), secțiune vizibilă `#intrebari` (`FAQ`), `robots.txt`, `sitemap.xml` și `site.webmanifest`.
- **SEO Regional & Autorizare RAR:** adăugate în `index.html` și `style.css` autorizarea **Clasele I, II, III RAR** (auto, moto/ATV, >3,5t), caseta vizibilă „Zone deservite (acces rapid din E85 / DN2)” și lista structurată `areaServed` în `Schema.org` JSON-LD pentru Fălticeni, comunele limitrofe, Suceava, Pașcani, Gura Humorului și Târgu Neamț.
- **Extindere FAQ SEO (`#intrebari`):** adăugate încă 6 întrebări (total 10 în HTML și `FAQPage` JSON-LD) acoperind Clasele I–III RAR (>3,5t, moto/ATV), procedura de revenire, termenul de 30 de zile înainte de expirare, vopsitorie, vulcanizare și acoperirea regională E85.
- **Integrare Pagină Facebook:** adăugat linkul oficial (`https://www.facebook.com/profile.php?id=61553095747846`) în secțiunea `#contact` (rând + buton `.btn-fb`), în `#footer` și în `Schema.org` (`sameAs`).
- **Numere de telefon reale:** adăugate `0740 702 881` și `0733 819 222` în Topbar, Hero CTA, `#contact` (inclusiv WhatsApp `40740702881`) și `Schema.org` (`telephone`).
- **Extindere FAQ SEO (`#intrebari`):** adăugate încă 6 întrebări (total 10 în HTML și `FAQPage` JSON-LD) acoperind Clasele I–III RAR (>3,5t, moto/ATV), procedura de revenire, termenul de 30 de zile înainte de expirare, vopsitorie, vulcanizare și acoperirea regională E85.
- **Integrare Pagină Facebook:** adăugat linkul oficial (`https://www.facebook.com/profile.php?id=61553095747846`) în secțiunea `#contact` (rând + buton `.btn-fb`), în `#footer` și în `Schema.org` (`sameAs`).
- **Numere de telefon reale:** adăugate `0740 702 881` și `0733 819 222` în Topbar, Hero CTA, `#contact` (inclusiv WhatsApp `40740702881`) și `Schema.org` (`telephone`).
- **Reper locație:** adăugat rândul `Reper: Zona Gării Fălticeni (acces rapid din E85 / DN2)` în `#contact` și în răspunsul FAQ aferent.
- **Aplicare tactici avansate SEO & Conversie:**
  - Redenumite imaginile din galerie cu nume SEO (`statie-itp-acw-falticeni.jpg`, `service-auto-diagnoza-falticeni.jpg`, `vopsitorie-vulcanizare-acw-falticeni.jpg`) + `loading="lazy"`.
  - Adăugată secțiunea `#probleme` (căutări de tip problemă: Check Engine, bătaie roată, revenire ITP, zgârieturi vopsitorie, pană, camioane >3,5t).
  - Adăugate butoane directe **Deschide Google Maps** + **Navighează cu Waze** în `#contact` și bară fixă mobilă `.mob-sticky-bar` (`Sună` • `WhatsApp` • `Waze / Hartă`).
- **Poze reale ACW Fălticeni & Rating Google:** preluate de pe telefonul conectat 3 poze reale ale stației/halei (`statie-itp-acw-falticeni.jpg`, `service-auto-diagnoza-falticeni.jpg`, `vopsitorie-vulcanizare-acw-falticeni.jpg`) și adăugat rating-ul real `5,0 ★ (82 recenzii Google)` în Hero + `aggregateRating` în `Schema.org`.
- **Eliminare expresii de șablon AI:** înlocuite cele 5 texte generice din `index.html` cu formulări tehnice directe și sobre (conform regulii din `AGENTS.md`).
- **Conformitate Legală România (ANPC & GDPR):** adăugate în `<footer>` linkurile obligatorii ANPC **SAL** (`anpc.ro/ce-este-sal/`) și **SOL** (`ec.europa.eu/consumers/odr`), adresa completă a sediului social și fereastra `<dialog id="gdprDialog">` cu Informarea GDPR & Cookies.
- **Banner Cookie & GDPR (`#cookieBanner`):** card compact afișat automat la prima accesare, cu butoane `Detalii GDPR` și `Am înțeles` (salvare în `localStorage`).
- **Iconițe SVG dedicate pe cardurile Servicii (`#servicii`):** înlocuite PNG-urile nepotrivite din referința `autofix` (baterie pe Vopsitorie etc.) cu 4 iconițe vectoriale SVG dedicate: Scut cu bifă (`Stație ITP`), Cheie mecanică (`Service Auto`), Pulverizator vopsea (`Vopsitorie Auto`) și Roată/Anvelopă cu 6 spițe (`Vulcanizare & Roți`).
- **Customizare butoane tactile & aspect Site Public (`assets/css/style.css`):** păstrate **butoanele tactile** (`border-radius: 8px`, bordură inferioară `3px`, umbră discretă, efect `:hover`/`:active`, inclusiv pe `.mob-sticky-btn`), combinate cu **Tema Deschisă 2027 curată pentru site public** (`#f8fafc` / `#ffffff` / `#f1f5f9` / `#e2e8f0`, Hero `#eff6ff -> #ffffff`, fără tema de agendă internă).
