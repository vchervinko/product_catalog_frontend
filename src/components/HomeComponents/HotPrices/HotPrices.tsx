import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HotPrices.scss';
import { Icon } from '../../Icon';
import { ProductCard } from '../../ProductCard/ProductCard';
import {
  useProductsContext,
} from '../../../contexts/ProductsContext/useProductsContext';

import { Loader } from '../../Loader';
import { useErrorContext } from '../../../contexts/ErrorContext/useErrorContext';

const HotPrices: FC = () => {
  const { promoProducts, isLoaded } = useProductsContext();
  const { error } = useErrorContext();

  const shouldShowLoader = !error && !isLoaded;
  const shouldShowError = Boolean(error);

  return (
    <div className="Hot-prices">
      <div className="Hot-prices__heading">
        <h2 className="Hot-prices__title">
          Hot prices
        </h2>
        <div className="Hot-prices__slider-buttons">
          <button className="prev__model">
            <Icon size={32} type="arrow-left" />
          </button>

          <button className="next__model">
            <Icon size={32} type="arrow-right" />
          </button>
        </div>
      </div>

      <div className="Hot-prices__slider">
        {shouldShowError && (
          <h2 className="error">Something went wrong!</h2>
        )}

        {shouldShowLoader && (
          <span className="PageLayout__loader">
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
          {promoProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HotPrices;
