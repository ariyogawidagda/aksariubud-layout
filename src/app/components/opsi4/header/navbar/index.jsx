"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({ setOpen, slug }) {
  const ref = useRef(null);
  const refButton = useRef(null);

  useEffect(() => {
    let previousScrollPosition = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (ref.current) {
        const scrollTop = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          if (currentScrollPosition > previousScrollPosition) {
            ref.current.classList.add("bg-[#F7BD97]", "shadow-md");
          } else {
            if (currentScrollPosition === 0) {
              ref.current.classList.remove("bg-[#F7BD97]", "shadow-md");
            } else {
              ref.current.classList.add("bg-[#F7BD97]", "shadow-md");
            }
          }
          previousScrollPosition = currentScrollPosition;
        } else {
          if (scrollTop > 50) {
            ref.current.classList.add("bg-[#F7BD97]", "shadow-md");
            refButton?.current?.classList.add(
              "hover:bg-[var(--btnHoverColor)]",
            );
            refButton?.current?.classList.add(
              "hover:border-[var(--btnHoverColor)]",
            );
            refButton?.current?.classList.remove("hover:bg-[#F7BD97]");
            refButton?.current?.classList.remove(
              "hover:border-[var(--headerColor)]",
            );
          } else {
            ref.current.classList.remove("bg-[#F7BD97]", "shadow-md");
            refButton?.current?.classList.remove(
              "hover:bg-[var(--btnHoverColor)]",
            );
            refButton?.current?.classList.remove(
              "hover:border-[var(--btnHoverColor)]",
            );
            refButton?.current?.classList.add("hover:bg-[#F7BD97]");
            refButton?.current?.classList.add(
              "hover:border-[var(--headerColor)]",
            );
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={ref}
        className="bg-[#F7BD97] fixed w-full h-fit inset-0 z-[100] duration-500 ease-in-out "
      >
        <div
          className={`flex container py-[16px] justify-between items-center min-[768px]:border-b-[1px] min-[768px]:border-white/20  ${
            hidden ? "md:hidden" : ""
          }`}
        >
          <div className="order-2 max-[560px]:order-1">
            <Link href={`/`}>
              <img
                alt="Logo Responsif"
                height="100"
                width="100"
                loading="edge"
                fetchPriority="high"
                src={"/logo.png"}
                className=" object-cover object-center max-[560px]:w-[70px] max-[560px]:h-[70px]"
              />
            </Link>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="w-[34px] h-[14px]  relative cursor-pointer order-1"
          >
            <img
              src={`burgerMenu.png`}
              width={34}
              height={14}
              alt="burger menu"
            />
          </div>
          <div className="order-3 max-[560px]:hidden">
            <a
              href={"3"}
              ref={refButton}
              className="py-[12px] px-[24px] inline-block border-white border-[1px] text-white duration-500 ease-in-out"
              aria-label="Link Booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="py-4 relative max-[768px]:hidden">
          <ul className="text-white text-[14px] tracking-[1.2px] flex justify-center gap-[40px] max-[1024px]:gap-[30px]">
            {/* Our Story */}
            <li className="group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Our Story
              </a>
              {/* Submenu */}
              <div
                className={`absolute left-0 mt-2 w-full text-white flex flex-row justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  py-2 ${
                  scrolled ? "bg-[#DE9230] shadow-md" : "bg-transparent"
                }`}
              >
                <ul
                  className={`container gap-[20px] flex justify-center pb-[8px] border-b-[1px] border-white/20 ${
                    scrolled ? "border-none pb-4 " : ""
                  }`}
                >
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    <a href="/about-us">About Us</a>
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Awards
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Our 8 Mantras
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Sustainability
                  </li>
                </ul>
              </div>
            </li>

            {/* Accomodations */}
            <li className="group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Accomodations
              </a>
              {/* Submenu */}
              <div
                className={`absolute left-0 mt-2 w-full text-white flex flex-row justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  py-2 ${
                  scrolled ? "bg-[#DE9230] shadow-md" : "bg-transparent"
                }`}
              >
                <ul
                  className={`container gap-[20px] flex justify-center pb-[8px] border-b-[1px] border-white/20 ${
                    scrolled ? "border-none pb-4" : ""
                  }`}
                >
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Our Suite Room
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Our Luxury Villa with Private Pool & Stunning View
                  </li>
                </ul>
              </div>
            </li>

            {/* Dinings */}
            <li className="group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Dinings
              </a>
              {/* Submenu */}
              <div
                className={`absolute left-0 mt-2 w-full text-white flex flex-row justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  py-2 ${
                  scrolled ? "bg-[#DE9230] shadow-md" : "bg-transparent"
                }`}
              >
                <ul
                  className={`container gap-[20px] flex justify-center pb-[8px] border-b-[1px] border-white/20 ${
                    scrolled ? "border-none pb-4" : ""
                  }`}
                >
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Ankhusa Bali
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Kojin Bali
                  </li>
                </ul>
              </div>
            </li>

            {/* Spa & Wellness */}
            <li className="group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Spa & Wellness
              </a>
              {/* Submenu */}
              <div
                className={`absolute left-0 mt-2 w-full text-white flex flex-row justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  py-2 ${
                  scrolled ? "bg-[#DE9230] shadow-md" : "bg-transparent"
                }`}
              >
                <ul
                  className={`container gap-[20px] flex justify-center pb-[8px] border-b-[1px] border-white/20 ${
                    scrolled ? "border-none pb-4" : ""
                  }`}
                >
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Svaha Spa Kenderan
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Floating Sound Healing
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Yoga
                  </li>
                </ul>
              </div>
            </li>

            {/* Experiences */}
            <li className="group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Experiences
              </a>
              {/* Submenu */}
              <div
                className={`absolute left-0 mt-2 w-full text-white flex flex-row justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  py-2 ${
                  scrolled ? "bg-[#DE9230] shadow-md" : "bg-transparent"
                }`}
              >
                <ul
                  className={`container gap-[20px] flex justify-center pb-[8px] border-b-[1px] border-white/20 ${
                    scrolled ? "border-none pb-4" : ""
                  }`}
                >
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Signature Facilities for Elevated Stays
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Immersive Experience
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Romantic Surprises
                  </li>
                  <li className="  hover:border-b over:border-white  cursor-pointer">
                    Events & Weddings
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Offers
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:font-bold group-hover:border-b group-hover:border-white pb-1"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
