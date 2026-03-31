import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  template: `
    <div class="page legal">
      <h1>Impressum</h1>
      <p class="subtitle">Angaben gemäß § 5 TMG</p>

      <section>
        <h2>Herausgeber</h2>
        <p>Narroparty e.V.<br>
        Musterstraße 1<br>
        12345 Musterdorf<br>
        Deutschland</p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>Max Mustermann (1. Vorsitzender)<br>
        Erika Musterfrau (2. Vorsitzende)</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>Telefon: +49 (0) 123 456 789<br>
        E-Mail: <a href="mailto:info@narroparty.de">info&#64;narroparty.de</a></p>
      </section>

      <section>
        <h2>Vereinsregister</h2>
        <p>Eingetragen beim Amtsgericht Musterdorf<br>
        Vereinsregisternummer: VR 12345</p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
        <p>Max Mustermann<br>
        Musterstraße 1<br>
        12345 Musterdorf</p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
      </section>
    </div>
  `,
  styles: [`
    .page { max-width: 720px; margin: 0 auto; padding: 6rem 2rem 4rem; }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 2.75rem);
      color: var(--ink); margin: 0 0 0.5rem;
    }
    .subtitle { color: var(--muted); margin-bottom: 3rem; font-size: 0.95rem; }
    section { margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid var(--border); }
    section:last-child { border: none; }
    h2 {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem; color: var(--ink); margin: 0 0 0.75rem;
    }
    p { color: var(--muted); line-height: 1.75; font-size: 0.95rem; margin: 0; }
    a { color: var(--accent); }
  `]
})
export class ImpressumComponent {}
