import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProductColor {
  name: string;
  code: string;
  bgClass: string;
}

interface ProductSize {
  label: string;
  extraPrice: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  basePrice: number = 29.99;
  
  colors: ProductColor[] = [
    { name: 'Noir Onyx', code: '#0f172a', bgClass: 'bg-slate-900' },
    { name: 'Bleu Marine', code: '#1e3a8a', bgClass: 'bg-blue-900' },
    { name: 'Rouge Passion', code: '#991b1b', bgClass: 'bg-red-800' },
    { name: 'Vert Forêt', code: '#065f46', bgClass: 'bg-emerald-800' }
  ];

  sizes: ProductSize[] = [
    { label: 'S', extraPrice: 0 },
    { label: 'M', extraPrice: 0 },
    { label: 'L', extraPrice: 2 },
    { label: 'XL', extraPrice: 4 }
  ];

  selectedColor: ProductColor = this.colors[0];
  selectedSize: ProductSize = this.sizes[1];
  customText: string = 'Mon Design';
  selectedFont: string = 'font-sans';
  includeGiftBox: boolean = false;

  fonts = [
    { name: 'Moderne (Sans)', class: 'font-sans' },
    { name: 'Élégant (Serif)', class: 'font-serif' },
    { name: 'Technique (Mono)', class: 'font-mono' }
  ];

  get computedPrice(): number {
    let total = this.basePrice + this.selectedSize.extraPrice;
    if (this.includeGiftBox) total += 5;
    return Number(total.toFixed(2));
  }

  isOrdered: boolean = false;

  submitOrder() {
    this.isOrdered = true;
  }

  resetCustomizer() {
    this.isOrdered = false;
    this.customText = 'Mon Design';
    this.selectedColor = this.colors[0];
    this.selectedSize = this.sizes[1];
    this.includeGiftBox = false;
  }
}
