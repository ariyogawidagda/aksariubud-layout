import Awards from "../components/opsi3/awards";
import CtaOffers from "../components/ctahome";
import Facilities from "../components/opsi3/facilities";
import Footer from "../components/opsi3/footer";
import Gallery from "../components/opsi3/gallery";
import Header from "../components/opsi3/header";
import Hero from "../components/hero";
import Media from "../components/opsi3/media";
import Offers from "../components/opsi3/offers";
import GuestReviews from "../components/opsi3/review";
import RoomV2 from "../components/roomv2";
// import Room from "./components/rooom";
import SectionBookM from "../components/sectionbook";
export default function HomePageOpsi3() {
  return (
    <>
      <Header />
      <main className="bg-[#F4AE7A]">
        <Hero />
        <Awards />
        <section className="bg-[#F4AE7A] pb-[120px] max-[560px]:pb-[80px]">
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
        {/* <Room /> */}
        <RoomV2 />
        <Facilities />
        <Offers />
        <CtaOffers />
        <section className="relative">
          <Gallery />
        </section>
        <section>
          <GuestReviews />
        </section>
        <section className="bg-[#F4AE7A] pb-[100px] max-[560px]:pb-[80px]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[28px] tracking-[0.5px] text-center capitalize leading-[180%] text-white/80 mb-[20px]">
              Featured On
            </h2>
            <Media />
          </div>
        </section>
      </main>
      <Footer />
      <SectionBookM />
    </>
  );
}
