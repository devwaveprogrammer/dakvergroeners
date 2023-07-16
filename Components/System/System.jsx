"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';


const System = () => {
  const [systemData, setSystemData] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/systems.json");
      const data = await res.json();
      setSystemData(data);
    };

    fetchData();
  }, []);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl mb-5 font-bold">Calculate your green roof here</h1>
        <p>All <span className="text-lime-600 underline">green roof systems</span> offer excellent insulation, reduce the risk of flooding, are energy-saving, and require little maintenance. Above all, you will, of course, get a beautiful green view.</p>
      </div>
      <div className="flex gap-5 pr-10">
        {systemData?.map((card, index) => (
          <div
            key={card?.id}
            className={`card rounded-md p-0  border-gray-400 hover:border-red-400 hover:cursor-pointer border-2 shadow-xl ${index === selectedCardIndex ? 'border-green-500' : 'border-gray-400'}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="relative">
            <input
                type="radio"
                name="radio-5"
                className="radio radio-success absolute left-2 top-10"
                checked={index === selectedCardIndex}
              />
            </div>
            <button className="bg-lime-600 rounded-md m-2 font-semibold text-white">{card?.mostChosen}</button>
            <Image src={card?.img} alt="productPicture" width={300} height={200} className="pt-5" />
            <div className="card-body p-0 pl-2">
              <h2 className="card-title font-semibold text-sm ">{card?.title}</h2>
              {card?.features?.map((feature, featureIndex) => (
                <p className="p-2" key={featureIndex}>{feature}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
      <Link href="/system" className="btn normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg" style={{ transition: 'background-color 0.3s, box-shadow 0.3s ' }}>
      <BsArrowLeft className="text-xl"/>   Previos Step 
    </Link>
      <Link href="/system" className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white " >
      Next Step <BsArrowRight className="text-xl"/>
    </Link>
      </div>
    </div>
  );
};

export default System;
