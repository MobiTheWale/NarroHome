import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <span class="badge">Willkommen</span>
        <h1>Gemeinsam feiern,<br><em>gemeinsam erleben.</em></h1>
        <p>Dein Verein für unvergessliche Feste, traditionelle Narropartys und lebendige Gemeinschaft.</p>
        <div class="cta-group">
          <a routerLink="/narroparty" class="btn btn-primary">Zur Narroparty</a>
          <a routerLink="/fotos" class="btn btn-ghost">Fotos ansehen</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="card-float">
          <div class="card-float-icon">🎭</div>
          <div>
            <div class="card-float-title">Narroparty 2025</div>
            <div class="card-float-sub">Tickets verfügbar</div>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="features-inner">
        <div class="feature">
          <div class="feature-icon">🎉</div>
          <h3>Events</h3>
          <p>Regelmäßige Veranstaltungen und Feste für die ganze Gemeinschaft.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">📸</div>
          <h3>Erinnerungen</h3>
          <p>Fotos und Impressionen aus vergangenen Jahren.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🤝</div>
          <h3>Gemeinschaft</h3>
          <p>Ein aktiver Verein mit herzlicher Atmosphäre und gelebter Tradition.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: calc(100vh - 64px);
      max-width: 1200px;
      margin: 0 auto;
      padding: 5rem 2rem 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    .badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent);
      background: var(--accent-soft);
      padding: 0.35rem 0.85rem;
      border-radius: 999px;
      margin-bottom: 1.5rem;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--ink);
      margin: 0 0 1.25rem;
    }
    h1 em { font-style: italic; color: var(--accent); }
    .hero-content p {
      color: var(--muted);
      font-size: 1.1rem;
      line-height: 1.7;
      max-width: 480px;
      margin-bottom: 2.5rem;
    }
    .cta-group { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn {
      display: inline-flex;
      align-items: center;
      padding: 0.75rem 1.75rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-primary {
      background: var(--accent);
      color: white;
      box-shadow: 0 4px 16px rgba(217,70,50,0.25);
    }
    .btn-primary:hover {
      background: var(--accent-dark);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(217,70,50,0.35);
    }
    .btn-ghost {
      color: var(--ink);
      border: 1.5px solid var(--border);
    }
    .btn-ghost:hover {
      border-color: var(--ink);
      background: var(--surface);
    }
    .hero-visual {
      position: relative;
      height: 480px;
    }
    .shape {
      position: absolute;
      border-radius: 24px;
    }
    .shape-1 {
      width: 320px; height: 320px;
      background: linear-gradient(135deg, #f5e6e0 0%, #fce4dc 100%);
      top: 40px; right: 0;
    }
    .shape-2 {
      width: 200px; height: 200px;
      background: linear-gradient(135deg, #e8f4f8 0%, #d4eaf5 100%);
      bottom: 60px; right: 80px;
      border-radius: 50%;
    }
    .shape-3 {
      width: 100px; height: 100px;
      background: var(--accent-soft);
      top: 20px; right: 260px;
      border-radius: 50%;
    }
    .card-float {
      position: absolute;
      bottom: 80px; left: 20px;
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.08);
      animation: float 4s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .card-float-icon { font-size: 1.75rem; }
    .card-float-title { font-weight: 600; font-size: 0.9rem; color: var(--ink); }
    .card-float-sub { font-size: 0.75rem; color: var(--muted); }

    .features {
      background: var(--surface);
      border-top: 1px solid var(--border);
    }
    .features-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 5rem 2rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
    .feature-icon { font-size: 2rem; margin-bottom: 1rem; }
    .feature h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      color: var(--ink);
      margin-bottom: 0.5rem;
    }
    .feature p { color: var(--muted); font-size: 0.925rem; line-height: 1.65; }

    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .features-inner { grid-template-columns: 1fr; gap: 2rem; }
    }
  `]
})
export class HomeComponent {}
