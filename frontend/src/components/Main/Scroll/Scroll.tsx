import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './scroll.css';

function Scroll(): JSX.Element {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop
      loopFillGroupWithBlank
      pagination={{
          clickable: true,
        }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
    </Swiper>
  );
}

export default Scroll;
