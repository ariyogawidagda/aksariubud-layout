import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  const rooms = [
    {
      name: "Habitat Bistro",
      image: "/habitat.webp",
      desc: "Savor an exquisite journey of Italian fusion cuisine at Habitat Bistro, set against stunning emerald forest vistas at Ubud luxury resort. Pair each culinary creation with premium wines and crafted cocktails.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "Shichirin Ubud",
      image: "/shichirin.webp",
      desc: "Shichirin, an ancient Japanese cooking tradition, inspires a dining experience that transcends time. Rooted in heritage yet elevated with modern refinement, every dish is a tribute to Japan’s rich culinary artistry, a true celebration of flavor crafted with heart.",
      link: "/rooms/suite-room",
    },
    {
      name: "Seven Paintings Ubud",
      image: "/facilities1.webp",
      desc: "An extraordinary culinary with dinemation experience at Kaamala Resort Ubud redefines fine dining as a luxurious journey where gastronomy becomes art. Inspired by Seven Paintings, a tribute to seven legendary world artists, each course unfolds as a masterpiece of flavor and creativity",
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
              Dining at Kaamala Resort
            </h1>
          </div>
        </section>

        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Surrounded by the breathtaking beauty of Ubud, every dining
              experience at Kaamala Resort & Spa is accompanied by gentle
              breezes and birdsong, creating an atmosphere of pure serenity.
              Each ingredient is hand-picked and harvested by local farmers,
              ensuring only the freshest and most authentic flavors are brought
              to your table.
            </p>
          </div>
        </section>

        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20">
              <li>
                <a href="#">Habitat Bistro</a>
              </li>
              <li>
                <a href="#">Shichirin Ubud</a>
              </li>
              <li>
                <a href="#">Seven Paintings Ubud</a>
              </li>
            </ul>
            <div>
              <div className="grid grid-cols-12 mt-[40px] gap-[60px] max-[1024px]:gap-[20px]">
                <div className="col-span-8 max-[1204px]:col-span-12 max-[1024px]:mb-[30px] ">
                  <div className="sticky top-[100px]">
                    <div className="relative">
                      <img
                        src="/habitat.webp"
                        alt=""
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Habitat Bistro
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Savor an exquisite journey of Italian fusion cuisine at
                        Habitat Bistro, set against stunning emerald forest
                        vistas at Ubud luxury resort. Pair each culinary
                        creation with premium wines and crafted cocktails.
                      </p>
                      <a
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
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 space-y-15 max-[1204px]:col-span-12">
                  <div>
                    <div className="relative">
                      <img
                        src="/shichirin.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Shichirin Ubud
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Shichirin, an ancient Japanese cooking tradition,
                        inspires a dining experience that transcends time.
                        Rooted in heritage yet elevated with modern refinement,
                        every dish is a tribute to Japan’s rich culinary
                        artistry, a true celebration of flavor crafted with
                        heart.
                      </p>
                      <a
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
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/facilities1.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Seven Paintings Ubud
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        An extraordinary culinary with dinemation experience at
                        Kaamala Resort Ubud redefines fine dining as a luxurious
                        journey where gastronomy becomes art. Inspired by Seven
                        Paintings, a tribute to seven legendary world artists,
                        each course unfolds as a masterpiece of flavor and
                        creativity
                      </p>
                      <a
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
                      </a>
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
