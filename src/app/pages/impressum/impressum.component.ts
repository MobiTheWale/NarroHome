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
        <p>Narro-Gruppe Oberkirch e.V.<br>
        Gaisbacher Straße 36<br>
        77704 Oberkirch<br>
        Deutschland</p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>Carmen Strack (1. Vorstand)<br>
        Markus Zimmmermann (2. Vorstand)<br>
        Sascha Späth (3. Vorstand)</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>Telefon: +49 (0)7802 4903<br>
        E-Mail: <a href="mailto:Obernarro@narro-oberkirch.de">Obernarro&#64;narro-oberkirch.de</a></p>
      </section>

      <section>
        <h2>Vereinsregister</h2>
        <p>Eingetragen beim Amtsgericht Musterdorf<br>
        Vereinsregisternummer: VR 12345</p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
        <p>Carmen Strack<br>
        Gaisbacher Straße 36<br>
        77704 Oberkirch</p>
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
