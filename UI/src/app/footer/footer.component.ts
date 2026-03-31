import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-inner">
        <p class="copy">&copy; {{ year }} Narroparty e.V.</p>
        <nav>
          <a routerLink="/impressum">Impressum</a>
          <a routerLink="/datenschutz">Datenschutz</a>
        </nav>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      border-top: 1px solid var(--border);
      height: 80px;
      display: flex;
      align-items: center;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .copy { color: var(--muted); font-size: 0.8rem; }
    nav { display: flex; gap: 1.5rem; }
    nav a {
      color: var(--muted); font-size: 0.8rem;
      text-decoration: none;
      transition: color 0.2s;
    }
    nav a:hover { color: var(--accent); }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
