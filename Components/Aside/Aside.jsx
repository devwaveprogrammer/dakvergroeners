"use client"

import { DataContext } from '@/Context/DataProvider'
import Image from 'next/image'
import React, { useContext } from 'react'

const Aside = () => {
  const {surface,circumference,price,title} = useContext(DataContext)
  const Postage = 59
  return (
   
      <div className="bg-gray-100 pb-24 "> 
      <div className="relative">
        <Image src="/roof-3@2x.png" width={300} height={500} className="pt-20 absolute right-48"></Image>
        
      </div>
      <div className="pt-96 pl-10" >
          <h3 className="text-xl font-semibold">Your Green Roof</h3>
        </div>
        <div className="flex px-10 pt-5 justify-between text-sm">
          <div>
            <p>Surface</p>
            <p>Circumference</p>
            <p>{title}</p>
          </div>
          <div>
            <p>{surface} sqm</p>
            <p>{circumference}m</p>
            <p >€ {price}</p>
          </div>
        </div>
        <hr/>
        <div className="flex px-10 pt-5 justify-between text-sm">
          <div>
            <p>Postage costs	</p>
            <p className='font-bold'>Total</p>
           
          </div>
          <div>
            <p>€ 59.00</p>
            <p className='font-bold'>€ {(price * surface) + Postage}</p>
            
          </div>
        </div>
      </div>
  
  )
}

export default Aside
