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
    `/${category}?page=${page}&limit=${limit}&sortBy=${sortBy}`,
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
  const phones = client.get<number>(
    '/products/count?category=phones',
  );

  const tablets = client.get<number>(
    '/products/count?category=tablets',
  );

  const accessories = client.get<number>(
    '/products/count?category=accessories',
  );

  const [
    phonesCount,
    tabletsCount,
    accessoriesCount,
  ] = await Promise.all([
    phones,
    tablets,
    accessories,
  ]);

  return [phonesCount, tabletsCount, accessoriesCount];
};

export const getRecommendedProducts = async (
  price: number,
  fullPrice: number,
  category: string,
): Promise<Product[]> => {
  const response = await client.get<Product[]>(
    '/products/recommended'
      + `?price=${price}`
      + `&fullPrice=${fullPrice}`
      + `&category=${category}`,
  );

  return response;
};
