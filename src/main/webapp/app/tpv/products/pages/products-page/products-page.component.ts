import { Component } from '@angular/core';
import { CakeIcon } from 'content/icons/TPV/FoodIcons/CakeIcon.component';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../../components/product/productCard.component';

@Component({
  selector: 'jhi-products-page',
  standalone: true,
  imports: [CakeIcon, ProductCardComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  demoProduct: Product = {
    name: 'Pollo al Curry',
    cost: 7.5,
    foodType: 'Oriental',
    description: 'Pollo trozeado sazonado con especias orientales acompañado de arroz blanco',
    image: 'https://es.giallozafferano.com/images/3-320/Pollo-al-curry_650x433_wm.jpg',
  };
}
