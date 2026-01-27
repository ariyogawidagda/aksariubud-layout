"use client";

import { useState, useEffect, useRef } from "react";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Header({ slug }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".img-container").forEach((container) => {
      const img = container.querySelector("img");

      gsap.fromTo(
        img,
        { yPercent: -15, ease: "none" },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom", // mulai ketika top container masuk viewport
            end: "bottom top", // selesai ketika bottom container keluar viewport
            scrub: 0.5,
            // markers: true,      // aktifkan kalau mau debug
          },
        },
      );
    });

    return () => {
      lenis.current.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <>
      <Navbar setOpen={setOpen} slug={slug} />
      <Sidebar open={open} setOpen={setOpen} slug={slug} />
    </>
  );
}
