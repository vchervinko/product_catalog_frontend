import { FC } from 'react';
import { Link } from 'react-router-dom';

import accessories from '../../assets/images/home-category-accessories.png';
import phones from '../../assets/images/home-category-phones.png';
import tablets from '../../assets/images/home-category-tablets.png';

import './Categories.scss';

export const Categories: FC = () => {
  const categoriesData = [
    {
      imageSrc: phones,
      alt: 'Phones',
      linkTo: '/phones',
      productName: 'Mobile Phones',
      info: '95 models',
    },
    {
      imageSrc: tablets,
      alt: 'Tablets',
      linkTo: '/tablets',
      productName: 'Tablets',
      info: '24 models',
    },
    {
      imageSrc: accessories,
      alt: 'Accessories',
      linkTo: '/accessories',
      productName: 'Accessories',
      info: '100 models',
    },
  ];

  return (
    <section className="Categories">
      <div className="container">
        <h2 className="Categories__title">Shop by category</h2>
        <div className="Categories__container">
          {categoriesData.map((category, index) => (
            <div className="Categories__item" key={index}>
              <div className="image__container">
                <Link to={category.linkTo}>
                  <img
                    className={`
                      Categories__image
                      Categories__image--${category.alt.toLowerCase()}
                    `}
                    src={category.imageSrc}
                    alt={category.alt}
                  />
                </Link>
              </div>
              <Link className="Categories__productName" to={category.linkTo}>
                {category.productName}
              </Link>
              <p className="Categories__info">{category.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
