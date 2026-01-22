import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="py-[40px] pt-[90px] relative">
        <div className="absolute inset-0  w-full  z-10 ">
          <img
            src={`/bg-footer-ln.webp`}
            alt="Hero background"
            loading="eager"
            fetchPriority="high"
            className={`object-cover object-center w-full h-full`}
          />
        </div>
        <div className="absolute inset-0 bg-[var(--contactColor)]"></div>
        <div className="container relative z-20 ">
          <div className="grid grid-cols-12 ">
            <div className="col-span-3 max-[560px]:col-span-12 flex  flex-col justify-center items-center gap-[17px] ">
              <Link prefetch={false} href={`/`} aria-label="Link Logo">
                <img
                  src={`logo.png`}
                  alt="Gambar Responsif"
                  className=" h-auto  w-[200px] max-[560px]:w-[100px] pr-[50px] max-[767px]:pr-0 object-cover object-center"
                  loading="lazy"
                />
              </Link>
              <p className=" text-white/80 text-[14px]  leading-[24px] pr-[50px] text-center max-[767px]:pr-0 ">
                <a href={"#"}>Jl. Raya Desa Kenderan No.88 A, Ubud, Bali</a>
              </p>
            </div>
            <div className=" mt-[0px] col-span-2 max-[560px]:col-span-12 ">
              <div className="grid grid-cols-12 max-[768px]:gap-[20px]  text-start space-y-[24px] max-[560px]:text-center max-[560px]:space-y-[0px] max-[560px]:mt-[40px] ">
                <div className="text-white/80  col-span-12 ">
                  <div className="">Reservation</div>
                  <p className="text-[14px] text-white/60 mt-[5px]">
                    <a href={`https://wa.me/`}>+62 811-3960-7249</a>
                  </p>
                </div>
                <div className="text-white/80  col-span-12  ">
                  <div className="">E-Butler</div>
                  <p className="text-[14px] text-white/60 mt-[5px]">
                    <a href={`https://wa.me/`}>+62 813-3750-4188</a>
                  </p>
                </div>
                {/* <div className="text-white  col-span-6 ">
                  <a href={"#"} target="_blank" rel="noopener noreferrer">
                    <div className="">Location</div>
                    <p className="text-[14px] mt-[5px]">
                      Jl. Bisma No.888A, Ubud, Kecamatan Ubud, Kabupaten
                      Gianyar, Bali 80571
                    </p>
                  </a>
                </div> */}
                <div className="text-white/80  col-span-12  ">
                  <div className="">Email</div>
                  <p className="text-[14px] text-white/60 mt-[5px]">
                    <a href={`mailto:`}>kaamalaresort@inivie.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12  hidden my-[40px] border-[#8d7c6b] border-[1.5px] "></div>
            <div className=" col-span-2 max-[560px]:col-span-6 pl-8 max-[560px]:pl-0 max-[560px]:text-center max-[560px]:mt-[40px]">
              <ul className="text-white/80 flex flex-col gap-[14px]  ">
                <li>
                  <Link prefetch={false} href={`/`}>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={`/#accomodation`}>
                    Accomodation
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={`//experience`}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={`//promo`}>
                    Special Offers
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href={`/wedding`}>
                    Wedding
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href={`/gallery`}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" col-span-2 max-[560px]:col-span-6 max-[560px]:mt-[40px]">
              <ul className="text-white/80 flex flex-col gap-[14px] max-[560px]:text-center ">
                <li>
                  <Link
                    prefetch={false}
                    href={"https://inivie.com/marketinginquiry"}
                  >
                    Collaboration Inquiry
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={"https://inivie.com/policy"}>
                    General Policy
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    href={"https://inivie.com/radioinivie"}
                  >
                    Ini Vie radio
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={"https://inivie.com/meetalexa"}>
                    Meet Alexa
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href={"https://blog.inivie.com/"}>
                    What’s new
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    href={"https://inivie.com/sustainability"}
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" max-[768px]:mt-[40px] col-span-3 max-[560px]:col-span-12">
              <div>
                <div className="mt-[20px]">
                  <p className="text-[15px] text-white/80 mb-[10px] max-[560px]:text-center">
                    Join Our Membership for Exclusive Rewards!
                  </p>
                  <div className="flex max-min-w-1200:flex-col max-min-w-1200:gap-[5px]">
                    <a
                      href="https://booking.inivie.com/register"
                      className="py-[12px] w-full text-center px-[24px] inline-block border-white/80 border-[1px] text-white/80 hover:bg-[#2D3D49] hover:border-[var(--primaryColor)]  max-min-w-1200:text-center duration-300 ease-in"
                      aria-label="Link Booking"
                    >
                      Become A Member
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] flex gap-[10px] max-[560px]:justify-center">
                <a
                  href={"#"}
                  className=" w-[30px] h-[30px] rounded-[50%] bg-[var(--bodyColor)] flex justify-center items-center"
                  aria-label="link facebook"
                >
                  <img
                    src={`/icon/facebook.png`}
                    alt="facebook"
                    loading="lazy"
                    className="w-[9px] h-auto"
                  />
                </a>
                <a
                  href={"#"}
                  className=" w-[30px] h-[30px] rounded-[50%] bg-[var(--bodyColor)] flex justify-center items-center"
                  aria-label="link youtube "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/icon/youtube.png`}
                    alt="youtube"
                    loading="lazy"
                    className="w-[14px] h-auto"
                  />
                </a>
                <a
                  href={"#"}
                  className=" w-[30px] h-[30px] rounded-[50%] bg-[var(--bodyColor)] flex justify-center items-center"
                  aria-label="link instagram "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/icon/instagram.png`}
                    alt="instagram"
                    loading="lazy"
                    className="w-[13px] h-auto"
                  />
                </a>
                <a
                  href={"#"}
                  className=" w-[30px] h-[30px] rounded-[50%] bg-[var(--bodyColor)] flex justify-center items-center"
                  aria-label="link tiktok "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={14} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[24px] mt-[100px] max-[560px]:mt-[40px]">
            <div className="col-span-6 max-[560px]:col-span-12 order-2">
              <div className="flex items-center flex-row  gap-[14px] justify-end max-[560px]:flex-col">
                <p className="text-[14px] text-white/80 text-center">
                  Recommended on
                </p>
                <div className="  ">
                  <a
                    href={"#"}
                    aria-label="link tripadvisor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/icon/tripadvisor.png`}
                      loading="lazy"
                      className="w-[131px] h-[20px] object-cover object-center"
                      alt="tripadvisor"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-span-6  max-[560px]:col-span-12 order-1  max-[560px]:order-2">
              <p className="text-white/80 text-[14px] max-[560px]:text-center text-start">
                © {new Date().getFullYear()} Kaamala Resort . All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-[40px] px-[38px] bg-[#CC7506]">
        <div className="flex justify-center">
          <a
            href="/"
            target="_blank"
            aria-label="link inivie"
            rel="noopener noreferrer"
          >
            <img
              src={`/logo-inivie-ln.png`}
              alt="Gambar Responsif"
              className="w-[120px] h-auto max-[560px]:w-[100px]  object-cover object-center"
              loading="lazy"
            />
          </a>
        </div>
        <div className="mt-[16px]">
          <p className="text-[14px] text-white/80 text-center ">
            This property is a proud member of the ini vie family.
          </p>
        </div>
      </div>
    </>
  );
}
