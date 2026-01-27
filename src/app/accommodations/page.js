import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaAccomodation() {
  const rooms = [
    {
      name: "One Bedroom Villa with Private Pool",
      image: "/rooms/one-bedroom-villa.webp",
      desc: "Discover ultimate privacy within our walled garden paradise, a personal villa where your private pool forms a perfect oasis for sun-drenched afternoons and starlit dips. The airy bedroom opens directly to the water's edge, blurring the line between inner sanctuary and tropical haven to create a seamless seclusion and pleasure.",
      link: "#",
    },
    {
      name: "Grand 1 Bedroom Private Pool Villa with River View",
      image: "/rooms/grand-one-bedroom-river.webp",
      desc: "Perched within Ubud's lush jungle, here the symphony of nature is your constant companion. The elegant living space is designed for moments of awe, and the private infinity pool appears to merge with the flowing river valley, a living masterpiece of nature presented exclusively for you..",
      link: "#",
    },
    {
      name: "Grand 1 Bedroom Villa with Private Pool ",
      image: "/rooms/grand-one-bedroom-pool.webp",
      desc: "Experience a living space at its most perfected expression, a grand sanctuary featuring an expansive living area, a stately bedroom, and a private pool embraced by a lush tropical garden. Crafted for extended moments of ease and intimate gatherings, every refined detail speaks softly of exceptional elegance.",
      link: "#",
    },
    {
      name: "Grand 1 Bedroom Private Pool Villa with Riverside View",
      image: "/rooms/grand-one-bedroom-pool-river.webp",
      desc: "Experience peerless grandeur in our most expansive villa, a palatial sanctuary of ultimate privacy, refined living spaces, and uninterrupted views over the verdant valley.",
      link: "#",
    },
    {
      name: "Grand 2 Bedroom Private Pool Villa with River View",
      image: "/rooms/grand-two-river.webp",
      desc: "Crafted for shared journeys, this villa is a family estate in miniature, where two luxurious suites flank a magnificent living pavilion and a vast pool dancing with reflections of the sky. It is a destination of boundless grace, promising laughter, bonding, and unforgettable moments.",
      link: "#",
    },
  ];
  const roomsv2 = [
    {
      name: "Aksari Suite",
      image: "/rooms/aksari-suite.webp",
      desc: "This suite is a celebration of understated luxury, where a spacious living area flows seamlessly onto a private balcony. Amidst curated artisan furnishings and soft textiles, you are invited to lounge and surrender to the peaceful ambiance of your own personal haven.",
      link: "#",
    },
    {
      name: "Grand Aksari Suite",
      image: "/rooms/grand-aksari-suite.webp",
      desc: "This suite is an ode to grandeur, a private gallery where modern minimalist architecture meets the Balinese soul. It offers a generous lounge and breathtaking balcony over the Ubud jungle, define an experience of curated elegance..",
      link: "#",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#DE9230]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/bg-hero.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Aksari Resort Accommodations
            </h1>
          </div>
        </section>
        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Aksari reveals 32 refined sanctuaries, from forest-facing suites
              to one-bedroom private pool villas and a secluded Presidential
              Villa. Each residence is generously proportioned and quietly
              composed, designed for unhurried living and deep repose, where the
              essence of a luxury villa Ubud experience unfolds amid lush and
              untouched nature.
            </p>
          </div>
        </section>
        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20">
              <li>
                <a href="#">Our Suite Room</a>
              </li>
              <li>
                <a href="#">
                  Our Luxury Villa with Private Pool & Stunning View
                </a>
              </li>
            </ul>
            <div>
              <div className="my-[60px] space-y-4">
                <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 ">
                  Our Suite Room
                </h2>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                  Discover effortless comfort in our suite collection, where
                  generous living spaces, private balconies, and handcrafted
                  details come together to create a refined retreat overlooking
                  the whispering jungle.
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
                  Our Luxury Villa with Private Pool & Stunning View
                </h2>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                  Elevate your journey in our premier villas, where architecture
                  seamlessly merges with nature, and each private pool unveils
                  mesmerizing views over Ubud’s river gorges and endless jungle.
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
