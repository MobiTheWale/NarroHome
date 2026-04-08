import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  imports: [],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
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
