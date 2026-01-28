"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
export default function Media() {
  const data = [
    "/homepage/media/1.png",
    "/homepage/media/2.png",
    "/homepage/media/3.png",
    "/homepage/media/4.png",
    "/homepage/media/5.png",
    "/homepage/media/6.png",
    "/homepage/media/7.png",
    "/homepage/media/9.png",
    "/homepage/media/10.png",
  ];
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={10}
        breakpoints={{
          370: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="!static"
      >
        <div>
          {data.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="overflow-hidden flex h-full items-center">
                <img
                  src={item}
                  className="w-full max-[560px]:h-[180px] h-auto duration-500 ease-in-out object-cover  hover:scale-105 "
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
