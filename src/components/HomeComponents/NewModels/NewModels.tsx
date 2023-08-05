import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './NewModels.scss';
import { Icon } from '../../Icon';
import { ProductCard } from '../../ProductCard/ProductCard';
import {
  useProductsContext,
} from '../../../contexts/ProductsContext/useProductsContext';

import { Loader } from '../../Loader';
import { useErrorContext } from '../../../contexts/ErrorContext/useErrorContext';

const NewModels: FC = () => {
  const { products, isLoaded } = useProductsContext();
  const { error } = useErrorContext();

  const shouldShowLoader = !error && !isLoaded;
  const shouldShowError = Boolean(error);

  return (
    <div className="New-models">
      <div className="New-models__heading">
        <h2 className="New-models__title">
          Brand new models
        </h2>
        <div className="New-models__slider-buttons">
          <button className="prev__model">
            <Icon size={32} type="arrow-left" />
          </button>

          <button className="next__model">
            <Icon size={32} type="arrow-right" />
          </button>
        </div>
      </div>

      <div className="New-models__slider">
        {shouldShowError && (
          <h2 className="error">Something went wrong!</h2>
        )}

        {shouldShowLoader && (
          <span className="New-models__loader">
            <Loader size={30} />
          </span>
        )}
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          loop={false}
          navigation={{
            prevEl: '.prev__model',
            nextEl: '.next__model',
          }}
          modules={[Pagination, Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewModels;
