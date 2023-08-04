"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { DataContext } from "@/src/Context/DataProvider";

const Dilmension = () => {
  const [length, setLength] = useState("0");
  const [width, setWidth] = useState("0");
  const [surface, setSurface] = useState("0");
  const [circumference, setCircumference] = useState("0");
  const [toggle, setToggle] = useState(true);
  const [current, setCurrent] = useState(true);
  const [dataa, setDataa] = useState();

  const [buttonText, setButtonText] = useState(
    "I prefer to fill in the area and perimeter"
  );
  const roofLayouts = [
    {
      current: current,
      layout: "rectangle",
      method: "sizes",
      width: width,
      alength: length,
      area: surface,
      circumference: circumference,
    },
  ];
  useEffect(() => {
    // Retrieve the previously stored roof-layouts data from local storage
    const storedRoofLayouts = localStorage.getItem("roof-layouts");

    if (!storedRoofLayouts) {
      // Storing the roofLayouts data in local storage
      localStorage.setItem("roof-layouts", JSON.stringify(roofLayouts));
    }
    const parsedArray = JSON.parse(storedRoofLayouts);
    parsedArray?.map((item) => {
      setLength(item?.alength);
      setWidth(item?.width);
    });
  }, []);

  useEffect(() => {
    const updatedRoofLayouts = roofLayouts.map((obj) => {
      return {
        ...obj,
        current: current === true, // Update the current value based on your condition
      };
    });

    const calculatedSurface = length * width;
    const calculatedCircumference =
      2 * (parseFloat(length) + parseFloat(width));
    setSurface(calculatedSurface);
    setCircumference(calculatedCircumference);

    localStorage.setItem("roof-layouts", JSON.stringify(updatedRoofLayouts));
  }, [length, width]);

  const toggleCalculation = () => {
    if (toggle) {
      setToggle(false);
      setButtonText("I prefer to enter length and width");
    } else {
      setToggle(true);
      setButtonText("I prefer to fill in the area and perimeter");
    }
  };
  useEffect(() => {
    const storedRoofLayoutVale2 = localStorage.getItem("roof-layouts");
    const parsedArrayLen = JSON.parse(storedRoofLayoutVale2);
    setDataa(parsedArrayLen);
  }, []);

  const handleRoof = () => {
    let data = JSON.parse(localStorage.getItem("roof-layouts"));
    data = data.map((obj) => {
      return { ...obj, current: false };
    });
    const roofLayout = {
      current: true,
      layout: "rectangle",
      method: "sizes",
      width: 0,
      alength: 0,
      area: 0,
      circumference: 0,
    };
    data.push(roofLayout);
    // const parsedArrayLen3 = [...data, roofLayout ]

    localStorage.setItem("roof-layouts", JSON.stringify(data));
    // console.log(parsedArrayLen3?.length)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any additional logic or processing here
  };
  return (
    <div className="">
      <h1 className="text-2xl mb-5 font-bold">
        Calculate your green roof here
      </h1>
      <p className="mb-5">
        Follow the steps and request your quote, you can also order directly!
      </p>
      <h3 className="text-xl font-bold">How big is your roof?</h3>
      <form 
      onSubmit={handleSubmit}
      >
        <div>
          <div className="flex gap-6 mb-10">
            <div>
              <label className="label">
                <span className="label-text">
                  {toggle ? "Length" : "Surface"}:
                </span>
              </label>
              <input
                type="number"
                value={toggle ? length : surface}
                // value={length}

                onChange={(e) => setLength(e.target.value)}
                className="input input-bordered  max-w-xs focus:outline-none w-44 "
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">
                  {toggle ? "Width" : "Circumference"}:
                </span>
              </label>
              <input
                type="number"
                value={toggle ? width : circumference}
                // value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="input input-bordered max-w-xs  focus:outline-none w-44"
              />
            </div>
          </div>
          <button
            onClick={toggleCalculation}
            className="btn normal-case animate-none no-animation bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
          >
            {buttonText}
          </button>
        </div>
     
      </form>

      <h4 className="my-5 font-semibold">Here you can add multiple roofs</h4>
      <div className="">
        {dataa?.map((item, index) => (
          <button key={item} className="btn btn-outline mr-5 no-animation">
            Roof {index + 1}
          </button>
        ))}

        <button
          onClick={handleRoof}
          className="btn normal-case bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
        >
          +
        </button>
      </div>

      <Link
        href="/system"
        className="btn normal-case w-96 animate-none no-animation my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
      >
        Next
      </Link>

      <h1 className="text-3xl font-semibold">Do you have questions?</h1>
      <p className="my-3">We are happy to talk to you!</p>
      <div className="flex gap-5 items-center">
        <div>
          <Image
            className="w-16"
            src="https://www.dakvergroeners.nl/bestanden/text-editor/dakvergroeners-contact-modified.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div>
          <Link href="tel:0251-745-045" className="flex items-center gap-1">
            <PiPhoneCallThin />
            <p className="text-lime-600	text-sm">0251-745 045</p>
          </Link>
          <Link
            href="mailto:info@dakvergroeners.nl"
            className="flex items-center gap-1"
          >
            <CiMail />
            <p className="text-lime-600	text-sm">info@dakvergroeners.nl</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dilmension;
