"use client";

import { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Immersive Experience at Kaamala Resort
            </h1>
          </div>
        </section>

        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <div className="mb-[80px]">
              <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                Provide a paragraph for beginning about Ubud, whats the nature
                beauty of there, whats the natural destination in Ubud? Mention
                if Kaamala wraps up to invite guest to experience the nature
                beauty destination in Ubud and make it special for guest journey
                experience in Ubud. <br />
                Ubud has long been revered as a sanctuary of healing, not only
                for its timeless traditions but also for its enchanting natural
                beauty in the highlands. From cascading waterfalls and winding
                rivers to emerald forests alive with diverse wildlife, the
                landscape itself feels like a living poem. At Kaamala Resort &
                Spa Ubud, we invite you to embrace this harmony with nature and
                transform your journey into something truly extraordinary.
              </p>
            </div>

            <ul className="text-white/80 flex justify-center tracking-[0.5px] flex-wrap gap-[30px] pb-[20px] border-b-[1px] border-white/20 max-[768px]:text-center max-md:hidden">
              <li>
                <a href="#">Daily Guest Activities</a>
              </li>
              <li>
                <a href="#">Wellness Exploration</a>
              </li>
              <li>
                <a href="#">Nature Exploration</a>
              </li>
              <li>
                <a href="#">Cultural Exploration</a>
              </li>
              {/* <li className="relative">
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
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Bali Island Tour (Half Day or Full Day Tour)
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Customized Tour
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Bali Twin Lake Jungle Trekking & Canoeing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Silver Making
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Village Trekking
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Ancient Temple Tour
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Cooking Class
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Meet the Healer
                    </a>
                  </div>
                )}
              </li> */}
            </ul>
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#3C5160] border-t border-white/20 shadow-lg">
              <div className="relative">
                <select
                  defaultValue=""
                  onChange={(e) => {
                    const target = document.querySelector(`#${e.target.value}`);
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 bg-[#3C5160] tracking-[0.5px] w-full py-4 px-4 appearance-none"
                >
                  <option value="" disabled hidden>
                    Explore Experience...
                  </option>
                  <option value="daily">Daily Guest Activities</option>
                  <option value="wellness">Wellness Exploration</option>
                  <option value="nature">Nature Exploration</option>
                  <option value="cultural">Cultural Exploration</option>
                </select>

                {/* Chevron Icon */}
                <svg
                  className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none"
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
              </div>
            </div>

            <div className="mt-[40px]">
              <div className="space-y-12 max-sm:space-y-0">
                <div id="daily" className="space-y-6">
                  <div className="relative">
                    <img
                      src="/signature/infinity-pool.webp"
                      alt=""
                      className="w-full max-h-[650px] max-sm:h-[280px] object-cover"
                    />
                    <div className="absolute bg-black/40 inset-0" />
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-[28px]  tracking-[0.5px] capitalize leading-[120%] text-white/80">
                      Daily Guest Activities
                    </h2>
                    <p className="text-white/60 tracking-[1.2px] leading-[180%] flex-grow">
                      At Kaamala Resort, each day brings a new way to immerse
                      yourself in culture, creativity, and connection. From live
                      cooking shows and Balinese culinary traditions to mocktail
                      and sushi classes, our curated activities are designed to
                      delight the senses. Discover the art of towel folding,
                      craft sacred Canang Sari offerings, or embrace the beauty
                      of language through our “Learn in Bahasa” session. Every
                      experience is thoughtfully created to enrich your journey.{" "}
                      <br />
                      Each day at Kaamala Resort & Spa is an invitation to rouse
                      the senses and walk closer with the soul of Bali. From the
                      artistry of noble feasts to the reverent crafting of
                      sacred offerings, every moment is a verse in a living
                      poem. Thus is woven a journey of culture, beauty, and
                      devotion, where thou art both guest and muse.
                    </p>
                  </div>
                </div>
                <div className="hidden max-sm:block border-t border-white/10 my-12"></div>
                <section id="wellness" className="space-y-6 max-sm:space-y-8">
                  <h2 className="text-[28px] tracking-[0.5px] leading-[180%] text-white/80">
                    Wellness Exploration
                  </h2>
                  <div className="space-y-12">
                    <div className="grid lg:grid-cols-2 gap-12 max-sm:gap-6 items-center">
                      <div className="relative">
                        <img
                          src="/experiences/wellness-yoga.webp"
                          alt=""
                          className="w-full h-[350px] max-sm:h-[280px] object-cover "
                        />
                        <div className="absolute inset-0 bg-black/40 " />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-[22px] text-white/80 tracking-[0.5px] leading-[180%]">
                          Wellness Yoga Class
                        </h3>
                        <p className="text-white/60  leading-[180%]">
                          Unfolds in a serene venue embraced by the lush beauty
                          of Ubud’s forest, offering an atmosphere of calm and
                          renewal. Guided by certified instructors, each session
                          takes you on a curated journey through Yoga Pilates,
                          Vinyasa, and Hatha, designed to restore balance of
                          mind and body.
                        </p>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-sm:gap-6 ">
                      <div className="space-y-4 order-2 lg:order-1">
                        <h3 className="text-[22px] text-white/80 tracking-[0.5px] leading-[180%]">
                          Spiritual Awakening Journey
                        </h3>
                        <p className="text-white/60 leading-[180%]">
                          This journey is a seamless blend of sacred rituals,
                          mindful movement, and restorative treatments, each
                          crafted to bring balance and renewal. Guided by the
                          wisdom of a Balinese healer, it unfolds as an intimate
                          experience designed to harmonize body, mind, and
                          spirit.
                        </p>
                      </div>
                      <div className="relative order-1 lg:order-2">
                        <img
                          src="/experiences/spritual.webp"
                          alt=""
                          className="w-full h-[350px] max-sm:h-[280px] object-cover "
                        />
                        <div className="absolute inset-0 bg-black/40 " />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="hidden max-sm:block border-t border-white/10 my-12"></div>
                <section id="nature" className="space-y-6 max-sm:space-y-8">
                  <h2 className="text-[28px] tracking-[0.5px] leading-[180%] text-white/80">
                    Nature Exploration
                  </h2>
                  <div className="space-y-12 ">
                    {/* Hero Item */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-sm:gap-6">
                      <div className="relative">
                        <img
                          src="/experiences/nature.webp"
                          alt=""
                          className="w-full h-[400px] max-sm:h-[280px] object-cover "
                        />
                        <div className="absolute inset-0 bg-black/40 " />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-[22px] text-white/80 tracking-[0.5px] leading-[180%]">
                          Private Sunrise Trekking
                        </h3>
                        <p className="text-white/60  leading-[180%]">
                          Begin thy day in gentle grace, where golden light
                          breaks upon the sacred hills. Let the hush of dawn,
                          the kiss of morning air, and nature’s quiet majesty
                          lead thee to a realm where the sun crowns the earth in
                          splendour.
                        </p>
                      </div>
                    </div>

                    {/* Grid Items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                      <div className="space-y-3 max-sm:space-y-6">
                        <div className="relative">
                          <img
                            src="/experiences/island-tour.webp"
                            alt=""
                            className="w-full h-[250px] max-sm:h-[280px] object-cover "
                          />
                          <div className="absolute inset-0 bg-black/40 " />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[20px] tracking-[0.5px] text-white/80 leading-[180%]">
                            Bali Island Tour (Half Day or Full Day Tour)
                          </h3>
                          <p className="text-white/60  leading-[180%]">
                            Unveil the beauty of Bali by walking hand in hand
                            with her natural wonders and the noble soul of her
                            people. Partake in the rhythm of daily life, where
                            earth, culture, and spirit entwine to weave a living
                            poem.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 max-sm:space-y-6">
                        <div className="relative">
                          <img
                            src="/experiences/custom.webp"
                            alt=""
                            className="w-full h-[250px] max-sm:h-[280px] object-cover "
                          />
                          <div className="absolute inset-0 bg-black/40 " />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[20px] tracking-[0.5px] text-white/80 leading-[180%]">
                            Customized Tour
                          </h3>
                          <p className="text-white/60  leading-[180%]">
                            Shape your own journey and uncover what is most rare
                            and wondrous in Bali. Discover her beauty through
                            the whisper of forests and the timeless grace of her
                            people, where nature and culture entwine as a living
                            sonnet.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 max-sm:space-y-6">
                        <div className="relative">
                          <img
                            src="/experiences/nature.webp"
                            alt=""
                            className="w-full h-[250px] max-sm:h-[280px] object-cover "
                          />
                          <div className="absolute inset-0 bg-black/40 " />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[20px] tracking-[0.5px] text-white/80 leading-[180%]">
                            Bali Twin Lake Jungle Trekking & Canoeing
                          </h3>
                          <p className="text-white/60  leading-[180%]">
                            Trek through lush rainforest trails to breathtaking
                            lake views, then glide peacefully across the water
                            on a traditional canoe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="hidden max-sm:block border-t border-white/10 my-12"></div>
                <section id="cultural" className="space-y-6 max-sm:space-y-8">
                  <h2 className="text-[28px] tracking-[0.5px] leading-[180%] text-white/80">
                    Cultural Exploration
                  </h2>
                  <div className="space-y-12 ">
                    {/* Hero Item */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-sm:gap-6">
                      <div className="relative">
                        <img
                          src="/experiences/meet-healer.webp"
                          alt=""
                          className="w-full h-[400px] max-sm:h-[280px] object-cover "
                        />
                        <div className="absolute inset-0 bg-black/40 " />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-[22px] text-white/80 tracking-[0.5px] leading-[180%]">
                          Silver Making
                        </h3>
                        <p className="text-white/60 leading-[170%]">
                          Enter the timeless craft of silver, where fire and
                          hand unite in artistry. Guided by a master artisan,
                          thou shalt shape beauty from raw metal, and carry home
                          a treasure wrought by thine own touch.
                        </p>
                      </div>
                    </div>

                    {/* Grid Items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                      <div className="space-y-3 max-sm:space-y-6">
                        <div className="relative">
                          <img
                            src="/experiences/meet-healer.webp"
                            alt=""
                            className="w-full h-[250px] max-sm:h-[280px] object-cover "
                          />
                          <div className="absolute inset-0 bg-black/40 " />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[20px] tracking-[0.5px] text-white/80 leading-[180%]">
                            Village Trekking
                          </h3>
                          <p className="text-white/60 leading-[180%]">
                            Wander softly through the village lanes, where life
                            flows gently as the paddy breeze. Greet the folk,
                            walk the emerald fields, and let each step weave
                            thee closer to the soul of Bali.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 max-sm:space-y-6">
                        <div className="relative">
                          <img
                            src="/experiences/meet-healer.webp"
                            alt=""
                            className="w-full h-[250px] max-sm:h-[280px] object-cover "
                          />
                          <div className="absolute inset-0 bg-black/40 " />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[20px] tracking-[0.5px] text-white/80 leading-[180%]">
                            Ancient Temple Tour
                          </h3>
                          <p className="text-white/60  leading-[180%]">
                            Traverse the hallowed path of Bali’s spirit, where
                            the cliffs of Uluwatu whisper to the sea, Tanah Lot
                            rises as a sentinel of the tides, and Taman Ayun
                            blooms in regal grace—a journey through temples
                            where divinity and beauty entwine.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 max-sm:space-y-6">
                        <div className="relative">
                          <img
                            src="/experiences/meet-healer.webp"
                            alt=""
                            className="w-full h-[250px] max-sm:h-[280px] object-cover "
                          />
                          <div className="absolute inset-0 bg-black/40 " />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[20px] tracking-[0.5px] text-white/80 leading-[180%]">
                            Meet the Healer
                          </h3>
                          <p className="text-white/60  leading-[180%]">
                            In the hush of intimacy, thou art welcomed into
                            counsel with a Balinese healer, keeper of ancient
                            wisdom. Thereafter unfolds a sacred rite, where
                            tradition breathes through touch and chant, guiding
                            thee into stillness. Thus is revealed a restorative
                            journey, where body, mind, and spirit are bound once
                            more in harmony’s eternal embrace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
