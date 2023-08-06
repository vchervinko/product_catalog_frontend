import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import thirdSlide from '../../assets/images/banner-accessories.png';
import firstSlide from '../../assets/images/banner-phones.png';
import secondSlide from '../../assets/images/banner-tablets.png';
import { Icon } from '../Icon';
import './Slider.scss';

export const Slider: FC = () => (
  <div className="Slider">
    <button className="Slider__button prev">
      <Icon size={32} type="arrow-left" />
    </button>

    <div className="Slider__container">
      <Swiper
        className="Slider__swiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            className="Slider__image"
            src={firstSlide}
            alt="Phones now available in our store!"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="Slider__image"
            src={secondSlide}
            alt="Tablets now available in our store!"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="Slider__image"
            src={thirdSlide}
            alt="Accessories now available in our store!"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <button className="Slider__button next">
      <Icon size={32} type="arrow-right" />
    </button>
  </div>
);
