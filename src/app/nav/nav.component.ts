import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="nav-inner">
        <a class="logo" routerLink="/">
          <span class="logo-mark">N</span>
          <span class="logo-text">Narrogruppe Oberkirch e.V.</span>
        </a>

        <button class="burger" (click)="toggleMenu()" [class.open]="menuOpen()">
          <span></span><span></span><span></span>
        </button>

        <ul [class.open]="menuOpen()" (click)="closeMenu()">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
          <li><a routerLink="/fotos" routerLinkActive="active">Fotos</a></li>
          <li><a routerLink="/narroparty" routerLinkActive="active">Narroparty</a></li>
          <li><a routerLink="/impressum" routerLinkActive="active">Impressum</a></li>
          <li><a routerLink="/datenschutz" routerLinkActive="active">Datenschutz</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      height: 64px;
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    nav.scrolled {
      border-bottom-color: var(--border);
      box-shadow: 0 2px 24px rgba(0,0,0,0.06);
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--ink);
    }
    .logo-mark {
      width: 36px; height: 36px;
      background: var(--accent);
      color: white;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      font-weight: 700;
      border-radius: 8px;
    }
    .logo-text {
      font-family: 'Playfair Display', serif;
      font-size: 1.15rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 0.25rem;
      margin: 0; padding: 0;
    }
    ul a {
      text-decoration: none;
      color: var(--muted);
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0.4rem 0.85rem;
      border-radius: 6px;
      transition: color 0.2s, background 0.2s;
    }
    ul a:hover { color: var(--ink); background: var(--surface); }
    ul a.active { color: var(--accent); background: var(--accent-soft); }
    .burger { display: none; }

    @media (max-width: 768px) {
      .burger {
        display: flex; flex-direction: column;
        gap: 5px; background: none; border: none;
        cursor: pointer; padding: 4px;
      }
      .burger span {
        display: block; width: 22px; height: 2px;
        background: var(--ink);
        transition: transform 0.3s, opacity 0.3s;
      }
      .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .burger.open span:nth-child(2) { opacity: 0; }
      .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      ul {
        display: none; position: fixed;
        top: 64px; left: 0; right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem 2rem 2rem;
        border-bottom: 1px solid var(--border);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      }
      ul.open { display: flex; }
      ul a { padding: 0.75rem 1rem; font-size: 1rem; }
    }
  `]
})
export class NavComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 10); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
