import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './auto.css';

function Auto():JSX.Element {
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
                <SwiperSlide><img src="https://www.richardfarrar.com/wp-content/uploads/2008/06/mona300-thumb.jpg" alt="..." /></SwiperSlide>
                <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
                <SwiperSlide><img src="https://avatars.mds.yandex.net/i?id=8b89c7abde7de2009ee942d78f3fe8973836bdbe-4715150-images-thumbs&n=13" alt="." /></SwiperSlide>
                <SwiperSlide><img src="https://www.richardfarrar.com/wp-content/uploads/2008/06/mona300-thumb.jpg" alt="..." /></SwiperSlide>
                <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
                <SwiperSlide><img src="https://avatars.mds.yandex.net/i?id=8b89c7abde7de2009ee942d78f3fe8973836bdbe-4715150-images-thumbs&n=13" alt="." /></SwiperSlide>
                <SwiperSlide><img src="https://www.richardfarrar.com/wp-content/uploads/2008/06/mona300-thumb.jpg" alt="..." /></SwiperSlide>
                <SwiperSlide><img src="https://www.themebeta.com/files/picture/201603/14/2366ba3ee6f8d8820c3fdad237c850f7.png" alt="..." /></SwiperSlide>
                <SwiperSlide><img src="https://avatars.mds.yandex.net/i?id=8b89c7abde7de2009ee942d78f3fe8973836bdbe-4715150-images-thumbs&n=13" alt="." /></SwiperSlide>
        </Swiper>
    );
}

export default Auto;
