"use client";
import { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaStory() {
  const [activeTab, setActiveTab] = useState("morning");

  const tabs = [
    { id: "morning", label: "Morning Rituals" },
    { id: "midday", label: "Midday Rituals" },
    { id: "evening", label: "End of The Day Rituals" },
  ];

  const content = {
    morning: [
      {
        title: "The Offering of Gratitude",
        desc: "Begin your day the Balinese way with canang sari and guided walk.",
      },
      {
        title: "Lotus Flow Pilates",
        desc: "Reconnect with yourself through in-room Pilates with affirmations.",
      },
      {
        title: "The Water of Life x TERRA",
        desc: "Mindful pour from TERRA filter, reducing waste and honoring waters.",
      },
      {
        title: "Lotus Infusion Station",
        desc: "Create your own refreshing lotus-infused drink.",
      },
    ],
    midday: [
      {
        title: "Lotus-Inspired Welcome",
        desc: "Hand cleanse, bamboo music, and aroma mist on arrival.",
      },
      {
        title: "A Sacred Refresh",
        desc: "Chilled aromatic towel wrapped with lotus petal for relaxation.",
      },
      {
        title: "Farewell Ritual",
        desc: "Lotus bracelet or leather keychain blessed for safe return.",
      },
    ],
    evening: [
      {
        title: "Lotus Turndown",
        desc: "Fragrance, gratitude cards, and ornaments for restful night.",
      },
      {
        title: "Sacred Silence",
        desc: "At 9 PM, one minute of stillness to reconnect with spirit.",
      },
      {
        title: "Lotus Lights",
        desc: "Twilight ceremony with floating lotus candles of gratitude.",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="bg-[#CC7506]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/bg-hero.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              The Story of Aksari Resort Ubud
            </h1>
          </div>
        </section>

        <div className="pt-[100px] max-w-[1024px] mx-auto text-center px-4">
          <p className="text-white/60  leading-[180%] tracking-[0.5px]">
            Our name, Aksari, honors the first syllable, the sacred ‘A’, as the
            guardian of all written wisdom, mirroring Bali’s deep reverence for
            knowledge, prayer, and art. Our emblem, an intricate pattern
            encircling this letter, forms a gateway to tranquility, nestled
            within the spiritual heart of Kenderan Village in Ubud. <br />
            This land, rich in sacred rituals and ancient wisdom, allows every
            guest to resonate with Bali’s spiritual energy. At our entrance, you
            are welcomed by Lord Ganesha, remover of obstacles and patron of new
            beginnings.
            <br />
            Here, just as ink flows across a lontar leaf, you are invited to
            write your own story, a journey of love, healing, and discovery,
            blessed from the very first step.
          </p>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-[1024px] mx-auto px-4">
          {[
            {
              title: "Root",
              desc: "The essence of life. Kaamala stands deeply rooted in Balinese culture, embracing philosophy, rituals, and timeless traditions.",
            },
            {
              title: "Stem",
              desc: "A foundation that nurtures growth. Just as the lotus thrives, Kaamala translates its virtues into genuine hospitality.",
            },
            {
              title: "Petals",
              desc: "The beauty experienced by the senses. From dining to wellness and romance, offerings unfold like petals.",
            },
            {
              title: "Water",
              desc: "The source of life and renewal. In harmony with nature, Kaamala sustains and gives back to the world.",
            },
            {
              title: "Soil – The 8 Mantras Foundation",
              desc: "The fertile ground of Kaamala is our 8 Mantras, guiding principles that anchor our vision, inspire our creativity, and nurture authenticity in everything we do",
            },
            {
              title: "Leaves – Community Support",
              desc: "The leaves that surround and protect the bloom represent our people and partners. Kaamala flourishes by uplifting the community and creating shared prosperity.",
            },
          ].map((item, idx) => (
            <div key={idx} className=" p-6 shadow-md space-y-4">
              <h3 className="text-white/80 tracking-[0.5px] leading-[180%] text-[22px] ">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-[1024px] mx-auto text-center px-4">
          <p className="text-white/60  leading-[180%]">
            From the five lotus pillars of Kaamala’s commitment, your journey
            unfolds as a narrative penned by the soul itself... You are invited
            to savor the essence of every moment, discover deeper meaning in
            togetherness, and let love flourish as you journey forward.
          </p>
        </div> */}

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              Aksari is More Than Special
            </h2>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
              <div className="relative">
                <img
                  src="/aboutpage/sp-1.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                    Riverside Room Type:
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/60">
                    Relax to the gentle murmur of the river, surrounded by an
                    inspiring natural sanctuary designed to deepen your love.
                    From your private balcony, a jacuzzi overlooks the water,
                    offering a perfect contrast of pampering. This is the
                    signature luxury of our Ubud honeymoon resort.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                    Aksari Signature Rituals
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/60">
                    Experience the quiet rhythm of Bali through our daily
                    rituals. Find your center with morning yoga in our bamboo
                    chapel, surrounded by a tranquil forest. <br />
                    Connect with the community by trying your hand at
                    traditional art and walking through local villages. Your day
                    concludes with a peaceful turndown, leaving you in a state
                    of calm restoration.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                    Open Air Jacuzzi with Forest View
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/60">
                    This serene contrast will soothe your spirit, the warm
                    embrace of your jacuzzi meets the crisp, untouched forest
                    air. While in that, the simple luxury of a hot tub
                    breakfast, with flaky croissants, fresh bread, and warm
                    dishes. Savor fresh tropical fruits as you unwind,
                    completing a moment of perfect, peaceful indulgence.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto mt-[80px]">
              <div className="space-y-6  max-lg:order-2">
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                    Eco-Friendly Resort with Multi-Experience Dining and
                    Wellness
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/60">
                    Stay with a conscience and become part of nature’s gentle
                    renewal at Aksari. Our commitment is woven into every
                    detail, from reducing plastic and recycling mindfully to
                    using only products that honor the earth. <br />
                    Here, you can enjoy refined luxury, from multi-experience
                    dining to serene wellness, knowing your presence supports a
                    more beautiful, sustainable Bali.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                    The Aksari Bamboo Chapel for an Intimate Wedding Venue
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/60">
                    Celebrate your vows in an intimate bamboo chapel overlooking
                    the serene beauty of Ubud. We offer carefully curated
                    wedding packages, tailored entirely to your vision, so every
                    detail is gracefully taken care of. Your wedding dream
                    unfolds in a personal setting, surrounded by nature's
                    perfect backdrop.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                    Unique Romantic Experiences
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/60">
                    Nurture your bond with a shared spiritual awakening, a
                    healing journey guided step-by-step for just the two of you.
                    Begin a morning wrapped in romance, sharing a delicious
                    breakfast in the warm sanctuary of your private jacuzzi.
                    These are the moments you will cherish forever.
                  </p>
                </div>
              </div>
              <div className="relative max-lg:order-1">
                <img
                  src="/aboutpage/sp-2.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
            {/* <div className="mt-[80px]">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
                <div className="relative ">
                  <img
                    src="/aboutus/about.webp"
                    alt="Kaamala Resort"
                    className="shadow-lg w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="space-y-6 max-lg:order-1">
                  <div className="flex gap-4 border-b border-white/20 pb-2">
                    {tabsContentt.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab1(tab.id)}
                        className={`pb-2 text-sm tracking-wide transition-all ${
                          activeTab1 === tab.id
                            ? "text-white border-b-2 border-white"
                            : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {tabContent[activeTab1].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                          {item.title}
                        </h3>
                        <p className="leading-[180%] tracking-[0.5px] text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* <section className="pb-[100px]  max-[560px]:pb-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              Kaamala Signature Rituals
            </h2>
            <div className="">
              <div className=" max-w-6xl mx-auto">
                <div className=" space-y-6  grid grid-cols-12 ">
                  <div className="flex justify-center flex-col gap-4 col-span-4 max-md:col-span-12 max-md:border-b-[1px] max-md:border-white/20 max-md:pb-4 max-md:flex-row">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-2 text-sm tracking-wide transition-all cursor-pointer ${
                          activeTab === tab.id
                            ? "text-white"
                            : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-6 border-l border-white/10 pl-10 col-span-8 max-md:col-span-12 max-md:border-none max-md:pl-0">
                    {content[activeTab].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                          {item.title}
                        </h3>
                        <p className="leading-[180%] tracking-[0.5px] text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* HOW WE MAKE BEYOND ORDINARY */}
        <section className="pb-[100px] max-[560px]:pb-[80px]  ">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize text-white/80 leading-[120%] text-center mb-[60px] max-[560px]:mb-[20px]">
              We Promise Your Stay in Ubud is Beyond Ordinary
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-[1024px] mx-auto">
              <div className="bg-transparent shadow-md p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  WeIniVie Rewards for Stay with More Benefits
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/60">
                  Through the WeIniVie Rewards program, we show our appreciation
                  for your loyalty by offering exclusive privileges that elevate
                  every stay and make each visit even more rewarding.
                </p>
              </div>
              <div className="bg-transparent  shadow-md p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  Luxury, Unfolded in Every Stay
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/60">
                  Discover a new definition of luxury, one shaped by intimacy
                  and personal consistency. Expect to be pampered with
                  perfection in every moment
                </p>
              </div>
              <div className="bg-transparent  shadow-md p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  Discover the Journey of Renewal
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/60">
                  Rooted in our symbol as a gateway to sacred tranquility, this
                  retreat is designed for your joint renewal. Here, every ritual
                  is a shared journey toward calm and balance, where obstacles
                  are lifted so you may reconnect deeply with each other and
                  within yourselves.
                </p>
              </div>
              <div className="bg-transparent shadow-lg p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  Stay with Impact
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/60">
                  Sustainability is woven into our spiritual essence, a deep
                  respect for the land that nurtures your stay. Every moment you
                  share here gently contributes to preserving Ubud's beauty,
                  turning your experience into a quiet promise for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  Stories of Warmth, Care, and Connection */}
        <section className="pb-[100px]  max-[560px]:pb-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              Stories of Warmth, Care, and Connection
            </h2>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
              <div className="flex justify-center flex-col space-y-4 max-lg:order-2">
                <p className="text-white/60  leading-[180%]">
                  Upon the sacred land of the Gods, where harmony binds all
                  beings, Kaamala Resort draws its breath. Guided by Sukerta
                  Tata Pawongan, the living essence of Tri Hita Karana, we
                  cherish the noble art of treating every soul as kin, every
                  encounter as a bond of warmth.
                </p>
                <p className="text-white/60  leading-[180%]">
                  To us, our guests are not mere visitors but kindred spirits,
                  honored, cherished, and ever at the heart of our every deed.
                  With the gentle grace of Balinese hospitality, our devoted
                  staffs attend to you with care so personal, it feels as though
                  the world itself has conspired to make you feel treasured.
                </p>
              </div>
              <div className="relative max-lg:order-1">
                <img
                  src="/aboutpage/bg-sc3.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
