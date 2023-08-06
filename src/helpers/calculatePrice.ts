import { CartProduct } from '../types/Product';

export function calculatePrice(product: CartProduct) {
  return product.price * product.quantity;
}
