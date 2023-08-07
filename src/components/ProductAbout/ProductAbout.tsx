import { FC } from 'react';
import './ProductAbout.scss';
import { ProductInfo } from '../../types/Product';

interface Props {
  product: ProductInfo;
}

const ProductAbout: FC<Props> = ({ product }) => {
  console.log(Object(product));

  return (
    <div className="Product__description">
      <div className="Product__container">
        <div className="Product__about">
          <h2 className="Product__about-title">About</h2>
          <div className="Product__about-list">
            {product.descriptions.map((section, index) => (
              <div key={index}>
                <h3 className="Product__section-title">{section.title}</h3>
                <ul>
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
          <h2 className="Product__tech-specs-title">Tech specs</h2>

          <ul className="Product__tech-specs-list">
            <li className="Product__specs">
              <p className="Product__specs-name">
                Screen:
              </p>

              <p className="Product__specs-text">
                {product.screen}
              </p>
            </li>

            <li className="Product__specs">
              <p className="Product__specs-name">
                Resolution:
              </p>

              <p className="Product__specs-text">
                {product.resolution}
              </p>
            </li>

            <li className="Product__specs">
              <p className="Product__specs-name">
                Processor:
              </p>

              <p className="Product__specs-text">
                {product.processor}
              </p>
            </li>

            <li className="Product__specs">
              <p className="Product__specs-name">
                RAM:
              </p>

              <p className="Product__specs-text">
                {product.ram}
              </p>
            </li>

            {product.camera && (
              <li className="Product__specs">
                <p className="Product__specs-name">
                  Camera:
                </p>

                <p className="Product__specs-text">
                  {product.camera}
                </p>
              </li>
            )}

            {product.zoom && (
              <li className="Product__specs">
                <p className="Product__specs-name">
                  Zoom:
                </p>

                <p className="Product__specs-text">
                  {product.zoom}
                </p>
              </li>
            )}

            <li className="Product__specs">
              <p className="Product__specs-name">
                Cellular:
              </p>
              <p className="Product__specs-text">
                {product.cell.join(', ')}
              </p>
            </li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
