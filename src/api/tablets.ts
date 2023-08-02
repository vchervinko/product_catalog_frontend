import { client } from '../helpers/fetchClient';
import { Product } from '../types/Product';

export const getTablets = async () => {
  const response = await client.get<Product[]>('/products/tablets');

  return response;
};
