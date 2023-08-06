import { client } from '../helpers/fetchClient';
import { Product } from '../types/Product';

export const getPhones = async () => {
  const response = await client.get<Product[]>('/products/phones');

  return response;
};
