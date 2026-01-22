import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaAwards() {
  return (
    <>
      <Header />

      <main className="bg-[#CC7506]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%]  max-w-[1024px]  mx-auto text-white/80">
              Our Journey as The Best Resort in Bali
            </h1>
          </div>
        </section>

        <section className="bg-[#CC7506] py-[120px] max-[560px]:py-[80px]">
          <div className="container text-center">
            <h2 className="text-[28px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
              Our Awards
            </h2>

            <div className="flex flex-wrap justify-center gap-[60px] max-[560px]:gap-[40px] mt-[40px] max-w-[1280px] mx-auto">
              <div className="p-6 py-6 bg-transparent  shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <a href="#" target="_blank">
                  <h3 className="!text-[19px] tracking-[0.5px] text-white/80 leading-[160%]">
                    Top 10% Worldwide Travellers' Choice Awards 2025
                  </h3>
                  <p className="text-white/60 italic tracking-[0.5px] mt-3">
                    TripAdvisor
                  </p>
                </a>
              </div>

              <div className="p-6 py-6 bg-transparent shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <a href="https://blog.inivie.com/kaamala-resort-ubud-named-among-the-top-10-honeymoon-destinations-2024-by-conde-nast-traveler/">
                  <h3 className="!text-[19px] text-white/80 tracking-[0.5px] leading-[160%]">
                    Traveller Review Awards 2025
                  </h3>
                  <p className="text-white/60 italic tracking-[0.5px] mt-3">
                    Booking.com
                  </p>
                </a>
              </div>

              <div className="p-6 py-6 bg-transparent  shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <a href="https://inivie.com/blog/kaamala-resort-ubud-honored-as-global-winner-2025-by-world-luxury-hotel-awards">
                  <h3 className="!text-[19px] text-white/80 tracking-[0.5px] leading-[160%]">
                    Best Luxury Villa Resort in Southern Asia
                  </h3>
                  <p className="text-white/60 italic tracking-[0.5px] mt-3">
                    World Luxury Awards 2024
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
