export interface Product {
  id: number;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  year: number;
  image: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
