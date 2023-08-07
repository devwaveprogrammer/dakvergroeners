"use client";

import { DataContext } from '@/src/Context/DataProvider'
import Image from 'next/image'
import React, { useContext } from 'react'

const Aside = () => {
  const { surface, circumference, price, title, dataa } = useContext(DataContext)
  const Postage = 59

  // Calculate totalSurface and totalCircumference only if dataa has elements
  const totalSurface = dataa?.length > 0 ? dataa.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.surface;
  }, 0) : 0;

  // Sum up all circumference values
  const totalCircumference = dataa?.length > 0 ? dataa.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.circumference); // Use parseFloat to convert strings to numbers
  }, 0) : 0;

  return (
    <div className="bg-gray-100 pb-24 ">
      <div className="relative">
        <Image src="/roof-3@2x.png" width={300} height={500} className="pt-20 absolute right-48" alt=''></Image>
      </div>
      <div className="pt-96 pl-10" >
        <h3 className="text-xl font-semibold">Your Green Roof</h3>
      </div>
      {!surface ?
        <div className='bg-[#fcf8e3] w-72'>
          <p className='p-5'>Unfortunately, we cannot yet <br /> calculate your green roof. First enter <br /> the dimensions and other options.</p>
        </div>
        :
        <div>
          <div className="flex px-10 pt-5 justify-between text-sm">
            <div>
              <p>Surface</p>
              <p>Circumference</p>
              {title >0 && 
              <p>{title}</p>
              }
            </div>
            <div>
              <p>{totalSurface} sqm</p>
              <p>{totalCircumference}m</p>
              {
                price >0 &&
              <p>€ {price}</p>
              }
            </div>
          </div>
          <hr />
          <div className="flex px-10 pt-5 justify-between text-sm">
            <div>
              <p>Postage costs</p>
              <p className='font-bold'>Total</p>
            </div>
            <div>
              <p>€ 59.00</p>
              <p className='font-bold'>€ {(price * surface) + Postage}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Aside;
