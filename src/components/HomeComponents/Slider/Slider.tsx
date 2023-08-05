import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import './Slider.scss';

import firstSlideSrc from '../../../assets/images/swiper-slide-1.png';

// import slideMobileSrc from '../../../assets/images/swiper-slide-mobile.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Icon } from '../../Icon';

const Slider: FC = () => (
  <div className="Slider">
    <div className="Slider__button prev">
      <Icon size={32} type="arrow-left" />
    </div>
    <Swiper
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
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="Slider__image"
          src={firstSlideSrc}
          alt="Now available in our store!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="Slider__image"
          src={firstSlideSrc}
          alt="Now available in our store!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="Slider__image"
          src={firstSlideSrc}
          alt="Now available in our store!"
        />
      </SwiperSlide>
    </Swiper>
    <div className="Slider__button next">
      <Icon size={32} type="arrow-right" />
    </div>
  </div>
);

export default Slider;
