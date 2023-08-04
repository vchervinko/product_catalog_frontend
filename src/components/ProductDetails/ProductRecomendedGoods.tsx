import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProductRecomendedGoods.scss';
import { Icon } from '../Icon';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductInfo } from '../../types/Product';
import { useProductsContext } from '../../contexts/ProductsContext/useProductsContext';

const ProductRecomendedGoods: FC<{ product: ProductInfo }> = () => {
  const { products } = useProductsContext();

  return (
    <div className="Recomended-goods">
      <div className="Recomended-goods__heading">
        <h2 className="Recomended-goods__title">
          You may also like
        </h2>

        <div className="Recomended-goods__slider-buttons">
          <button className="prev">
            <Icon size={32} type="arrow-left" />
          </button>

          <button className="next">
            <Icon size={32} type="arrow-right" />
          </button>
        </div>
      </div>

      <div className="Recomended-goods__slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          loop={false}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
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

export default ProductRecomendedGoods;
