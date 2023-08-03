import { FC } from 'react';
import './ProductAbout.scss';
import { ProductInfo } from '../../types/Product';

const ProductAbout: FC<{ product: ProductInfo }> = ({ product }) => {
  return (
    <>
      <div className="product-description">
        {product.description.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.text.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="product-specs">
        <p>Screen: {product.screen}</p>
        <p>Resolution: {product.resolution}</p>
        <p>Processor: {product.processor}</p>
        <p>RAM: {product.ram}</p>
        <p>Camera: {product.camera}</p>
        <p>Zoom: {product.zoom}</p>
      </div>

      <div className="product-cell">
        <p>Cellular: {product.cell.join(', ')}</p>
      </div>
    </>
  );
};

export default ProductAbout;
