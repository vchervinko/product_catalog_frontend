import { client } from '../helpers/fetchClient';
import { Product } from '../types/Product';

export const getProducts = async () => {
  const response = await client.get<Product[]>('/products');

  return response;
};

export const getProductById = async (id: number) => {
  const response = await client.get<Product>(`/products/${id}`);

  return response;
};
