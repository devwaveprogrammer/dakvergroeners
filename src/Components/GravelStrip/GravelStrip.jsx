"use client"
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/src/Context/DataProvider';
import NPButton from '@/src/utils/NPButton';

const GravelStrip = () => {
    const [gravelStrip, setGravelStrip] = useState(null);
    const [selectCardIndex, setSelectedCardIndex] = useState(0);
    const { setGravelTitle, setGravelPrice } = useContext(DataContext);

    const handleCardClick = (index, title, price) =>{
            setSelectedCardIndex(index)
            setGravelTitle(title);
              setGravelPrice(price);
    };


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/gravelstrip.json");
            const data = await res.json();
            setGravelStrip(data);

            if (data && data.length > 0  ) {
              const initialCard = data[selectCardIndex];
      
              setGravelTitle(initialCard?.gTitle);
              setGravelPrice(initialCard?.price);
              
            }
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
            gravelStrip?.map((card, index) => <div key={index} className={`flex rounded-md mr-10 my-10 cursor-pointer bg-gray-200 gap-3  shadow-xl ${
              index === selectCardIndex
              
            }`}
            onClick={(e) =>handleCardClick(index, card?.gTitle, card?.price)}
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
                 <Image className="rounded-l-lg" src={card?.img} width={150} height={80} alt=""/>
                  </div>  
              <div className="pr-5">
                <h1 className="text-base font-semibold pt-5">{card?.title}</h1>
                <p className="text-xs font-semibold">{card?.decs}</p>
              
            </div>
          </div>)
        }
        </div>
       <NPButton/>
      
    </div>
  )
}

export default GravelStrip
