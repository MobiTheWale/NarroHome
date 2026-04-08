import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-fotos',
    imports: [NgFor],
    template: `
    <div class="page">
      <div class="page-header">
        <span class="badge">Galerie</span>
        <h1>Fotos</h1>
        <p>Eindrücke und Erinnerungen aus unseren Veranstaltungen.</p>
      </div>

      <div class="gallery">
        <div class="gallery-item" *ngFor="let item of placeholders; let i = index"
             [style.grid-row]="item.tall ? 'span 2' : 'span 1'">
          <div class="placeholder" [style.background]="item.bg">
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .page { max-width: 1200px; margin: 0 auto; padding: 6rem 2rem 4rem; }
    .page-header { margin-bottom: 3rem; }
    .badge {
      display: inline-block;
      font-size: 0.75rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--accent); background: var(--accent-soft);
      padding: 0.35rem 0.85rem; border-radius: 999px; margin-bottom: 1rem;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--ink); margin: 0 0 0.75rem;
    }
    p { color: var(--muted); font-size: 1rem; }
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 220px;
      gap: 1rem;
    }
    .gallery-item { overflow: hidden; border-radius: 12px; }
    .placeholder {
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; color: rgba(0,0,0,0.35);
      font-weight: 500; letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    @media (max-width: 768px) {
      .gallery { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .gallery { grid-template-columns: 1fr; }
    }
  `]
})
export class FotosComponent {
  placeholders = [
    { label: 'Narroparty 2024', bg: '#f5e6e0', tall: true },
    { label: 'Sommerfest', bg: '#e8f4f8', tall: false },
    { label: 'Jahresfeier', bg: '#f0f5e8', tall: false },
    { label: 'Narroparty 2023', bg: '#f5f0e8', tall: false },
    { label: 'Winterfest', bg: '#e8eaf5', tall: true },
    { label: 'Jubiläum', bg: '#f5e8f0', tall: false },
    { label: 'Frühjahr', bg: '#e8f5ec', tall: false },
    { label: 'Herbstfest', bg: '#f5ede8', tall: false },
  ];
}
