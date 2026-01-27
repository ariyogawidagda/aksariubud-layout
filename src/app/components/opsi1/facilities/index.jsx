export default function Facilities() {
  return (
    <>
      <section className="bg-[#FAB766] pt-[100px] pb-[100px] max-[560px]:py-[70px] max-[560px]:pb-[30px]">
        <div className="container">
          <h2 className="text-[28px] text-center tracking-[0.5px] mb-[40px] capitalize leading-[180%] text-white/80">
            Dinings
          </h2>
          <div className="space-y-[80px] max-lg:space-y-[60px] max-[560px]:space-y-[40px]">
            {/* Habitat Bistro */}
            <div className="grid grid-cols-12 gap-[40px] max-lg:gap-[20px]">
              {/* Image */}
              <div className="col-span-5 max-lg:col-span-12">
                <div className="img-container relative overflow-hidden shadow-md">
                  <img
                    src={"/homepage/dining1.webp"}
                    alt="dining"
                    loading="lazy"
                    className="w-full h-[550px] max-[560px]:h-[350px] object-cover object-center "
                  />
                  <div className="absolute bg-black/40 inset-0" />
                </div>
              </div>
              {/* Text */}
              <div className="col-span-7 max-lg:col-span-12 flex justify-end max-[1024px]:justify-start max-lg:my-[40px]">
                <div className="flex flex-col h-full gap-[24px] max-w-[580px] w-full justify-center px-4 max-lg:px-0">
                  {/* <span
                    className="text-[11px] text-black uppercase tracking-[3.75px]"
                    style={{ fontFamily: "var(--font-arsenal)" }}
                  >
                    OUR RESTAURANT
                  </span> */}
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Ankhusa Ubud
                  </h3>
                  <p className="text-white/60 text-[14px] leading-[180%] tracking-[0.5px]">
                    Experience the Balinese royal dining tradition, the Megibung
                    Feast, at Ankhusa Ubud, where culinary artistry unfolds amid
                    the serene greenery of Ubud’s resort sanctuary. Each dish
                    symbolizes equality and togetherness between the king and
                    his soldiers, crafted from locally sourced ingredients and
                    transformed by skilled chefs into a dining experience meant
                    to be deeply felt, not merely tasted.
                  </p>
                  <div className="mt-[16px]">
                    <a
                      href={"#"}
                      className="px-[22px] py-[12px] bg-[#CC7506]/80 text-[14px] text-white/80 inline-block"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Shichirin Ubud */}
            <div className="grid grid-cols-12 gap-[40px] max-lg:gap-[20px]">
              {/* Image */}
              <div className="col-span-5 max-lg:col-span-12 order-2 max-lg:order-1">
                <div className="img-container relative overflow-hidden shadow-md">
                  <img
                    src={"/homepage/dining2.webp"}
                    alt="dining"
                    loading="lazy"
                    className="w-full h-[550px] max-[560px]:h-[350px] object-cover object-center"
                  />
                  <div className="absolute bg-black/40 inset-0" />
                </div>
              </div>
              {/* Text */}
              <div className="col-span-7 max-lg:col-span-12 flex justify-start order-1 max-lg:order-2 max-lg:my-[40px]">
                <div className="flex flex-col h-full gap-[24px] max-w-[580px] w-full justify-center px-4 max-lg:px-0">
                  {/* <span
                    className="text-[11px] text-black uppercase tracking-[3.75px]"
                    style={{ fontFamily: "var(--font-arsenal)" }}
                  >
                    OUR RESTAURANT
                  </span> */}
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Kojin Japanese Restaurant Ubud
                  </h3>
                  <p className="text-white/60 text-[14px] leading-[180%] tracking-[0.5px]">
                    Kojin is a lively theatrical teppanyaki restaurant amidst
                    Ubud’s lush forest, where refined Japanese culinary
                    craftsmanship meets the elegance of Balinese nature. From
                    delicate sashimi to vibrant teppanyaki, each course unfolds
                    in an intimate, dramatic setting that celebrates precision,
                    flavor, and artistry.
                  </p>
                  <div className="mt-[16px]">
                    <a
                      href={"#"}
                      className="px-[22px] py-[12px] bg-[#CC7506]/80 text-[14px] text-white/80 inline-block"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="justify-center mt-[80px] flex max-[560px]:hidden">
            <a
              href={"#"}
              className="bg-[var(--bodyColor)] text-[14px] py-[12px] px-[24px] flex items-center w-fit gap-[10px] border-white border-[1px] text-white capitalize cursor-pointer"
              target="_blank"
            >
              Show All Facilities
              <img src="/arrow.png" alt="arrow" className="w-[25px] h-[14px]" />
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}
