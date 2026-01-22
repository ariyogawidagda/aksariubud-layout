import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaAccomodation() {
  const rooms = [
    {
      name: "One Bedroom Villa with Private Pool",
      image: "/rooms/one-bedroom.webp",
      desc: "Kaamala’s One Bedroom Villa with Private Pool embraces natural elegance with rich wood, textured stone, and tropical touches, opening to a lush jungle view that invites stillness and connection, a perfect serene escape for two.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "Grand 1 Bedroom Private Pool Villa with Ricefield View",
      image: "/rooms/grand-one.webp",
      desc: "Framed by the golden shimmer of Ubud’s iconic rice fields, this villa is a tranquil haven infused with tropical Balinese charm, offering a private pool, open-air elegance, and an intimate escape into the gentle rhythm of nature.",
      link: "/rooms/suite-room",
    },
    {
      name: "Grand 2 Bedroom Private Pool Villa with Ricefield View",
      image: "/rooms/grand-two.webp",
      desc: "Embraced by the gentle sway of emerald rice paddies, this tropical haven invites families or groups into a soulful escape where open-air living and Balinese elegance turn every moment into a shared memory",
      link: "/rooms/family-villa",
    },
    {
      name: "Presidential 2 Bedroom Private Pool Villa with Ricefield View",
      image: "/rooms/presidential.webp",
      desc: "A pinnacle of tropical elegance, this sanctuary blends Balinese design with modern indulgence, featuring panoramic rice field views, a ricefield view jacuzzi, and a private pool for soulful gatherings in nature’s embrace.",
      link: "/rooms/family-villa",
    },
  ];
  const roomsv2 = [
    {
      name: "Suite Forest View",
      image: "/rooms/suite-forest.webp",
      desc: "Surrounded by emerald canopies, this suite offers calming forest views and a tranquil atmosphere that soothes the mind, with a forest view jacuzzi and romantic touches, perfect for couples seeking elegance in secluded beauty.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "Grand Suite with Forest View",
      image: "/rooms/grand-suite-forest.webp",
      desc: "An elevated jungle retreat where spacious interiors open to sweeping forest panoramas, and a forest view jacuzzi invites you to soak in the stillness, crafted for immersive relaxation, and an intimate connection.",
      link: "/rooms/suite-room",
    },
    {
      name: "The Bloom Continues: A Refined Retreat ",
      image: "/rooms/blooms.webp",
      desc: "Coming Soon",
      link: "/rooms/suite-room",
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
              Kaamala Resort Accommodation
            </h1>
          </div>
        </section>
        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Kaamala Resort is a hidden sanctuary in Ubud, offering 10
              distinctive room types that blend contemporary elegance with the
              poetic soul of Bali. Each thoughtfully crafted suite and luxury
              villa is surrounded by lush jungle or timeless rice field views,
              creating an immersive escape into serenity and sophistication.
            </p>
          </div>
        </section>
        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20">
              <li>
                <a href="#">Luxury Pool Villas</a>
              </li>
              <li>
                <a href="#">Suite Room</a>
              </li>
            </ul>
            <div>
              <div className="my-[60px] space-y-4">
                <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 ">
                  Our Luxury Pool Villas
                </h2>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                  Kaamala’s pool villas are designed for immersive relaxation,
                  each a secluded haven offering private pools, natural
                  textures, and panoramic views of Ubud’s iconic landscape.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-13 mt-[40px]">
                {rooms.map((room, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent flex flex-col shadow-md overflow-hidden "
                  >
                    {/* Image */}
                    <div className="h-[350px] max-md:h-[225px] overflow-hidden relative">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>

                    {/* Content */}
                    <div className="p-8 max-md:p-5 flex flex-col flex-grow">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        {room.name}
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        {room.desc}
                      </p>
                      <a
                        href={room.link}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/60 hover:text-white transition-colors"
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
                ))}
              </div>
            </div>
            <div>
              <div className="my-[60px] space-y-4">
                <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 ">
                  Our Suite Room
                </h2>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                  Kaamala’s Suite Room blends elegant design with serene forest
                  views, featuring a ricefield view jacuzzi and thoughtful
                  touches that invite calm and connection in a secluded setting.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-13 mt-[40px]">
                {roomsv2.map((room, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent flex flex-col shadow-md overflow-hidden "
                  >
                    {/* Image */}
                    <div className="h-[350px] max-md:h-[225px] overflow-hidden relative">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>

                    {/* Content */}
                    <div className="p-8 max-md:p-5 flex flex-col flex-grow">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        {room.name}
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        {room.desc}
                      </p>
                      <a
                        href={room.link}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/60 hover:text-white transition-colors"
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
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
