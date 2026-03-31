import { Component } from '@angular/core';

@Component({
  selector: 'app-narroparty',
  standalone: true,
  template: `
    <div class="page">
      <div class="page-header">
        <span class="badge">Event</span>
        <h1>Narroparty 2025</h1>
        <p>Das größte Fest des Jahres – traditionell, ausgelassen und unvergesslich.</p>
      </div>

      <div class="event-grid">
        <div class="event-main">
          <div class="info-card">
            <h2>Veranstaltungsdetails</h2>
            <ul class="detail-list">
              <li>
                <span class="detail-icon">📅</span>
                <div>
                  <strong>Datum</strong>
                  <span>Samstag, 8. Februar 2025</span>
                </div>
              </li>
              <li>
                <span class="detail-icon">🕗</span>
                <div>
                  <strong>Uhrzeit</strong>
                  <span>19:30 Uhr (Einlass ab 18:30 Uhr)</span>
                </div>
              </li>
              <li>
                <span class="detail-icon">📍</span>
                <div>
                  <strong>Ort</strong>
                  <span>Festhalle Musterdorf, Hauptstraße 1</span>
                </div>
              </li>
              <li>
                <span class="detail-icon">🎟️</span>
                <div>
                  <strong>Eintritt</strong>
                  <span>12 € Vorverkauf · 15 € Abendkasse</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="desc-card">
            <h2>Programm</h2>
            <p>Die Narroparty ist das Herzstück unseres Vereinsjahres. Mit Musik, Tanz, Kostümen und bester Stimmung feiern wir gemeinsam die fünfte Jahreszeit.</p>
            <div class="program-items">
              <div class="prog">
                <span class="prog-time">18:30</span>
                <span class="prog-label">Einlass & Empfang</span>
              </div>
              <div class="prog">
                <span class="prog-time">19:30</span>
                <span class="prog-label">Offizielle Eröffnung</span>
              </div>
              <div class="prog">
                <span class="prog-time">20:00</span>
                <span class="prog-label">Liveband & Tanz</span>
              </div>
              <div class="prog">
                <span class="prog-time">23:00</span>
                <span class="prog-label">Kostümprämierung</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="ticket-card">
            <div class="ticket-header">🎭</div>
            <h3>Tickets sichern</h3>
            <p>Vorverkauf noch bis 1. Februar 2025 zum Sonderpreis.</p>
            <a href="#" class="btn-ticket">Jetzt kaufen</a>
          </div>
          <div class="contact-card">
            <h4>Kontakt</h4>
            <p>Fragen zur Narroparty? Schreib uns!</p>
            <a href="mailto:info@narroparty.de">info&#64;narroparty.de</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page { max-width: 1200px; margin: 0 auto; padding: 6rem 2rem 4rem; }
    .page-header { margin-bottom: 3rem; }
    .badge {
      display: inline-block; font-size: 0.75rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--accent); background: var(--accent-soft);
      padding: 0.35rem 0.85rem; border-radius: 999px; margin-bottom: 1rem;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--ink); margin: 0 0 0.75rem;
    }
    .page-header p { color: var(--muted); font-size: 1rem; }
    .event-grid {
      display: grid; grid-template-columns: 1fr 320px; gap: 2rem; align-items: start;
    }
    .event-main { display: flex; flex-direction: column; gap: 1.5rem; }
    .info-card, .desc-card {
      background: white; border: 1px solid var(--border);
      border-radius: 16px; padding: 2rem;
    }
    h2 {
      font-family: 'Playfair Display', serif; font-size: 1.35rem;
      color: var(--ink); margin: 0 0 1.5rem;
    }
    .detail-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1rem; }
    .detail-list li {
      display: flex; align-items: flex-start; gap: 0.875rem;
      padding-bottom: 1rem; border-bottom: 1px solid var(--border);
    }
    .detail-list li:last-child { border: none; padding: 0; }
    .detail-icon { font-size: 1.25rem; margin-top: 2px; }
    .detail-list div { display: flex; flex-direction: column; gap: 0.1rem; }
    .detail-list strong { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
    .detail-list span { color: var(--ink); font-size: 0.95rem; font-weight: 500; }
    .desc-card p { color: var(--muted); line-height: 1.7; margin-bottom: 1.5rem; }
    .program-items { display: flex; flex-direction: column; gap: 0.75rem; }
    .prog { display: flex; align-items: center; gap: 1rem; }
    .prog-time {
      font-size: 0.8rem; font-weight: 600; color: var(--accent);
      background: var(--accent-soft); padding: 0.2rem 0.6rem;
      border-radius: 6px; min-width: 52px; text-align: center;
    }
    .prog-label { color: var(--ink); font-size: 0.9rem; }
    .sidebar { display: flex; flex-direction: column; gap: 1rem; }
    .ticket-card {
      background: var(--ink); color: white;
      border-radius: 16px; padding: 2rem; text-align: center;
    }
    .ticket-header { font-size: 2.5rem; margin-bottom: 1rem; }
    .ticket-card h3 {
      font-family: 'Playfair Display', serif; font-size: 1.4rem;
      color: white; margin: 0 0 0.75rem;
    }
    .ticket-card p { color: rgba(255,255,255,0.65); font-size: 0.9rem; margin-bottom: 1.5rem; }
    .btn-ticket {
      display: block; background: var(--accent); color: white;
      text-decoration: none; padding: 0.85rem; border-radius: 10px;
      font-weight: 600; font-size: 0.9rem;
      transition: background 0.2s, transform 0.2s;
    }
    .btn-ticket:hover { background: var(--accent-dark); transform: translateY(-1px); }
    .contact-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 16px; padding: 1.5rem;
    }
    .contact-card h4 { font-size: 0.9rem; color: var(--ink); margin: 0 0 0.5rem; font-weight: 600; }
    .contact-card p { color: var(--muted); font-size: 0.875rem; margin-bottom: 0.75rem; }
    .contact-card a { color: var(--accent); font-size: 0.875rem; }
    @media (max-width: 900px) {
      .event-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class NarropartyComponent {}
