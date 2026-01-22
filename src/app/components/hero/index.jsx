"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldLoadVideo(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className=" relative h-[100vh]">
        <div className="absolute inset-0 w-full h-full">
          {shouldLoadVideo && (
            <video
              loop
              playsInline
              muted
              autoPlay
              control="false"
              preload="metadata"
              className="w-full h-full object-cover absolute inset-0"
              onError={() => setVideoError(true)}
            >
              <source src={"/aksari-resort.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="absolute inset-0 w-full h-full bg-black opacity-45"></div>
      </section>
    </>
  );
}
