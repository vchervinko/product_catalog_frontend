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
'id' | 'image' | 'category' | 'itemId'
> {
  id: string;
  color: string;
  namespaceId: number;
  colorId: number;
  categoryId: number;
  capacityAvailable: string[];
  colorsAvailable: string[];
  images: string[];
  descriptions: {
    title: string;
    text: string[];
  }[];
  resolution: string;
  processor: string;
  camera?: string;
  zoom?: string;
  cell: string[];
  itemId: number;
}
