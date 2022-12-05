import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './scroll.css';
import ProductCard from '../../ProductCard/productCard';

function Scroll({products}): JSX.Element {

  const scrollItem = products.slice(0,11)
  
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      slidesPerGroup={1}
      loop
      loopFillGroupWithBlank
      pagination={{
          clickable: true,
        }}
      navigation
      modules={[Navigation]}
      className="mySwiper"
    >
      {
        scrollItem.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard product={item}/>
        </SwiperSlide>
      )
        )
      }
    </Swiper>
  );
}

export default Scroll;
