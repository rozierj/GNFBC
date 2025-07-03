import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const imageFiles = [
  `${process.env.PUBLIC_URL}/images/Carousel/photo1.jpg`,
  `${process.env.PUBLIC_URL}/images/Carousel/photo2.jpg`
];

export default function ChurchGallery() {
  return (
    <section className="p-8 bg-purple-50 text-purple-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Church Gallery</h2>
      <div className="w-full mx-auto rounded-xl overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
        >
          {imageFiles.map((src, index) => (
<SwiperSlide key={index}>
  <div className="w-full flex justify-center items-center bg-white">
    <img
      src={src}
      alt={`Slide ${index + 1}`}
      className="w-full h-auto max-h-[500px] object-contain"
    />
  </div>
</SwiperSlide>


          ))}
        </Swiper>
      </div>
    </section>
  );
}
