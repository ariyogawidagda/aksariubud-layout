"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Offers() {
  const offers = [
    {
      img: "/homepage/spa.webp",
      title: "Svaha Spa Kenderan",
      link: "#",
    },
    {
      img: "/homepage/sound-healing.webp",
      title: "Floating Sound Healing",
      link: "#",
    },
    {
      img: "/homepage/yoga.webp",
      title: "Yoga",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#F7BD97] pb-[120px] max-[560px]:pb-[80px]">
      <div className="container">
        <div className="max-w-[600px] mx-auto space-y-6">
          <h2 className="text-[28px] text-center tracking-[0.5px] capitalize leading-[180%] text-white/80">
            Spa & Wellness
          </h2>
        </div>

        {/* Slider */}
        <div className="mt-[40px] max-[560px]:mt-[40px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={3}
            navigation
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 30 },
              768: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {offers.map((offer, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    loading="lazy"
                    className="w-full h-[550px] max-[560px]:h-[400px] object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 w-full h-full z-10"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)",
                    }}
                  ></div>
                  <div className="absolute w-[80%] text-center top-[50%] left-[50%] translate-x-[-50%] z-20">
                    <h3 className="text-[22px] text-white/80 tracking-[0.5px] leading-[120%]">
                      {offer.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-[60px] left-[50%] translate-x-[-50%] z-20">
                    <Link
                      href={offer.link}
                      className="flex gap-[10px] items-center"
                    >
                      <p className="text-[14px] text-white/80">Discover More</p>
                      <img
                        src={`arrow.png`}
                        loading="lazy"
                        alt="arrow"
                        className="w-[27px] h-auto"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
