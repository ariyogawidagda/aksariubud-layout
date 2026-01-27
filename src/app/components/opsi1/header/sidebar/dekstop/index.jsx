"use client";

import Link from "next/link";
import { useState } from "react";

export default function SidebarDekstop({ setOpen, setContact }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <>
      <div className=" grid-cols-12 h-full max-[767px]:hidden grid ">
        <div className="col-span-8 relative max-[1200px]:col-span-6">
          <img
            src={"/bg-room.webp"}
            alt={"#"}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-[50px] left-[50px] z-20">
            <div
              onClick={() => setOpen(false)}
              className="relative w-[25px] h-[25px] cursor-pointer flex gap-[20px] "
            >
              <img
                src="/icon/close.png"
                alt="close"
                loading="eager"
                className="w-full h-full"
              />
              <p className="text-white">Close</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-10 w-full h-full"></div>
        </div>
        <div className="col-span-4 px-[50px] max-[1200px]:col-span-6">
          <div className="container flex flex-col h-[100vh]  justify-between ">
            <div className="pt-[40px]  flex justify-between items-center">
              <div className="relative w-[120px]">
                <div
                  onClick={() => setOpen(false)}
                  className="cursor-pointer flex justify-center items-center"
                >
                  <img
                    src={`/logo.png`}
                    alt="logo"
                    loading="eager"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <a
                  href={"#"}
                  className="py-[12px] px-[24px] inline-block border-white border-[1px] text-white hover:bg-[#2D3D49] hover:border-[var(--primaryColor)]"
                  aria-label="Link Booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="flex justify-between ">
              <ul className="text-[24px] text-white  flex flex-col gap-[30px] w-fit scroll-auto">
                <li>
                  <button
                    className="w-full text-left py-2 "
                    onClick={() => toggleMenu("ourstory")}
                  >
                    Our Story
                  </button>
                  <ul
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      openMenu === "ourstory" ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li className="py-2 text-[20px]">About Us</li>
                    <li className="py-2 text-[20px]">Awards</li>
                    <li className="py-2 text-[20px]">Our 8 Mantras</li>
                    <li className="py-2 text-[20px]">Sustainability</li>
                  </ul>
                </li>
                {/* <li>
                  <Link
                    href={`/#accomodation`}
                    className="text-white capitalize"
                    onClick={() => setOpen(false)}
                    prefetch={false}
                  >
                    accomodation
                  </Link>
                </li> */}
                <li>
                  <button
                    className="w-full text-left py-2 "
                    onClick={() => toggleMenu("accomodation")}
                  >
                    Accomodation
                  </button>
                  <ul
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      openMenu === "accomodation" ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li className="py-2 text-[20px]">Luxury Pool Villas</li>
                    <li className="py-2 text-[20px]">Suites</li>
                  </ul>
                </li>

                <li>
                  <button
                    className="w-full text-left py-2 "
                    onClick={() => toggleMenu("dinings")}
                  >
                    Dinings
                  </button>
                  <ul
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      openMenu === "dinings" ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li className="py-2 text-[20px]">Habitat Bistro</li>
                    <li className="py-2 text-[20px]">Shichirin Ubud</li>
                    <li className="py-2 text-[20px]">Seven Paintings Ubud</li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left py-2 "
                    onClick={() => toggleMenu("wellness")}
                  >
                    Spa & Wellness
                  </button>
                  <ul
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      openMenu === "wellness" ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li className="py-2 text-[20px]">Svaha Spa Bisma</li>
                    <li className="py-2 text-[20px]">Floating Sound Healing</li>
                    <li className="py-2 text-[20px]">Yoga</li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left py-2 "
                    onClick={() => toggleMenu("experiences")}
                  >
                    Experiences
                  </button>
                  <ul
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      openMenu === "experiences" ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <li className="py-2 text-[20px]">
                      Signature Facilities for Elevated Stays
                    </li>
                    <li className="py-2 text-[20px]">Immersive Experience</li>
                    <li className="py-2 text-[20px]">Romantic Surprises</li>
                    <li className="py-2 text-[20px]">Events & Weddings</li>
                  </ul>
                </li>

                <li>
                  <Link
                    href={`/gallery`}
                    className=" capitalize"
                    aria-label="Link   gallery"
                    onClick={() => setOpen(false)}
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/gallery`}
                    className=" capitalize"
                    aria-label="Link   gallery"
                    onClick={() => setOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                {/* <li>
                  <button
                    onClick={() => setContact(true)}
                    className=" capitalize"
                  >
                    contact
                  </button>
                </li> */}
              </ul>
              <ul className=" relative">
                <div className="flex flex-col h-full gap-[20px] justify-center items-center relative z-10">
                  <a
                    href={"#"}
                    aria-label="link facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
                      <img
                        src="/icon/facebook.png"
                        alt="facebook"
                        className="w-[8px] h-[12px] object-cover"
                        loading="eager"
                      />
                    </li>
                  </a>
                  <a href={"#"} aria-label="link youtube" target="_blank">
                    <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
                      <img
                        src="/icon/youtube.png"
                        alt="instagram"
                        className="w-[15px] h-[12px] object-cover"
                        loading="eager"
                      />
                    </li>
                  </a>
                  <a
                    href={"3"}
                    aria-label="link instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
                      <img
                        src="/icon/instagram.png"
                        alt="instagram"
                        className="w-[15px] h-[15px] object-cover"
                        loading="eager"
                      />
                    </li>
                  </a>
                </div>

                <div className="h-[213px] w-[1px] background-test1 absolute top-[50%] translate-y-[-50%] left-[50%] "></div>
              </ul>
            </div>
            <div className="pb-[40px]  flex justify-between items-center">
              <Link href="/" prefetch={false}>
                <div className="">
                  <img
                    src="/logo-inivie-ln.png"
                    alt="Gambar Responsif"
                    loading="eager"
                    className="w-[109px] h-[120px] object-cover object-center"
                  />
                </div>
              </Link>
              <div>
                <a href={""} target="_blank" rel="noopener noreferrer">
                  <p className="text-[13px] text-white text-center">
                    Recommended on
                  </p>
                  <div className=" w-[131px] h-[20px] mt-[10px] ">
                    <img
                      src="/icon/tripadvisor.png"
                      alt="tripadvisor"
                      className="w-full h-full"
                      loading="eager"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
