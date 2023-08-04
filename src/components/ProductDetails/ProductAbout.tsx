import { FC } from 'react';
import './ProductAbout.scss';
import { ProductInfo } from '../../types/Product';

const ProductAbout: FC<{ product: ProductInfo }> = ({ product }) => {
  const keysAfterDescription = Object.keys(product).slice(
    Object.keys(product).indexOf('description') + 1
  );

  return (
    <div className="Product__description">
      <div className="Product__container">

        <div className="Product__about">
          <h2 className="Product__about-title">
            About
          </h2>
          <div className="Product__about-list">
            {product.description.map((section, index) => (
              <div key={index}>
                <h3 className="Product__section-title">
                  {section.title}
                </h3>

                <ul >
                  {section.text.map((item, idx) => (
                    <li key={idx} className="Product__section-text">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="Product__tech-specs">
          <h2 className="Product__tech-specs-title">
            Tech specs
          </h2>

          <div className="Product__tech-specs-list">
            {keysAfterDescription.map((key) => (
              <div key={key} className="Product__specs">
                <p className="Product__specs-name">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>

                <p className="Product__specs-text">
                  {key === 'cell'
                    ? product[key].join(', ')
                    : product[key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
