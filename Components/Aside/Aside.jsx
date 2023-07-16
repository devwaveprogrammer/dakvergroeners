import Image from 'next/image'
import React from 'react'

const Aside = () => {
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
          </div>
          <div>
            <p>1,000 sqm</p>
            <p>200m</p>
          </div>
        </div>
      </div>
  
  )
}

export default Aside
