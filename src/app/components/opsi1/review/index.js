"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text: "A beautiful, peaceful stay in Ubud at Aksari resort for our honeymoon. Our villa was spacious, clean and well maintained. All staff so friendly and accommodating. We enjoyed our massage at the spa very relaxing and all our food at the restaurant was delicious. Participate in the Yoga each morning and that was a wonderful way to start the day. Resort is well maintained and you are able to relax the moment you arrive. Much thanks to all the staff so helpful, friendly and contribute to the amazing stay",
    author: "Angela Psaila",
    source: "Google Review",
  },
  {
    text: "We had a wonderful stay at Aksari Hotel in Bali! We stayed in the private villa with a pool, which was both beautiful and peaceful — perfect for relaxing. The atmosphere of the hotel was calm, the rooms were clean and stylish, and the location was ideal for exploring the area. A special thank you to Ayu, who went above and beyond to help us during our stay. She was always kind, attentive, and truly made our experience even more enjoyable. Highly recommended!",
    author: "Habib",
    source: "Bookingcom",
  },
  {
    text: "I just had the most amazing and relaxing experience in Aksari Luxury Resort, they have a beautiful summing pool, yoga area, delicious food. Unforgettable experience a must try in life. Highlight to the nicest staff Wulan and all the team. Keep it up",
    author: "Peahgah",
    source: "Bookingcom",
  },
  {
    text: "Staying at Aksari Bali was truly an unforgettable experience. From the moment we arrived, we were welcomed with such warmth and genuine hospitality that made us feel instantly at home. The villas are stunning—spacious, beautifully decorated, and perfectly designed for privacy and comfort. Having our own private pool surrounded by greenery created such a romantic and relaxing atmosphere, ideal for couples looking for a peaceful escape",
    author: "Sheshan M",
    source: "Tripadvisor",
  },
  {
    text: "One of the best destinations for a honeymoon or a peaceful getaway—perfect if you want to relax and escape the noise of the world. Our experience was made even more special thanks to Ayu, who went above and beyond as a manager, taking care of everything and ensuring we had the best vacation. I’m truly grateful to her and the entire staff for their wonderful hospitality",
    author: " Marwan Raslan",
    source: "Tripadvisor",
  },
];

export default function GuestReviews() {
  return (
    <section className="bg-[#FAB766] pb-[100px] max-[560px]:pb-[70px]">
      <div className="container mx-auto text-center">
        <h2 className="text-[28px] tracking-[0.5px] text-white/80 mb-14 max-[560px]:mb-[40px]">
          The Story from Our Guest and Partner
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={60}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!h-auto "
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="!h-auto pb-2">
              <div className="bg-transparent shadow-md px-10 py-12 flex flex-col justify-between text-left">
                <p className="relative review-text text-[16px]  text-white/80 italic font-light leading-[1.8] tracking-wide mb-10">
                  “{review.text}”
                </p>
                <div className="mt-auto border-t-[1px] border-[#E6E2DF]/50 pt-6">
                  <p className="text-[16px] font-medium text-white/80">
                    — {review.author}
                  </p>
                  <p className="!text-[13px] text-white/40 uppercase tracking-[1.5px] mt-1">
                    {review.source}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-10 max-[560px]:mt-4 gap-2 cursor-pointer flex justify-center" />
      </div>
    </section>
  );
}
