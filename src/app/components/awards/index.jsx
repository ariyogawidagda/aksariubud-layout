"use client";

import dynamic from "next/dynamic";
const KalendarNew = dynamic(() => import("./kalendar"), {
  ssr: false,
});
import { useInView } from "react-intersection-observer";
export default function Awards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section
        id="section2"
        className="bg-[#DE9230] relative pb-[100px] max-[560px]:pb-[70px] "
      >
        <div ref={ref} className="max-[900px]:hidden pt-[70px]">
          {inView ? <KalendarNew /> : <div style={{ height: 250 }} />}
        </div>
        <div className="h-[120px] max-[560px]:h-[50px]" />

        <div className="container ">
          <div className="">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[180%] text-white/80">
              Aksari Resort & Spa in Ubud
            </h1>
          </div>
          <div className="h-[50px] max-[560px]:h-[50px]"></div>
          {/* Deskripsi Resort */}
          <div className="grid grid-cols-2 min-[768px]:mt-[30px] gap-[80px] max-[560px]:gap-[40px]  max-[1024px]:grid-cols-1">
            <div className="relative">
              <img
                src="/homepage/about.webp"
                alt="Luxury Resort Ubud"
                className="w-full h-full object-cover shadow-md "
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="space-y-5 flex flex-col justify-center items-center">
              <h2 className="text-[28px] text-center tracking-[0.5px] capitalize leading-[120%] text-white/80">
                An Eco-Luxury Resort with Multi-Experience Sacred Essence of
                Bali
              </h2>

              <div className="space-y-2">
                <p
                  className={`leading-[180%] tracking-[0.5px] text-white/60 text-center transition-all duration-300 `}
                >
                  Aksari Resort is a Ubud sanctuary where wisdom, art, and
                  spirituality come together in harmony. The emblem of Aksari,
                  encircled with intricate patterns around the letter “A,”
                  symbolizes a gateway to sacred serenity. Its name, derived
                  from Sanskrit meaning “letter” or “essence,” honors the
                  written word as a vessel of knowledge and devotion.
                </p>
                <p
                  className={`leading-[180%] tracking-[0.5px] text-white/60 text-center transition-all duration-300 `}
                >
                  At the resort’s entrance, the Ganesha statue welcomes guests
                  as the guardian of learning, prosperity, and new beginnings.
                  Like ink flowing across palm-leaf manuscripts, every guest
                  writes their own story at Aksari Resort, a place where love,
                  healing, and discovery unfold gracefully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
