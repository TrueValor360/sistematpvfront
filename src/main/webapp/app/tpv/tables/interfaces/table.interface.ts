export interface Table {
  name: string;
  state: string;
  orders?: Order[];
}

export interface Order {
  food: string;
  quantity: number;
}
