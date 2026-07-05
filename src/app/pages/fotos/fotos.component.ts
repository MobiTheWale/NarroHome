import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FotoSliderComponent, SliderImage } from "../../shared/component/foto-slider/foto-slider.component";
import { AccordionModule,  } from "primeng/accordion";

@Component({
  selector: 'app-fotos',
  imports: [FotoSliderComponent,AccordionModule],
  templateUrl: './fotos.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
sliderImages: SliderImage[]=new Array(10).fill(0).map((_, i) => ({
  src: `https://picsum.photos/800/600?random=${i + 1}`,
  alt: `Bild ${i + 1}`,
}));currentSubPanel: string = '0';
}
