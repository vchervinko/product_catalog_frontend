import { client } from '../helpers/fetchClient';
import { Product, ProductInfo } from '../types/Product';

interface ProductResponse {
  count: number;
  data: Product[];
}

export const getProducts = async (
  category: string,
  page: number,
  limit: number,
  sortBy: 'newest' | 'highestPrice' | 'lowestPrice',
): Promise<ProductResponse> => {
  const response = await client.get<ProductResponse>(
    `/slfjas${category}?page=${page}&?limit=${limit}&?sortBy=${sortBy}`,
  );

  return response;
};

export const getProductById = async (
  id: string,
  category: string,
): Promise<ProductInfo> => {
  const response = await client.get<ProductInfo>(`/${category}/${id}`);

  return response;
};

export const getNewProducts = async (): Promise<Product[]> => {
  const response = await client.get<Product[]>('/products/new');

  return response;
};

export const getDiscountProducts = async (): Promise<Product[]> => {
  const response = await client.get<Product[]>('/products/discount');

  return response;
};

export const getProductsCount = async (): Promise<number[]> => {
  const phones = client.get<ProductResponse>('/phones');
  const tablets = client.get<ProductResponse>('/tablets');
  const accessories = client.get<ProductResponse>('/accessories');

  const [
    phonesResponse,
    tabletsResponse,
    accessoriesResponse,
  ] = await Promise.all([
    phones,
    tablets,
    accessories,
  ]);

  const phonesCount = phonesResponse.count;
  const tabletsCount = tabletsResponse.count;
  const accessoriesCount = accessoriesResponse.count;

  return [phonesCount, tabletsCount, accessoriesCount];
};
