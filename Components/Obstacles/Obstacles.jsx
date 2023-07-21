'use client'

import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Obstacles = () => {
  const members = [
   ' Skylight', 'Solar panel', 'flue', 'Other obstacle'
]
  return (
    <div>
       <div className="max-w-2xl mx-auto px-4">
        <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-800 text-2xl font-semibold">Do you have obstacles on your roof?
</h4>
                <p className="mt-2 text-gray-600 text-base sm:text-sm">Choose from the following obstacles to add to your roof, the number of m² is deducted from the green roof. We always place a gravel edge of 10 cm around the obstacles!

</p>
            </div>
           
        </div>
        <ul className="mt-12 divide-y">
            {
                members.map((item, idx) => (
                    <li key={idx} className="py-5 flex items-start justify-between">
                        <div className="flex gap-3">
                            
                            <div>
                                <span className="block text-xl text-gray-700 font-semibold">{item}</span>
                                
                            </div>
                        </div>
                        <input type="checkbox" className="toggle"  />
                    </li>
                ))
            }
        </ul>
        <div className='ml-10'>
   <Link
          href="/obstacles"
          className="btn  no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
          style={{ transition: "background-color 0.3s, box-shadow 0.3s " }}
        >
          <BsArrowLeft className="text-xl no-animation" /> Previous Step
        </Link>
        <Link
          href="/waterdrainage"
          className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white "
        >
          Next Step <BsArrowRight className="text-xl no-animation" />
        </Link>
   </div>
    </div>
   
    </div>
  )
}

export default Obstacles
