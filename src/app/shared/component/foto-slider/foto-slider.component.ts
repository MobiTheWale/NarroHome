import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';

export interface SliderImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'foto-slider',
  imports: [CommonModule, ButtonModule, GalleriaModule, TagModule],
  templateUrl: './foto-slider.component.html',
  styleUrl: './foto-slider.component.css'
})
export class FotoSliderComponent {

  @Input() images: SliderImage[] = [];
  @Input() showThumbnails: boolean = true;
  @Input() showIndicators: boolean = true;
  @Input() autoPlay: boolean = false;
  @Input() transitionInterval: number = 4000;

  activeIndex = signal(0);

  totalImages = computed(() => this.images.length);

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px',  numVisible: 3 },
    { breakpoint: '480px',  numVisible: 1 }
  ];

  prev(): void {
    this.activeIndex.update(i =>
      i === 0 ? this.images.length - 1 : i - 1
    );
  }

  next(): void {
    this.activeIndex.update(i =>
      i === this.images.length - 1 ? 0 : i + 1
    );
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
