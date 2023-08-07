"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { DataContext } from "@/src/Context/DataProvider";

const Dilmension = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [surface, setSurface] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [current, setCurrent] = useState(true);
  const [dataa, setDataa] = useState();

  const [buttonText, setButtonText] = useState(
    "I prefer to fill in the surface and perimeter"
  );
 
  function getDataFromLocalStorageAndSetDataa() {
    const storedRoofLayouts = localStorage.getItem("roof-layouts");
    if (storedRoofLayouts) {
      try {
        const parsedArray = JSON.parse(storedRoofLayouts);
        setDataa(parsedArray); // Assuming you have a function named setDataa to set the data.
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    } else {
      console.warn("No data found in localStorage for key 'roof-layouts'");
    }
  }
  

 
  useEffect(() => {
    // const storedRoofLayouts = localStorage.getItem("roof-layouts");
    // const parsedArray = JSON.parse(storedRoofLayouts);
    // setDataa(parsedArray);
    getDataFromLocalStorageAndSetDataa()
  },[]);

  const roofLayouts = [
    {
      current: current,
      layout: "rectangle",
      method: "sizes",
      width: width,
      length: length,
      surface: surface,
      circumference: circumference,
    }
  ]
  useEffect(() => {
    const storedRoofLayouts = localStorage.getItem("roof-layouts");
    
    if (!storedRoofLayouts) {
        localStorage.setItem("roof-layouts", JSON.stringify(roofLayouts)) 

        getDataFromLocalStorageAndSetDataa()
       
    } else {
      const parsedArray = JSON.parse(storedRoofLayouts);
      setDataa(parsedArray)
        const selectedObj = parsedArray.find((obj) => obj?.current === true);
  
        if (selectedObj) {
            if (length !== selectedObj.length) {
                setLength(selectedObj.length);
            }

            if (width !== selectedObj.width) {
                setWidth(selectedObj.width);
            }
        }
    }
},[]);


  useEffect(() => {
    const parsedArrayeee = JSON.parse(localStorage.getItem("roof-layouts"));
    const updatedArray = parsedArrayeee.map((obj) => {
      if (obj?.current === true) {
        const updatedObj = {
          ...obj,
          width: width,
          length: length,
          surface: surface,
          circumference: circumference,
        };
        return updatedObj;
      }
      return obj;
    });
    localStorage.setItem("roof-layouts", JSON.stringify(updatedArray));

    const calculatedSurface = length * width;
    const calculatedCircumference =
      2 * (parseFloat(length) + parseFloat(width));
    setSurface(calculatedSurface);
    setCircumference(calculatedCircumference);

  }, [length, width,surface,circumference]);

  const toggleCalculation = () => {
    if (toggle) {
      setToggle(false);
      setButtonText("I prefer to enter length and width");
    } else {
      setToggle(true);
      setButtonText("I prefer to fill in the surface and perimeter");
    }
  };
 
const handleRoof=(index)=>{
  let data = JSON.parse(localStorage.getItem("roof-layouts"));

data.forEach((item, i) => {
  // Set the 'current' property to true for the selected index and false for others
  item.current = i === index;
});
  
// Store the updated data back into localStorage
localStorage.setItem("roof-layouts", JSON.stringify(data));
}
  const handleAddRoof = () => {
    let data = JSON.parse(localStorage.getItem("roof-layouts"));
    data = data.map((obj) => {
      return { ...obj, current: false };
    });
    const roofLayout = {
      current: true,
      layout: "rectangle",
      method: "sizes",
      width: 0,
      length: 0,
      surface: 0,
      circumference: 0,
    };
    data.push(roofLayout);
    localStorage.setItem("roof-layouts", JSON.stringify(data));
    getDataFromLocalStorageAndSetDataa()
    setWidth(0);  
    setLength(0);
    setCircumference(0)
    setSurface(0)
 
    // setDataa(data)
   
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
  value={dataa?.find((item) => item.current === true)?.[toggle ? "length" : "surface"] }
  onChange={(e) => setLength(e.target.value)}
  className="input input-bordered max-w-xs focus:outline-none w-44"
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
  value={dataa?.find((item) => item.current === true)?.[toggle ? "width" : "circumference"] }
  onChange={(e) => setWidth(e.target.value)}
  className="input input-bordered max-w-xs focus:outline-none w-44"
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
          <button
          onClick={() => handleRoof(index)} 
          key={index} className="btn btn-outline mr-5 no-animation  
          focus:btn-primary 
          focus:btn-outline 
          ">
            Roof {index + 1}
          </button>
        ))}

        <button
          onClick={handleAddRoof}
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
