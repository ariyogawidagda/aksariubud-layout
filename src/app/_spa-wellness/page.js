import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  const rooms = [
    {
      name: "Svaha Spa Bisma",
      image: "/spa.webp",
      desc: "Rooted in centuries of healing wisdom, this transformative experience invites you to personalize your journey toward renewal. At Svaha Spa Bisma, nestled within the heart of Ubud, allow us to guide you to the treatment that speaks to your spirit. Embrace serenity. Embrace tradition. Embrace yourself.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "Floating Sound Healing",
      image: "/sound-healing.webp",
      desc: "Floating gently upon the water of our infinity pool, you return to nature’s embrace. Guided by the resonance of sound vibrations, this ancient Balinese ritual transcends time, restoring harmony to mind, body, and soul through a healing symphony of stillness and sound.",
      link: "/rooms/suite-room",
    },
    {
      name: "Yoga",
      image: "/yoga.webp",
      desc: "One of Bali’s most timeless wellness practices unfolds here, where yoga becomes more than movement, it is a spiritual journey rooted in ancient Balinese philosophy. Overlooking the serene Ubud forest, each session invites you to transcend the physical and rediscover harmony between body, soul, and spirit.",
      link: "/rooms/family-villa",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#3C5160]">
        {/* HERO SECTION */}
        <section className="relative h-[85vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-[80px] container text-center px-4">
            <h1 className="font-['Playfair_Display'] text-[40px] leading-[1.2] tracking-wide text-white/90 max-w-3xl mx-auto">
              Spa and Wellness at Kaamala Resort
            </h1>
            <hr className="mx-auto my-6 h-px w-12 bg-gradient-to-r from-[#D4AF37] to-[#B5963F]" />
          </div>
        </section>

        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[15px] leading-[180%] max-w-2xl mx-auto">
              For generations, Bali has been a sanctuary of wellness, where
              ancient healing traditions continue to flourish. Our spa in Ubud
              at Kaamala Resort honors this legacy with serenity.
            </p>
          </div>
        </section>

        {/* FILTER NAV */}
        <section className="py-[80px]">
          <div className="container">
            <ul className="flex flex-wrap justify-center gap-6 border-b border-white/20 pb-5 text-sm tracking-wide">
              {["Svaha Spa Bisma", "Floating Sound Healing", "Yoga"].map(
                (item, i) => (
                  <li key={i}>
                    <button className="text-white/80 text-[15px] pb-2 border-b-2 border-transparent hover:border-white transition-all">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>

            {/* GRID SPA CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[60px]">
              {rooms.map((room, idx) => (
                <div key={idx} className="flex flex-col  group">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  <div className="flex flex-col flex-grow p-6 shadow-md">
                    <h3 className=" text-[22px] leading-[120%] tracking-[0.5px] mb-4 text-white/80">
                      {room.name}
                    </h3>
                    <p className="text-white/60 leading-[180%] text-sm flex-grow mb-4">
                      {room.desc}
                    </p>
                    <a
                      href={room.link}
                      className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition"
                    >
                      Discover More
                      <img
                        src="/arrow.png"
                        loading="lazy"
                        alt="arrow"
                        className="w-[22px] h-auto"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
