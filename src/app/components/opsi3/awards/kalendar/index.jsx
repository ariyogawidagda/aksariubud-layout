"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineDiscount } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function KalendarNew() {
  const [scriptData, setScriptData] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);
  const [priceData, setPriceDate] = useState({});

  const [adultCount, setAdultCount] = useState(2);

  const [adults, setAdults] = useState(`${adultCount}  Adults`);
  const [promo, setPromo] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [newDate, setNewDate] = useState({ start: "", end: "" });
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  function formatDateToMMDDYYYY(end) {
    const dateObject = new Date(end);
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${month}-${day}-${year}`;
  }

  function formatDateToDDMMYYYY(end) {
    const dateObject = new Date(end);
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const formatDate = (date) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const onChangeCheckIn = (dates) => {
    const [start, end] = dates;
    const formatstart = formatDate(start);
    const formatend = formatDate(end);
    setStartDate(start);
    setEndDate(end);
    setNewDate({ start: start, end: end });
    if (start && end) {
      setFormattedValue(`${formatstart} - ${formatend}`);
    } else if (dates == ",") {
      const start = formatDate(new Date());
      const extendedDate = new Date();
      extendedDate.setDate(extendedDate.getDate() + 1);
      const end = formatDate(extendedDate);
      setFormattedValue(`${start} - ${end}`);
      setStartDate(null);
      setEndDate(null);
    }
  };

  const renderDayContents = (day, date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-CA"); // format YYYY-MM-DD
    const today = new Date();
    const formattedToday = today.toLocaleDateString("en-CA");
    let customText = "";

    if (formattedDate >= formattedToday) {
      const priceEntry = priceData[formattedDate];

      if (priceEntry?.allotment) {
        customText = priceEntry.formatted_price;
      } else {
        customText = "SOLD";
      }
    } else {
      customText = "";
    }

    return (
      <div className="flex justify-center h-full gap-[5px] flex-col">
        <div className="font-bold">{day}</div>
        <div className="text-[11px]  text-[#545454]">{customText}</div>
      </div>
    );
  };

  useEffect(() => {
    const Dates = () => {
      const today = new Date().toLocaleDateString("en-CA");
      const td = new Date();
      td.setDate(td.getDate() + 1);
      const tommorow = td.toLocaleDateString("en-CA");
      setStartDate(today);
      setEndDate(tommorow);
      const tommorow1 = td.toLocaleDateString("en-CA");

      setNewDate({
        newStart: formatDateToMMDDYYYY(today),
        newEnd: formatDateToMMDDYYYY(tommorow1),
      });
    };
    Dates();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://webapi-au.alaric.id/vie/x/calendar/KRUH`,
          {
            headers: {
              Authorization: "Basic " + btoa("calendar:g486dJ2wmW"),
            },
            withCredentials: true,
          },
        );
        console.log("TANGGA", response.data);
        setPriceDate(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        defaultValue={formattedValue}
        onClick={onClick}
        id="checkin-datepicker"
        placeholder="Mon, Nov 04 2024 - Tue, Nov 05 2024"
        className="pl-[30px] w-full text-[18px] max-[1220px]:text-[16px]  text-black/60 focus:outline-none cursor-pointer "
      />
      <div className="absolute top-[50%] translate-y-[-50%] z-0 left-0 ">
        <IoCalendarOutline className="size-6 text-black/60" />
      </div>
    </div>
  ));

  useEffect(() => {
    const start = formatDate(new Date());
    const extendedDate = new Date();
    extendedDate.setDate(extendedDate.getDate() + 1);
    const end = formatDate(extendedDate);
    setFormattedValue(`${start}  -  ${end}`);
    setStartDate(null);
    setEndDate(null);

    setNewDate({ start: start, end: end });
    setAdults(`${adultCount}  Adults`);
  }, []);

  useEffect(() => {
    setAdults(`${adultCount}  Adults`);
  }, [adultCount]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  const incrementAdults = () => {
    setAdultCount((prevCount) => prevCount + 1);
  };

  const decrementAdults = () => {
    if (adultCount > 1) {
      setAdultCount((prevCount) => prevCount - 1);
    }
  };
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "/app.alaric.booking.min.js";
  //   script.async = true;

  //   window.onScriptLoaded = (data) => {
  //     console.log("Data from script:", data);
  //     setScriptData({
  //       uId: data.uId,
  //       utmSource: data.utmSource,
  //       sessionId: data.sessionId,
  //     });
  //   };

  //   script.onload = () => {
  //     console.log("Script loaded successfully");
  //   };

  //   script.onerror = () => {
  //     console.error("Error loading script");
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //     window.onScriptLoaded = null;
  //   };
  // }, []);

  return (
    <>
      <div className="relative w-full top-[50px]">
        <div className="container bg-[#F8F9F9]  py-[50px] px-[25px] shadow-md max-[900px]:hidden">
          <div className="flex gap-[80px] max-[1350px]:gap-[40px] flex-auto max-[1140px]:gap-[40px] max-[1120px]:gap-[20px]">
            <div className="w-[400px] max-[1220px]:w-[320px]">
              <label
                className="mb-[5px] !text-[16px] max-[1220px]:!text-[14px] block  font-medium text-black/60"
                htmlFor="checkin-datepicker"
                style={{ fontFamily: "var(--font-arsenal" }}
              >
                Checkin - Checkout
              </label>
              <div className="">
                <DatePicker
                  minDate={new Date()}
                  renderDayContents={(day, date) =>
                    renderDayContents(day, date)
                  }
                  renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                  }) => (
                    <div>
                      <button
                        aria-label="Previous Month"
                        className={`react-datepicker__navigation react-datepicker__navigation--previous ${
                          customHeaderCount === 1 ? "hidden" : ""
                        }`}
                        onClick={decreaseMonth}
                      >
                        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                          {"<"}
                        </span>
                      </button>
                      <span className="react-datepicker__current-month">
                        {monthDate.toLocaleString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <button
                        aria-label="Next Month"
                        className={`react-datepicker__navigation react-datepicker__navigation--next ${
                          customHeaderCount === 0 ? "hidden" : ""
                        }`}
                        onClick={increaseMonth}
                      >
                        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                          {">"}
                        </span>
                      </button>
                    </div>
                  )}
                  onChange={onChangeCheckIn}
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  monthsShown={2}
                  customInput={<CustomInput />}
                />
              </div>
            </div>
            <div className="w-[140px] ">
              <div className=" ">
                <label
                  className="mb-[5px] block !text-[16px] max-[1220px]:!text-[14px] font-medium text-black/60 "
                  style={{ fontFamily: "var(--font-arsenal" }}
                  htmlFor="guest"
                >
                  Guests
                </label>
                <div
                  className="relative z-[10] cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <input
                    id="guest"
                    readOnly
                    type="text"
                    className="w-full pl-[30px] text-[18px] max-[1220px]:!text-[16px] !text-black/60 cursor-pointer outline-none"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                  />
                  <div className="absolute top-[50%] translate-y-[-50%] left-0 ">
                    <PiUsers className="size-6 text-black/60" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[220px]">
              <div className="relative">
                <label
                  className="mb-[5px] block !text-[16px] max-[1220px]:!text-[14px] font-medium text-black/60 "
                  style={{ fontFamily: "var(--font-arsenal" }}
                >
                  Promo Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    className="w-full pl-[30px] text-[18px] max-[1220px]:!text-[16px] text-black/60 outline-none"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                  />
                  <div className="absolute top-[50%] translate-y-[-50%] left-0 ">
                    <MdOutlineDiscount className="size-6 text-black/60" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow  flex items-center">
              <form
                action={"#"}
                method="post"
                target="_BLANK"
                className="w-full"
                rel="noopener noreferrer"
              >
                <input
                  type="hidden"
                  name="BookingForm[uid]"
                  defaultValue={scriptData.uId}
                />
                <input
                  type="hidden"
                  name="BookingForm[hotel]"
                  id="hotel"
                  defaultValue={""}
                />
                <input
                  type="hidden"
                  name="BookingForm[utm_source]"
                  defaultValue={scriptData.utmSource}
                />
                <input
                  type="hidden"
                  name="BookingForm[utm_source_session_id]"
                  defaultValue={scriptData.sessionId}
                />
                <input
                  type="hidden"
                  name="BookingForm[checkin]"
                  defaultValue={formatDateToDDMMYYYY(newDate.start)}
                />
                <input
                  type="hidden"
                  name="BookingForm[checkout]"
                  defaultValue={formatDateToDDMMYYYY(newDate.end)}
                />
                <input
                  type="hidden"
                  name="BookingForm[adults]"
                  defaultValue={adultCount}
                />
                <input
                  type="hidden"
                  name="BookingForm[offer_code]"
                  defaultValue={promo}
                />

                <button
                  className="py-[12px]  px-[24px] inline-block w-full
                     text-white/80 bg-[#bd753f] transition-transform duration-500 ease-in-out hover:scale-105"
                  aria-label="Link Booking"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
