import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Exclusive Luxury Offers for Your Stay in Kaamala
            </h1>
          </div>
        </section>

        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Experience more than just a stay at Kaamala, every guest is
              invited to choose from a curated collection of exclusive luxury
              packages, each designed to elevate every moment of your journey.
              From celebrating love and marking a special occasion, every offer
              is crafted with thoughtful detail and immersive experiences. In
              this Ubud luxury resort, every moment turns into a cherised
              memory.
            </p>
          </div>
        </section>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[80px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20 max-[560px]:text-center">
              <li>
                <a href="#">Advance Saver</a>
              </li>
              <li>
                <a href="#">Luxury Honeymoon Package</a>
              </li>
              <li>
                <a href="#">Say 'I Do' Package</a>
              </li>
            </ul>
            <div className="mt-[40px] space-y-15">
              <div className="grid grid-cols-12 bg-white/5">
                {/* Konten */}
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12 p-5 max-[1024px]:order-2">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px] leading-[120%] text-white/80">
                      Advance Saver
                    </h2>

                    {/* Accordion Desc (default open) */}
                    <div>
                      <input
                        type="radio"
                        name="accordion"
                        id="desc"
                        className="peer hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="desc"
                        className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-base py-2"
                      >
                        Description
                        <span className="transition-transform duration-300 peer-checked:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </label>
                      <div className="max-h-0 overflow-hidden peer-checked:max-h-[500px] transition-all duration-300">
                        <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] mt-2">
                          Book a minimum of 45 days in advance and enjoy up to
                          62% off your luxury escape. The perfect opportunity to
                          plan your dream stay in Ubud with exceptional value
                          and added peace of mind. (Valid until 30 June 2026)
                        </p>
                      </div>
                    </div>

                    {/* Accordion Inclusions */}
                    <div>
                      <input
                        type="radio"
                        name="accordion"
                        id="inclusions"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="inclusions"
                        className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-base py-2"
                      >
                        Inclusions
                        <span className="transition-transform duration-300 peer-checked:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </label>
                      <div className="max-h-0 overflow-hidden peer-checked:max-h-[800px] transition-all duration-300">
                        <ul className="mt-2 space-y-2 text-white/60 text-sm list-disc pl-5">
                          <li>book minimum 45 days in advance</li>
                          <li>valid until 30 June 2026</li>
                          <li>up to 62% OFF</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pb-2">
                    <a
                      href="#"
                      className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                    >
                      Book Now
                      <img
                        src={`arrow.png`}
                        loading="lazy"
                        alt="arrow"
                        className="w-[27px] h-auto"
                      />
                    </a>
                  </div>
                </div>

                {/* Gambar */}
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/offers/saver.webp"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-white/5">
                {/* Gambar */}
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/offers/honeymoon1.jpg"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
                {/* Konten */}
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12 p-5 max-[1024px]:order-2">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px] leading-[120%] text-white/80">
                      Luxury Honeymoon Package
                    </h2>

                    {/* Accordion Desc (default open) */}
                    <div>
                      <input
                        type="radio"
                        name="accordion1"
                        id="desc1"
                        className="peer hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="desc1"
                        className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-base py-2"
                      >
                        Description
                        <span className="transition-transform duration-300 peer-checked:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </label>
                      <div className="max-h-0 overflow-hidden peer-checked:max-h-[500px] transition-all duration-300">
                        <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] mt-2">
                          A honeymoon at Kaamala is more than romance, it is the
                          art of intimacy, delicately crafted in timeless
                          elegance. With our Luxury Honeymoon Package, every
                          detail is thoughtfully designed to celebrate your love
                          and create memories that will linger in your hearts
                          forever.
                        </p>
                      </div>
                    </div>

                    {/* Accordion Inclusions */}
                    <div>
                      <input
                        type="radio"
                        name="accordion1"
                        id="inclusions1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="inclusions1"
                        className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-base py-2"
                      >
                        Inclusions
                        <span className="transition-transform duration-300 peer-checked:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </label>
                      <div className="max-h-0 overflow-hidden peer-checked:max-h-[800px] transition-all duration-300">
                        <ul className="mt-2 space-y-2 text-white/60 text-sm list-disc pl-5">
                          <li>2 Nights Stay at One Bedroom Villa</li>
                          <li>Daily Ala Carte Breakfast for 2 Perons</li>
                          <li>
                            Romantic Special Wording HAPPY HONEYMOON on the bed{" "}
                          </li>
                          <li>1x Chocolate Strawberry</li>
                          <li>1x Flower Bouquet </li>
                          <li>
                            1x Romantic Flower Decoration Hearth Shape on the
                            Bathtub{" "}
                          </li>
                          <li>1x Full Flower Decoration on the Pool</li>
                          <li>1x Afternoon Tea for 2 Persons</li>
                          <li>1x Floating Tray Breakfast</li>
                          <li>1x Romantic Candle Light Dinner for 2 Person</li>
                          <li>One Bottle Sparkling Wine</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pb-2">
                    <a
                      href="#"
                      className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                    >
                      Book Now
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
              <div className="grid grid-cols-12 bg-white/5">
                {/* Konten */}
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12 p-5 max-[1024px]:order-2">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px] leading-[120%] text-white/80">
                      Say 'I Do' Package
                    </h2>

                    {/* Accordion Desc (default open) */}
                    <div>
                      <input
                        type="radio"
                        name="accordion3"
                        id="des3"
                        className="peer hidden"
                        defaultChecked
                      />
                      <label
                        htmlFor="desc3"
                        className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-base py-2"
                      >
                        Description
                        <span className="transition-transform duration-300 peer-checked:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </label>
                      <div className="max-h-0 overflow-hidden peer-checked:max-h-[500px] transition-all duration-300">
                        <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] mt-2">
                          Begin your love story with a proposal woven in
                          elegance and enchantment. Our Proposal Package turns
                          your special question into an unforgettable moment of
                          romance, complete with thoughtful details to make your
                          moments truly magical.
                        </p>
                      </div>
                    </div>

                    {/* Accordion Inclusions */}
                    <div>
                      <input
                        type="radio"
                        name="accordion3"
                        id="inclusions3"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="inclusions3"
                        className="cursor-pointer flex justify-between items-center text-white/80 font-medium text-base py-2"
                      >
                        Inclusions
                        <span className="transition-transform duration-300 peer-checked:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </span>
                      </label>
                      <div className="max-h-0 overflow-hidden peer-checked:max-h-[800px] transition-all duration-300">
                        <ul className="mt-2 space-y-2 text-white/60 text-sm list-disc pl-5">
                          <li>
                            2 Nights Stay in One Bedroom Villa with Private Pool{" "}
                          </li>
                          <li>Daily Ala Carte Breakfast for 2 Perons</li>
                          <li>
                            1 x Special Wording WILL YOU MARRY ME on the bed
                          </li>
                          <li>1x 1 Flower Bouquet</li>
                          <li>1 x One Bottle Sparkling Wine</li>
                          <li>1 x Candle Light Dinner for 2 Person</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pb-2">
                    <a
                      href="#"
                      className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                    >
                      Book Now
                      <img
                        src={`arrow.png`}
                        loading="lazy"
                        alt="arrow"
                        className="w-[27px] h-auto"
                      />
                    </a>
                  </div>
                </div>

                {/* Gambar */}
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/offers/say.webp"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
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
