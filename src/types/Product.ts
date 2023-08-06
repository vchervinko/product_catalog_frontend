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

export interface ProductInfo {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
