import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './auto.css';

function Auto(): JSX.Element {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img className="imge" src="https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,w_1180,dpr_0.9,d_photoiscoming.png/elbrus/images/main-new/carousel/2021/svetodiodnye-lampy-d-new-main-0102.jpg" alt="..." /></SwiperSlide>
      <SwiperSlide><img className="imge" src="https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,w_1180,dpr_0.9,d_photoiscoming.png/elbrus/images/main-new/carousel/2022/vygodnaya-pokupka-1210-d.jpg" alt="..." /></SwiperSlide>
      <SwiperSlide><img className="imge" src="https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,w_1180,dpr_0.9,d_photoiscoming.png/elbrus/images/main-new/carousel/2022/stilnaya-kuhnya-0112-d.jpg" alt="." /></SwiperSlide>
      <SwiperSlide><img className="imge" src="https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,w_1180,dpr_0.9,d_photoiscoming.png/elbrus/images/main-new/carousel/2022/tovary-dlya-sada-i-dachi-zima-2811-d.jpg" alt="..." /></SwiperSlide>
      <SwiperSlide><img className="imge" src="https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,w_1180,dpr_0.9,d_photoiscoming.png/elbrus/images/main-new/carousel/2022/super-ceny-0606-d-new.jpg" alt="..." /></SwiperSlide>
    </Swiper>
  );
}

export default Auto;
