import { FC } from 'react';
import './ProductDetails.scss';
import { ProductInfo } from '../../types/Product';

const ProductDetails: FC<{ product: ProductInfo }> = ({ product }) => {

  return (
    <div className="product-details">
      <button>Back</button>
      <h2>{product.name}</h2>
      <p>
        Price: ${product.priceDiscount}
        Regular Price: ${product.priceRegular}
      </p>
      <div className="product-specs">
        <p>Screen: {product.screen}</p>
        <p>Resolution: {product.resolution}</p>
        <p>Processor: {product.processor}</p>
        <p>RAM: {product.ram}</p>
      </div>

      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
