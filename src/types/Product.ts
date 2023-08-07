export interface Product {
  id: number;
  name: string;
  fullPrice: number;
  price: number;
  image: string;
  category: string;
  capacity: string;
  screen: string;
  ram: string;
  itemId: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface ProductInfo extends Omit<
Product,
'id' | 'image' | 'category'
> {
  id: string;
  namespaceId: string;
  color: string;
  colorId: number;
  capacityAvailable: string[];
  colorsAvailable: string[];
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  resolution: string;
  processor: string;
  camera: string;
  zoom: string;
  cell: string[];
}
