import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './scroll.css';
import ProductCard from '../../ProductCard/productCard';
import { Product } from '../../ProductList/types/state';

function Scroll({ products }: { products: Product[] }): JSX.Element {
  // const scrollItem = products.slice(0, 11);
  const [productsScrollList, setProductsScrollList] = useState<any>([]);

  useEffect(() => {
    if (products) {
      setProductsScrollList(products.slice(0, 11));
    }
  }, [products]);
  return (productsScrollList.length > 0 ?
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
      {productsScrollList.length > 0 &&
        productsScrollList.map((item: any) => (
        <SwiperSlide key={item.id}>
          <ProductCard product={item} />
        </SwiperSlide>
      )
        )
      }
    </Swiper> : <></>
  );
}

export default Scroll;
