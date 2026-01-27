import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  const rooms = [
    {
      name: "Svaha Spa Kenderan",
      image: "/spa.webp",
      desc: "Our philosophy is written in an ancient Balinese script, where true wellness unites the body and spirit. We translate this wisdom through gentle massage, balancing acupressure, and aromatic essences, weaving a serene, restorative ritual for your entire being.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "Floating Sound Healing",
      image: "/sound-healing.webp",
      desc: "Floating Sound Healing is the heart of our Dwi Vayu program, using resonant singing bowls to harmonize your energy. This sacred ritual occurs where water meets air, during the quiet moment when the Ubud sunset filters through the trees.",
      link: "/rooms/suite-room",
    },
    {
      name: "Yoga",
      image: "/yoga.webp",
      desc: "Our professional instructors will guide you through yoga rooted in the Tri Hita Karana philosophy of balance and harmony. Take your place in our bamboo-crafted venue, surrounded by the lush forest trees.",
      link: "/rooms/family-villa",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#DE9230]">
        {/* HERO SECTION */}
        <section className="relative h-[85vh] flex items-end justify-center bg-[url('/bg-hero.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-[80px] container text-center px-4">
            <h1 className="font-['Playfair_Display'] text-[40px] leading-[1.2] tracking-wide text-white/90 max-w-3xl mx-auto">
              Rejuvenate with Spa and Wellness at Aksari Resort
            </h1>
            <hr className="mx-auto my-6 h-px w-12 bg-gradient-to-r from-[#D4AF37] to-[#B5963F]" />
          </div>
        </section>

        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[15px] leading-[180%] max-w-2xl mx-auto">
              At Aksari Resort, wellness and spa in Ubud is a sacred journey,
              guided by the hands of our healers and the wisdom of Bali. Each
              therapist is a guardian of the Bali tradition, ensuring every
              ritual is authentic and profound. <br /> We offer curated packages
              that are pathways to self-renewal. Each therapy is a gift from
              Earth, designed to harmonize your energy and restore spiritual
              clarity.
            </p>
          </div>
        </section>

        {/* FILTER NAV */}
        <section className="py-[80px]">
          <div className="container">
            <ul className="flex flex-wrap justify-center gap-6 border-b border-white/20 pb-5 text-sm tracking-wide">
              {["Svaha Spa Kenderan", "Floating Sound Healing", "Yoga"].map(
                (item, i) => (
                  <li key={i}>
                    <button className="text-white/80 text-[15px] pb-2 border-b-2 border-transparent hover:border-white transition-all">
                      {item}
                    </button>
                  </li>
                ),
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
