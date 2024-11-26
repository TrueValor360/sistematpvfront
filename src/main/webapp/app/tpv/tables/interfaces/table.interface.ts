import { Product } from 'app/tpv/products/interfaces/product.interface';

export interface Table {
  name: string;
  state: string;
  orders?: Order[];
}

export interface Order {
  food: Product;
  quantity: number;
}
