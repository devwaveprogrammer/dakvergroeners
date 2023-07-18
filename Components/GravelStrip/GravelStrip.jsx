"use client"
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import React, { useEffect, useState } from 'react'

const GravelStrip = () => {
    const [gravelStrip, setGravelStrip] = useState(null);
    const [selectCardIndex, setSelectedCardIndex] = useState(0);


    const handleCardClick = (index) =>{
            setSelectedCardIndex(index)
    };


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/gravelstrip.json");
            const data = await res.json();
            setGravelStrip(data);
        }
        fetchData()
    }, [])
  return (
    <div>
        <h1 className="text-2xl mb-5 font-bold">
        Do you want a gravel strip along your eaves?
        </h1>
        <p>
        We recommend installing a gravel strip of approx. 10 cm along your roof edge to prevent leakage.
        </p>

        <div className="flex">
        {
            gravelStrip?.map((card, index) => <div key={index} className={`flex rounded-md m-10 cursor-pointer bg-gray-200 gap-3  shadow-xl ${
              index === selectCardIndex
              
            }`}
            onClick={(e) =>handleCardClick(index)}
            >
              
                <div>
                <div className="relative">
                    <input 
                   
                    type="radio"
                    name="radio"
                    className="radio radio-success absolute left-5 top-5"
                    checked={index === selectCardIndex}
                   
                    />
                </div>
                 <Image src={card?.img} width={150} height={80}></Image> 
                  </div>  
              <div>
                <h1 className="text-base font-semibold pt-5">{card?.title}</h1>
                <p className="text-xs font-semibold">{card?.decs}</p>
              
            </div>
          </div>)
        }
        </div>
        <Link
          href="/system"
          className="btn no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
          style={{ transition: "background-color 0.3s, box-shadow 0.3s " }}
        >
          <BsArrowLeft className="text-xl no-animation" /> Previos Step
        </Link>
        <Link
          href="/obstacles"
          className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white "
        >
          Next Step <BsArrowRight className="text-xl no-animation" />
        </Link>
      
    </div>
  )
}

export default GravelStrip
