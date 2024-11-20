import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';


const Caurosal = ({ content }) => {
  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        loop
        modules={[Navigation, Pagination, EffectFade]}
        className="mb-8"
      >
        {Array.from({ length: content }).map((_, index) => {
          return <SwiperSlide>
          <div className="relative">
            <img
              src={`/assets/slide${index}.jpg`}
              alt="Welcome to HEAL School"
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h2 className="text-3xl text-white font-bold">Welcome to HEAL School</h2>
            </div>
          </div>
        </SwiperSlide>
})} </Swiper>
    </div>
  );
};

export default Caurosal;

