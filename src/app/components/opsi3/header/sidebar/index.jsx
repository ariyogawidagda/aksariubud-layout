"use client";
// import Contact from "../../contact";
import { useState } from "react";
import SidebarMobile from "./mobile";
import SidebarDekstop from "./dekstop";

export default function Sidebar({ open, setOpen, slug }) {
  const [contact, setContact] = useState(false);
  return (
    <>
      <aside
        className={`bg-[var(--contactColor)] fixed w-full  inset-0  sideBar z-[300] ${
          open ? "!opacity-100 !visible" : " "
        }`}
      >
        {/* contact */}
        {/* <Contact contact={contact} setContact={setContact} /> */}
        {/* end contact */}

        {/* sidebar dekstop */}
        <SidebarDekstop setOpen={setOpen} setContact={setContact} slug={slug} />
        {/* end sidebar dekstop */}

        {/* sidebar mobile */}
        <SidebarMobile setOpen={setOpen} setContact={setContact} slug={slug} />
        {/*end sidebar mobile */}
      </aside>
    </>
  );
}
