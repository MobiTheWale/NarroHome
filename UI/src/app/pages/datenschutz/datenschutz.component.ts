import { Component } from '@angular/core';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  template: `
    <div class="page legal">
      <h1>Datenschutzerklärung</h1>
      <p class="subtitle">Informationen gemäß DSGVO</p>

      <section>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
      </section>

      <section>
        <h2>2. Verantwortliche Stelle</h2>
        <p>Narrogruppe Oberkirch e.V.<br>
        Gaisbacher Straße 36<br> 77704 Oberkirch<br>
        E-Mail: <a href="mailto:Obernarro@narro-oberkirch.de">Obernarro&#64;narro-oberkirch.de</a></p>
      </section>

      <section>
        <h2>3. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>
        <p>Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Daten verarbeitet, die für den Betrieb der Website erforderlich sind.</p>
        <h3>Server-Log-Dateien</h3>
        <p>Der Provider der Website erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind unter anderem Browsertyp, Betriebssystem, Referrer-URL und Uhrzeit der Serveranfrage.</p>
      </section>

      <section>
        <h2>4. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem haben Sie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
        <p style="margin-top: 0.75rem">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden unter: <a href="mailto:Obernarro@narro-oberkirch.de">Obernarro&#64;narro-oberkirch.de</a></p>
      </section>

      <section>
        <h2>5. Beschwerderecht</h2>
        <p>Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde ist der Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg.</p>
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
    h3 { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin: 1.25rem 0 0.5rem; font-weight: 600; }
    p { color: var(--muted); line-height: 1.75; font-size: 0.95rem; margin: 0; }
    a { color: var(--accent); }
  `]
})
export class DatenschutzComponent {}
