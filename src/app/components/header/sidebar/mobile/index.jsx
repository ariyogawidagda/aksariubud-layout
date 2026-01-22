"use client";

import Link from "next/link";
import { useState } from "react";
export default function SidebarMobile({ setOpen, setContact }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <div className="container flex-col h-full justify-between col-span-4 max-[767px]:flex hidden">
      <div className="pt-[20px]  flex justify-between items-center">
        <div className="relative w-[90px] h-auto">
          <img
            src={`/logo.png`}
            alt="logo"
            loading="eager"
            className="w-full h-full"
          />
        </div>
        <div>
          <div
            onClick={() => setOpen(false)}
            className="relative w-[25px] h-[25px] cursor-pointer"
          >
            <img
              src="/icon/close.png"
              alt="close"
              loading="eager"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <ul className="text-[28px] text-white  flex flex-col gap-[20px] w-fit">
          {/* Our Story */}
          <li>
            <button
              className="w-full text-left py-2 text-[14px]"
              onClick={() => toggleMenu("ourstory")}
            >
              Our Story
            </button>
            <ul
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                openMenu === "ourstory" ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="py-1 text-sm">About Us</li>
              <li className="py-1 text-sm">Awards</li>
              <li className="py-1 text-sm">Our 8 Mantras</li>
              <li className="py-1 text-sm">Sustainability</li>
            </ul>
          </li>

          <li>
            <button
              className="w-full text-left py-2 text-[14px]"
              onClick={() => toggleMenu("accomodation")}
            >
              Accomodation
            </button>
            <ul
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                openMenu === "accomodation" ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="py-1 text-sm">Luxury Pool Villas</li>
              <li className="py-1 text-sm">Suites</li>
            </ul>
          </li>

          <li>
            <button
              className="w-full text-left py-2 text-[14px]"
              onClick={() => toggleMenu("dinings")}
            >
              Dinings
            </button>
            <ul
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                openMenu === "dinings" ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="py-1 text-sm">Habitat Bistro</li>
              <li className="py-1 text-sm">Shichirin Ubud</li>
              <li className="py-1 text-sm">Seven Paintings Ubud</li>
            </ul>
          </li>

          <li>
            <button
              className="w-full text-left py-2 text-[14px]"
              onClick={() => toggleMenu("wellness")}
            >
              Spa & Wellness
            </button>
            <ul
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                openMenu === "wellness" ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="py-1 text-sm">Svaha Spa Bisma</li>
              <li className="py-1 text-sm">Floating Sound Healing</li>
              <li className="py-1 text-sm">Yoga</li>
            </ul>
          </li>

          <li>
            <button
              className="w-full text-left py-2 text-[14px]"
              onClick={() => toggleMenu("experiences")}
            >
              Experiences
            </button>
            <ul
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                openMenu === "experiences" ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="py-1 text-sm">
                Signature Facilities for Elevated Stays
              </li>
              <li className="py-1 text-sm">Immersive Experience</li>
              <li className="py-1 text-sm">Romantic Surprises</li>
              <li className="py-1 text-sm">Events & Weddings</li>
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
              className=" capitalize max-[560px]:text-[14px]"
            >
              contact
            </button>
          </li> */}
        </ul>
        <ul className="flex flex-col gap-[20px] justify-center items-center">
          <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
            <a href={"#"} aria-label="Link facebook">
              <img
                src="/icon/facebook.png"
                alt="facebook"
                className="w-[8px] h-[12px]"
                loading="eager"
              />
            </a>
          </li>

          <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
            <a href={"#"} aria-label="Link youtube">
              <img
                src="/icon/youtube.png"
                alt="youtube"
                className="w-[15px] h-[12px]"
                loading="eager"
              />
            </a>
          </li>

          <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
            <a href={"#"} aria-label="Link Instagram">
              <img
                src="/icon/instagram.png"
                alt="instagram"
                className="w-[15px] h-[12px]"
                loading="eager"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="pb-[20px]  flex justify-between items-center">
        <div className="">
          <Link href="/" prefetch={false}>
            <div className="">
              <img
                src="/logo-inivie-ln.png"
                alt="Gambar Responsif"
                loading="eager"
                className="w-[109px] h-auto max-[560px]:w-[90px] object-cover object-center"
              />
            </div>
          </Link>
        </div>
        <div>
          <a href={"#"} target="_blank" rel="noopener noreferrer">
            <p className="text-[13px] text-white text-center">Recommended on</p>
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
  );
}
