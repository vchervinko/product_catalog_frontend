import React, { FC } from 'react';
import './ProductAbout.scss';
import { ProductInfo } from '../../types/Product';
import { capitalize } from '../../helpers/capitalize';

interface Props {
  product: ProductInfo;
}

const ProductAbout: FC<Props> = ({ product }) => {
  console.log(product);

  const techSpecsKeys: (keyof ProductInfo)[] = [
    'screen',
    'resolution',
    'processor',
    'ram',
    'camera',
    'zoom',
    'cell',
  ];

  return (
    <div className="Product__description">
      <div className="Product__content">
        <div className="Product__about-section">
          <h2 className="Product__about-title">
            About
          </h2>

          <ul className="Product__about-list">
            {product.descriptions.map((section, index) => (
              <li key={index} className="Product__about-item">
                <h3 className="Product__description-title">
                  {section.title}
                </h3>

                <ul>
                  {section.text.map((item, idx) => (
                    <li key={idx} className="Product__description-text">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="Product__tech-specs">
          <h2 className="Product__tech-specs-title">
            Tech specs
          </h2>

          <ul className="Product__specs-list">
            {techSpecsKeys.map((key) => {
              const value = product[key];

              return (
                <React.Fragment key={key}>
                  <li className="Product__specs-item">
                    <p className="Product__specs-title">
                      {capitalize(key)}:
                    </p>

                    <span className="Product__specs-value">
                      {Array.isArray(value)
                        ? value.join(', ')
                        : value}
                    </span>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
