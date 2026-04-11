# 🎭 NarroHome – Narro-Gruppe Oberkirch e.V.

Offizielle Website der **Narro-Gruppe Oberkirch e.V.**, gebaut mit Angular 21 und deployed via Firebase Hosting.

---

## 📋 Inhaltsverzeichnis

- [Tech Stack](#tech-stack)
- [Projektstruktur](#projektstruktur)
- [Lokale Entwicklung](#lokale-entwicklung)
- [Deployment](#deployment)
- [Seiten & Komponenten](#seiten--komponenten)
- [Anpassungen](#anpassungen)

---

## Tech Stack

| Technologie      | Version | Zweck              |
| ---------------- | ------- | ------------------ |
| Angular          | 21.2.x  | Frontend Framework |
| TypeScript       | 5.9.x   | Sprache            |
| Vite             | 6.4.x   | Build Tool         |
| Firebase Hosting | –       | Hosting & CDN      |
| GitHub Actions   | –       | CI/CD Pipeline     |

---

## Projektstruktur

```
NarroHome/
├── src/
│   ├── app/
│   │   ├── app.component.ts/html/css   # Root-Komponente (Nav + Outlet + Footer)
│   │   ├── app.config.ts               # Angular App-Konfiguration & Router
│   │   ├── app.routes.ts               # Lazy-Loading Routen
│   │   ├── nav/                        # Navigationsleiste (sticky, responsive)
│   │   │   ├── nav.component.ts
│   │   │   ├── nav.component.html
│   │   │   └── nav.component.css
│   │   ├── footer/                     # Footer mit Links
│   │   │   ├── footer.component.ts
│   │   │   ├── footer.component.html
│   │   │   └── footer.component.css
│   │   └── pages/
│   │       ├── home/                   # Startseite mit Hero & Features
│   │       ├── fotos/                  # Bildergalerie (Masonry-Grid)
│   │       ├── narroparty/             # Eventseite mit Programm & Tickets
│   │       ├── impressum/              # Impressum (§ 5 TMG)
│   │       └── datenschutz/            # Datenschutzerklärung (DSGVO)
│   ├── styles.css                      # Globale CSS-Variablen & Google Fonts
│   ├── index.html
│   └── main.ts
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions: Build & Firebase Deploy
├── firebase.json                       # Firebase Hosting Konfiguration
├── .firebaserc                         # Firebase Projekt-ID
├── angular.json
├── package.json
└── tsconfig.json
```

---

## Lokale Entwicklung

### Voraussetzungen

- **Node.js** 20 oder höher → [nodejs.org](https://nodejs.org)
- **Angular CLI** 21

```bash
npm install -g @angular/cli
```

### Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm start
```

Die App läuft dann unter **http://localhost:4200** mit automatischem Hot-Reload.

### Produktions-Build lokal testen

```bash
npm run build:prod
```

Der Build-Output liegt unter `dist/narroparty-app/browser/`.

---

## Deployment

### Automatisch via GitHub Actions (empfohlen)

Bei jedem Push auf den `main`-Branch wird die App automatisch gebaut und auf Firebase Hosting deployed.

**Einmalige Einrichtung:**

1. Firebase Projekt anlegen unter [console.firebase.google.com](https://console.firebase.google.com)
2. Projekt-ID in `.firebaserc` und `.github/workflows/deploy.yml` eintragen
3. Service Account Key generieren:
   - Firebase Console → ⚙️ Projekteinstellungen → Dienstkonten
   - „Neuen privaten Schlüssel generieren" → JSON herunterladen
4. In GitHub Repository → Settings → Secrets → Actions:
   - Secret `FIREBASE_SERVICE_ACCOUNT` anlegen → gesamten JSON-Inhalt einfügen

Ab dann reicht:

```bash
git push origin main
# → GitHub Actions baut & deployed automatisch
```

Die App ist erreichbar unter: `https://DEIN-PROJECT-ID.web.app`

### Manuell via Firebase CLI

```bash
# Firebase CLI installieren (einmalig)
npm install -g firebase-tools

# Einloggen
firebase login

# Build & Deploy
npm run build:prod
firebase deploy
```

---

## Seiten & Komponenten

| Route          | Komponente             | Beschreibung                                   |
| -------------- | ---------------------- | ---------------------------------------------- |
| `/`            | `HomeComponent`        | Startseite mit Hero-Bereich und Vereinsinfo    |
| `/fotos`       | `FotosComponent`       | Fotogalerie vergangener Veranstaltungen        |
| `/narroparty`  | `NarropartyComponent`  | Infos zur Narroparty: Datum, Programm, Tickets |
| `/impressum`   | `ImpressumComponent`   | Pflichtangaben gemäß § 5 TMG                   |
| `/datenschutz` | `DatenschutzComponent` | Datenschutzerklärung gemäß DSGVO               |

**Globale Komponenten:**

- `NavComponent` – Fixierte Navigationsleiste mit Scroll-Effekt und mobilem Burger-Menü
- `FooterComponent` – Footer mit Copyright und rechtlichen Links

---

## Anpassungen

### Vereinsdaten ändern

| Was                         | Datei                                                  |
| --------------------------- | ------------------------------------------------------ |
| Name & Adresse im Impressum | `src/app/pages/impressum/impressum.component.html`     |
| Kontakt & Datenschutz       | `src/app/pages/datenschutz/datenschutz.component.html` |
| Logo-Text in der Navigation | `src/app/nav/nav.component.html`                       |
| Copyright im Footer         | `src/app/footer/footer.component.html`                 |

### Event-Details (Narroparty)

Datum, Uhrzeit, Ort und Programm anpassen in:

```
src/app/pages/narroparty/narroparty.component.html
```

### Design & Farben

Alle Designvariablen sind zentral in `src/styles.css` definiert:

```css
:root {
  --accent: #d94632; /* Hauptfarbe (Rot) */
  --accent-dark: #b33828; /* Hover-Zustand */
  --accent-soft: #fdf0ee; /* Heller Akzent-Hintergrund */
  --ink: #1a1a1a; /* Textfarbe */
  --muted: #6b6b6b; /* Sekundärtext */
  --border: #e8e8e8; /* Rahmenfarbe */
  --surface: #f9f9f9; /* Hintergrund Sektionen */
}
```

### Fotos einfügen

In `src/app/pages/fotos/fotos.component.html` die Platzhalter durch echte Bilder ersetzen:

```html
<!-- Vorher: -->
<div class="placeholder" [style.background]="item.bg">
  <span>{{ item.label }}</span>
</div>

<!-- Nachher: -->
<img src="assets/fotos/narroparty-2025.jpg" alt="Narroparty 2025" />
```

Bilder in `src/assets/fotos/` ablegen.

---

## Kontakt

**Moritz Binder**
✉️ [Moritz.binder03@gmail.com](mailto:Moritz.binder03@gmail.com)
