"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
export default function KaamalaDinings() {
  const [open, setOpen] = useState(false);
  const rooms = [
    {
      name: "Infinity Pool",
      image: "/habitat.webp",
      desc: "Overlooking the lush jungle and sacred river valley, the infinity pool at Kaamala is a tranquil escape where water meets sky. Guests can unwind in total serenity while soaking in panoramic views that reflect the timeless beauty of Ubud’s greenery.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "EV Charging Station",
      image: "/shichirin.webp",
      desc: "Thoughtfully integrated into the resort, the EV charging station empowers sustainable travel without compromise. Guests driving electric vehicles can explore Bali with ease, knowing their journey is both seamless and environmentally conscious.",
      link: "/rooms/suite-room",
    },
    {
      name: "Shuttle Service",
      image: "/facilities1.webp",
      desc: "Our complimentary shuttle service brings Ubud’s cultural heart closer to you, from exploring local art markets to arriving at a romantic dinner. Designed for comfort and convenience, it ensures every journey is as effortless as your stay.",
      link: "/rooms/family-villa",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Signature Facilities for Elevated Stays
            </h1>
          </div>
        </section>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <div className="mb-[80px]">
              <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                Designed to enhance every aspect of your stay, Kaamala Resort's
                signature facilities offer more than just convenience, they
                reflect a thoughtful balance of luxury, sustainability, and
                soul. From serene spaces that invite connection to seamless
                services that honor your time, each facility is crafted to
                elevate your Ubud experience in effortless grace.
              </p>
            </div>
            <div className="">
              <div>
                <ul className="text-white/80 flex justify-center tracking-[0.5px] flex-wrap gap-[30px] pb-[20px] border-b border-white/20 max-[768px]:justify-start px-4 max-md:hidden">
                  <li>
                    <a href="#">Infinity Pool</a>
                  </li>
                  <li>
                    <a href="#">EV Charging Station</a>
                  </li>
                  <li>
                    <a href="#">Shuttle Service</a>
                  </li>
                  <li>
                    <a href="#">180° Jungle View</a>
                  </li>
                  <li>
                    <a href="#">Gym</a>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => setOpen(!open)}
                      className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                      More
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {open && (
                      <div className="absolute left-0 mt-2 min-w-[160px] bg-white text-black/80 rounded-sm shadow-lg z-[999]">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-black/10"
                        >
                          Yoga Chapel
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-black/10"
                        >
                          Hammock
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-black/10"
                        >
                          Sunset Spot
                        </a>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              <div className="border-b border-white/20 pb-4 md:border-none">
                <select className=" text-white/80  bg-[#3C5160] tracking-[0.5px] w-full md:hidden ">
                  <option className="text-white/80">Infinity Pool</option>
                  <option className="text-white/80">EV Charging Station</option>
                  <option className="text-white/80">Shuttle Service</option>
                  <option className="text-white/80">180° Jungle View</option>
                  <option className="text-white/80">Gym</option>
                  <option className="text-white/80">Yoga Chapel</option>
                  <option className="text-white/80">Hammock</option>
                  <option className="text-white/80">Sunset Spot</option>
                </select>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-12 mt-[40px]  gap-[60px] max-[1024px]:gap-[20px]">
                <div className="col-span-7 max-[1204px]:col-span-12 max-[1024px]:mb-[30px]">
                  <div className="sticky top-[100px]">
                    <div className="relative">
                      <img
                        src="/signature/infinity-pool.webp"
                        alt=""
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Infinity Pool
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Overlooking the lush jungle and sacred river valley, the
                        infinity pool at Kaamala is a tranquil escape where
                        water meets sky. Guests can unwind in total serenity
                        while soaking in panoramic views that reflect the
                        timeless beauty of Ubud’s greenery.
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-5 space-y-15 max-[1024px]:col-span-12">
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/ev-charger.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        EV Charging Station
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Thoughtfully integrated into the resort, the EV charging
                        station empowers sustainable travel without compromise.
                        Guests driving electric vehicles can explore Bali with
                        ease, knowing their journey is both seamless and
                        environmentally conscious.
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Shuttle Service
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Our complimentary shuttle service brings Ubud’s cultural
                        heart closer to you, from exploring local art markets to
                        arriving at a romantic dinner. Designed for comfort and
                        convenience, it ensures every journey is as effortless
                        as your stay.
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/jungleview.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        180° Jungle View
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Our complimentary shuttle service brings Ubud’s cultural
                        heart closer to you, from exploring local art markets to
                        arriving at a romantic dinner. Designed for comfort and
                        convenience, it ensures every journey is as effortless
                        as your stay.
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/gym.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Gym
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        At Kaamala, wellness is seamlessly woven into the very
                        essence of luxury. A healthy lifestyle is the new
                        definition of indulgence, and here, it becomes
                        effortless to embrace. <br />
                        Our modern gym, thoughtfully designed and framed by
                        calming views, transforms every workout into a refined
                        ritual. Each moment is an invitation to restore balance,
                        renew vitality, and nurture both body and mind
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/chapel.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Yoga Chapel
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Embracing the essence of wellness and balance, Kaamala
                        unveils a dedicated yoga chapel crafted to nurture
                        harmony and serenity. Set against Ubud’s lush greenery,
                        this sacred sanctuary offers an elevated space for
                        mindfulness, reflection, and renewal. <br /> Guided by
                        professional instructors, each practice becomes a
                        refined journey into presence and inner calm. Surrounded
                        by tranquil beauty and panoramic views, yoga here
                        transcends the ordinary, evolving into a soul-enriching
                        experience of luxury and peace
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/hammock.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Hammock
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Amidst Kaamala’s tranquil landscape, the hammock becomes
                        a sanctuary of comfort and calm. Suspended with care, it
                        invites you to drift gently as your gaze lingers on the
                        endless jungle horizon. <br /> From this elevated
                        cocoon, time slows to a graceful stillness, wrapping you
                        in relaxation and peace. Here, Ubud’s natural beauty is
                        not just admired, it is savored in the quiet rhythm of
                        serenity.
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/sunset-point.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Sunset Spot
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Kaamala reveals a rare treasure in Ubud, an intimate
                        sanctuary where sunsets unfold in breathtaking beauty.
                        From this enchanting vantage point, the sky blushes in
                        warm hues, painting memories upon the canvas of the
                        jungle. <br /> As the sun gently descends, the air is
                        filled with a lingering romance, perfect for quiet
                        reflection or tender connection. Here, sunsets are not
                        just seen, they are felt, a rare spectacle of love and
                        beauty in the heart of Ubud
                      </p>
                      {/* <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
