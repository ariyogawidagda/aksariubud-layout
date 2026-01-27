"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
export default function SwiperClient() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        className=" !overflow-visible mt-[40px] max-[560px]:mt-[40px]"
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative cursor-pointer">
            {/* Gambar */}
            <Image
              src={`/homepage/signature.webp`}
              alt="Luxury Resort"
              className="w-full h-[327px] min-[767px]:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
              }}
            ></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white/80 z-10 px-4">
              <h3 className="text-[22px] tracking-[0.5px] mb-3">
                Signature Facilities for Elevated Stays
              </h3>
              <Link
                href={`#`}
                className="flex gap-[10px] justify-center items-center pt-2"
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
        <SwiperSlide>
          <div className="relative cursor-pointer">
            {/* Gambar */}
            <Image
              src={`/homepage/immersive.jpg`}
              alt="Luxury Resort"
              className="w-full h-[327px] min-[767px]:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
              }}
            ></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white/80 z-10 px-4">
              <h3 className="text-[22px] tracking-[0.5px] mb-3">
                Immersive Experience
              </h3>
              <Link
                href={`#`}
                className="flex gap-[10px] justify-center items-center pt-2"
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
        <SwiperSlide>
          <div className="relative cursor-pointer">
            {/* Gambar */}
            <Image
              src={`/homepage/romantic.webp`}
              alt="Luxury Resort"
              className="w-full h-[327px] min-[767px]:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
              }}
            ></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white/80 z-10 px-4">
              <h3 className="text-[22px] tracking-[0.5px] mb-3">
                Romantic Surprises
              </h3>
              <Link
                href={`#`}
                className="flex gap-[10px] justify-center items-center pt-2"
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
        <SwiperSlide>
          <div className="relative cursor-pointer">
            {/* Gambar */}
            <Image
              src={`/homepage/wedding.webp`}
              alt="Luxury Resort"
              className="w-full h-[327px] min-[767px]:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
              }}
            ></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white/80 z-10 px-4">
              <h3 className="text-[22px] tracking-[0.5px] mb-3">
                Events & Weddings
              </h3>
              <Link
                href={`#`}
                className="flex gap-[10px] justify-center items-center pt-2"
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
      </Swiper>
    </>
  );
}
