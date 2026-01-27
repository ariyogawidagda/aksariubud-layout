import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function KaamalaMantras() {
  const mantras = [
    {
      number: "01",
      title: "Empowering Local People",
      desc: "We grow with the people around us — hiring local talents, collaborating with local communities, and letting their spirit shape every guest experience.",
      img: "/mantras/1.webp",
    },
    {
      number: "02",
      title: "Respect Local Culture",
      desc: "Each brand lives in harmony with its location. We respect local values, adapt with intention, and honor the traditions that shape how we serve.",
      img: "/mantras/2.webp",
    },
    {
      number: "03",
      title: "Responsible to Mother Earth",
      desc: "Nature is not a resource — she’s a partner. We design in balance with the land and take real actions to protect and regenerate what we touch.",
      img: "/mantras/3.webp",
    },
    {
      number: "04",
      title: "Intentional Personalization",
      desc: "Every guest is seen, heard, and remembered — through thoughtful details that feel human and intentional.",
      img: "/mantras/4.webp",
    },
    {
      number: "05",
      title: "Technology Adaptation",
      desc: "Technology is a tool, not the hero. We apply tech to enhance clarity, comfort, and emotional connection — never at the cost of human touch.",
      img: "/mantras/5.webp",
    },
    {
      number: "06",
      title: "Meaningful Story Telling",
      desc: "From scent to sound, from welcome to farewell — every step in the guest journey is part of a narrative designed to feel meaningful and memorable.",
      img: "/mantras/6.webp",
    },
    {
      number: "07",
      title: "Sustainability Impact",
      desc: "We take action that lasts. Our commitment to sustainability is grounded in visible results — for people, nature, and future generations.",
      img: "/mantras/7.webp",
    },
    {
      number: "08",
      title: "Pioneer Concept",
      desc: "We don’t play safe — we pioneer. Every concept is an opportunity to build what’s never been done before, led by imagination, courage, and purpose.",
      img: "/mantras/8.webp",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#CC7506]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Ini Vie 8 Mantras
            </h1>
          </div>
        </section>

        {/* MANTRAS SECTION */}
        {/* <section className="py-[100px] max-[560px]:py-[80px] space-y-[120px]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-[60px] items-center max-[560px]:gap-[40px]">
              <div className="relative w-full h-full  shadow-lg">
                <img
                  src="/rooms/suite-forest.webp"
                  alt="Suite Forest"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="grid gap-[40px]">
                {firstGroup.map((item) => (
                  <div
                    key={item.number}
                    className="flex flex-col justify-center items-center md:items-start space-y-4"
                  >
                    <span className="text-[30px]  font-serif text-white/50">
                      {item.number}
                    </span>
                    <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="leading-[180%] tracking-[0.5px] text-white/70 text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-[60px] items-center mt-[80px] max-[560px]:mt-[60px] max-[560px]:gap-[40px]">
              <div className="order-2 md:order-1 grid gap-[40px]">
                {secondGroup.map((item) => (
                  <div
                    key={item.number}
                    className="flex flex-col justify-center items-center md:items-start space-y-4"
                  >
                    <span className="text-[30px] font-serif text-white/50">
                      {item.number}
                    </span>
                    <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="leading-[180%] tracking-[0.5px] text-white/70 text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="order-1 md:order-2 relative w-full h-full  overflow-hidden shadow-lg">
                <img
                  src="/rooms/suite-forest.webp"
                  alt="Suite Forest"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="py-[100px] max-[560px]:py-[80px] space-y-[120px]">
          <div className="container  ">
            <div className="grid grid-cols-12 gap-[40px]">
              <div className="col-span-7">
                <div className="relative">
                  <img
                    src="/rooms/suite-forest.webp"
                    alt="a"
                    className="w-full h-[550px] object-center object-cover"
                  />
                  <div className="bg-black/40 absolute inset-0" />
                  <div className="absolute z-10 bottom-0 w-full bg-black/10 p-10">
                    <div className="space-y-4">
                      <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                        Empowering Local People
                      </h3>

                      <p className="leading-[150%] tracking-[0.5px] text-white/70 text-center md:text-left">
                        We grow with the people around us — hiring local
                        talents, collaborating with local communities, and
                        letting their spirit shape every guest experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="relative">
                  <img
                    src="/rooms/suite-forest.webp"
                    alt="a"
                    className="w-full h-[550px] object-center object-cover"
                  />
                  <div className="bg-black/40 absolute inset-0" />
                  <div className="absolute z-10 bottom-0 w-full bg-black/10  p-10">
                    <div className="space-y-4">
                      <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                        Respect Local Culture
                      </h3>

                      <p className="leading-[150%] tracking-[0.5px] text-white/70 text-center md:text-left">
                        Each brand lives in harmony with its location. We
                        respect local values, adapt with intention, and honor
                        the traditions that shape how we serve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-[40px] pt-[40px]">
              <div className="col-span-5">
                <div className="relative">
                  <img
                    src="/rooms/suite-forest.webp"
                    alt="a"
                    className="w-full h-[550px] object-center object-cover"
                  />
                  <div className="bg-black/40 absolute inset-0" />
                  <div className="absolute z-10 bottom-0 w-full bg-black/10  p-10">
                    <div className="space-y-4">
                      <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                        Responsible to Mother Earth
                      </h3>

                      <p className="leading-[150%] tracking-[0.5px] text-white/70 text-center md:text-left">
                        Nature is not a resource — she’s a partner. We design in
                        balance with the land and take real actions to protect
                        and regenerate what we touch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <div className="relative">
                  <img
                    src="/rooms/suite-forest.webp"
                    alt="a"
                    className="w-full h-[550px] object-center object-cover"
                  />
                  <div className="bg-black/40 absolute inset-0" />
                  <div className="absolute z-10 bottom-0 w-full bg-black/10 p-10">
                    <div className="space-y-4">
                      <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                        Intentional Personalization
                      </h3>

                      <p className="leading-[150%] tracking-[0.5px] text-white/70 text-center md:text-left">
                        Every guest is seen, heard, and remembered — through
                        thoughtful details that feel human and intentional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-[100px] max-[560px]:py-[80px]">
          <div className="max-w-6xl mx-auto space-y-24 px-4">
            {mantras.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
                >
                  {/* IMAGE */}
                  <div
                    className={`relative rounded-sm ${
                      isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full max-h-[400px] h-full object-cover rounded-sm  shadow-lg"
                    />
                    <div className="bg-black/40 absolute inset-0 rounded-sm" />
                  </div>

                  {/* TEXT */}
                  <div className="space-y-3">
                    <p className="text-[20px] font-semibold text-white/60">
                      {item.number}
                    </p>
                    <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-[180%]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
