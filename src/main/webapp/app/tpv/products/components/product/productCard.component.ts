import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
