# 🎭 Narroparty e.V. – Angular App

Vereins- und Eventwebsite für Narroparty e.V., gebaut mit **Angular 17** (Standalone Components) und deploybar via **Docker + nginx**.

---

## 📁 Projektstruktur

```
narroparty-app/
├── src/
│   ├── app/
│   │   ├── nav/                  # Navigationskomponente
│   │   ├── footer/               # Footer-Komponente
│   │   ├── pages/
│   │   │   ├── home/             # Startseite
│   │   │   ├── fotos/            # Fotogalerie
│   │   │   ├── narroparty/       # Event-Detailseite
│   │   │   ├── impressum/        # Impressum
│   │   │   └── datenschutz/      # Datenschutzerklärung
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.css                # Globale CSS-Variablen & Fonts
│   ├── index.html
│   └── main.ts
├── Dockerfile                    # Multi-stage Build (Node → nginx)
├── docker-compose.yml
├── nginx.conf                    # SPA-Routing + Gzip + Security Headers
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Lokale Entwicklung

### Voraussetzungen
- Node.js 20+
- Angular CLI 17+

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:4200)
npm start
```

---

## 🐳 Docker – Lokaler Test

```bash
# Image bauen
docker build -t narroparty-app .

# Container starten (http://localhost)
docker run -p 80:80 narroparty-app

# Oder mit docker-compose
docker-compose up --build
```

---

## ☁️ Cloud Deployment

### Option 1 – VPS / Root-Server (empfohlen)

```bash
# 1. Projekt auf den Server kopieren
scp -r ./narroparty-app user@dein-server.de:/opt/narroparty

# 2. Per SSH verbinden
ssh user@dein-server.de

# 3. In das Projektverzeichnis wechseln
cd /opt/narroparty

# 4. Starten
docker-compose up -d --build

# 5. Status prüfen
docker-compose ps
docker-compose logs -f
```

### Option 2 – GitHub Actions CI/CD

Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build & Push Docker Image
        run: |
          docker build -t narroparty-app .
          docker save narroparty-app | gzip > app.tar.gz

      - name: Deploy to Server
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          source: "docker-compose.yml,app.tar.gz"
          target: "/opt/narroparty"

      - name: Restart Container
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /opt/narroparty
            docker load < app.tar.gz
            docker-compose up -d
```

### Option 3 – Managed Cloud (Render, Railway, Fly.io)

**Render.com** (kostenloser Plan verfügbar):
1. Neues "Web Service" erstellen
2. GitHub-Repository verbinden
3. Build Command: `docker build -t app .`
4. Start Command: wird automatisch aus Dockerfile gelesen
5. Port: `80`

**Fly.io:**
```bash
fly launch
fly deploy
```

---

## 🔒 HTTPS mit Let's Encrypt (Traefik)

Kommentiere den Traefik-Block in `docker-compose.yml` ein und passe deine E-Mail-Adresse an. Traefik übernimmt dann automatisch SSL-Zertifikate via Let's Encrypt.

---

## 🎨 Anpassungen

| Was | Wo |
|---|---|
| Vereinsname / Kontakt | `impressum.component.ts`, `datenschutz.component.ts` |
| Event-Details (Datum, Ort) | `narroparty.component.ts` |
| Farben / Design-Variablen | `src/styles.css` `:root` Block |
| Navigation-Links | `nav.component.ts` |
| Fotos einfügen | `fotos.component.ts` → `.placeholder` durch `<img>` ersetzen |

---

## 📦 Technologien

- **Angular 17** – Standalone Components, Lazy Loading, View Transitions API
- **TypeScript 5.2**
- **nginx 1.25** – SPA Routing, Gzip, Security Headers
- **Docker** – Multi-stage Build (~25 MB finales Image)
- **Google Fonts** – Playfair Display + DM Sans
