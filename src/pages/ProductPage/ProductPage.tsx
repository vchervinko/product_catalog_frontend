/* eslint-disable max-len */
import { FC } from 'react';
import './ProductPage.scss';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { ProductInfo } from '../../types/Product';



const ProductPage: FC<ProductInfo> = () => {

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;
