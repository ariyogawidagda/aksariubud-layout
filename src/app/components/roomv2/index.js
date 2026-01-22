"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function RoomTypeSlider() {
  const roomTypes = [
    {
      name: "Aksari Suite",
      text: "This suite is a celebration of understated luxury, where a spacious living area flows seamlessly onto a private balcony. Amidst curated artisan furnishings and soft textiles, you are invited to lounge and surrender to the peaceful ambiance of your own personal haven.",
      image: "/rooms/aksari-suite.webp",
    },
    {
      name: "Grand Aksari Suite",
      text: "This suite is an ode to grandeur, a private gallery where modern minimalist architecture meets the Balinese soul. It offers a generous lounge and breathtaking balcony over the Ubud jungle, define an experience of curated elegance.",
      image: "/rooms/grand-aksari-suite.webp",
    },
    {
      name: "One Bedroom Villa with Private Pool",
      text: "Discover ultimate privacy within our walled garden paradise, a personal villa where your private pool forms a perfect oasis for sun-drenched afternoons and starlit dips. The airy bedroom opens directly to the water's edge, blurring the line between inner sanctuary and tropical haven to create a seamless seclusion and pleasure.",
      image: "/rooms/one-bedroom-villa.webp",
    },
    {
      name: "Grand One Bedroom Private Pool Villa with River View",
      text: "Perched within Ubud's lush jungle, here the symphony of nature is your constant companion. The elegant living space is designed for moments of awe, and the private infinity pool appears to merge with the flowing river valley, a living masterpiece of nature presented exclusively for you.",
      image: "/rooms/grand-one-bedroom-river.webp",
    },
    {
      name: "Grand One Bedroom Villa with Private Pool",
      text: "Experience a living space at its most perfected expression, a grand sanctuary featuring an expansive living area, a stately bedroom, and a private pool embraced by a lush tropical garden. Crafted for extended moments of ease and intimate gatherings, every refined detail speaks softly of exceptional elegance.",
      image: "/rooms/grand-one-bedroom-pool.webp",
    },
    {
      name: "Grand One Bedroom Private Pool Villa with Riverside View",
      text: "Relax in a state of serene hypnosis, lulled by the gentle flow of the sacred river echoing from your private deck and pool. This villa offers a front-row view of stone and jungle in perfect harmony, a poetic dialogue between human craftsmanship and Bali’s untamed beauty.",
      image: "/rooms/grand-one-bedroom-pool-river.webp",
    },
    {
      name: "Grand Two Bedroom Private Pool Villa with River View",
      text: "Crafted for shared journeys, this villa is a family estate in miniature,  where two luxurious suites flank a magnificent living pavilion and a vast pool dancing with reflections of the sky. It is a destination of boundless grace, promising laughter, bonding, and unforgettable moments.",
      image: "/rooms/grand-two-river.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // buat ref untuk swiper
  const swiperRef = useRef(null);

  return (
    <section className="relative h-[100vh] max-[560px]:h-[80vh] w-full">
      {/* Background image berubah sesuai item aktif */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${roomTypes[activeIndex].image})`,
        }}
      />
      {/* Overlay biar teks kebaca */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Konten tengah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white/80 z-10 px-4">
        <div className="max-w-[700px] mx-auto space-y-8 mt-[100px]">
          <p className="text-white/90 text-[14px] tracking-[0.5px]">
            {roomTypes[activeIndex].text}
          </p>
          <Link
            href={"#"}
            className="flex gap-[10px] justify-center items-center"
          >
            <p className="text-[14px] text-white/90">Discover More</p>
            <img
              src="arrow.png"
              loading="lazy"
              alt="arrow"
              className="w-[27px] h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Slider teks */}
      <div className="absolute top-[120px] max-[560px]:top-[80px] w-full z-10">
        <div className="container relative">
          <h2 className="text-white/80 text-center mb-10 max-[560px]:mb-5 tracking-[0.5px]">
            Accomodations
          </h2>
          <div className="relative max-w-[1150px] mx-auto px-6 sm:px-10">
            <Swiper
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 40,
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  setActiveIndex(swiper.activeIndex);
                }
              }}
              className="text-white"
            >
              {roomTypes.map((room, idx) => (
                <SwiperSlide key={idx} className=" !h-auto min-[560px]:!w-auto">
                  <h3
                    onClick={() => setActiveIndex(idx)}
                    className={`cursor-pointer transition w-full max-[560px]:max-w-[280px] max-[560px]:ml-[20px] max-[400px]:ml-[10px]  max-[560px]:text-center flex justify-center items-center h-full text-base sm:text-lg md:text-[22px] ${
                      idx === activeIndex
                        ? "opacity-100 font-bold"
                        : "opacity-60"
                    }`}
                  >
                    {room.name}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Panah kiri */}
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="absolute -left-4 sm:-left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <img
                src="arrow.png"
                alt="prev"
                className="w-5 sm:w-6 md:w-[27px] h-auto rotate-180"
              />
            </button>

            {/* Panah kanan */}
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="absolute -right-4 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <img
                src="arrow.png"
                alt="next"
                className="w-5 sm:w-6 md:w-[27px] h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
