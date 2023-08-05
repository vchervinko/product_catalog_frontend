import { CartProduct } from '../types/Product';

export function calculateQuantity(cart: CartProduct[]) {
  return cart.reduce((total, product) => total + product.quantity, 0);
}
