import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { PiPhoneCallThin } from 'react-icons/pi';
import { CiMail } from 'react-icons/ci';


const dilmension = () => {
  return (
    
      <div className="">
      <h1 className="text-2xl mb-5 font-bold">Calculate your green roof here</h1>
      <p className="mb-5">Follow the steps and request your quote, you can also order directly!</p>
      <h3 className="text-xl font-bold">How big is your roof?</h3>
      <div className="flex gap-6 mb-10">
      <div>
      <label className="label">
      <span className="label-text">Length</span>
      
      </label>
      <input type="number" placeholder="Type here" className="input input-bordered  max-w-xs focus:outline-none w-44 " />
      </div>
      <div>
      <label className="label">
      <span className="label-text">Width</span>
      
      </label>
      <input type="number" placeholder="Type here" className="input input-bordered max-w-xs  focus:outline-none w-44" />
      </div>
      </div>
      <button className="btn normal-case animate-pulse bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg" style={{ transition: 'background-color 0.3s, box-shadow 0.3s ' }}>
      I prefer to fill the area and perimeter</button>

      <h4 className="my-5 font-semibold">Here you can add multiple roofs</h4>
      <div className="">
        <button className="btn btn-outline mr-5">Roof 1</button>
        <button className="btn normal-case bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg" style={{ transition: 'background-color 0.3s, box-shadow 0.3s ' }}>+</button>
      </div>

      <Link href="/system" className="btn normal-case w-96 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg" style={{ transition: 'background-color 0.3s, box-shadow 0.3s ' }}>
      Next
    </Link>

    <h1 className="text-3xl font-semibold">Do you have questions?</h1>
    <p className="my-3">We are happy to talk to you!</p>
    <div className="flex gap-5 items-center">
      <div>
        <Image className="w-16" src="https://www.dakvergroeners.nl/bestanden/text-editor/dakvergroeners-contact-modified.png" width={500} height={500}></Image>
      </div>
      <div >
      <Link href="tel:0251-745-045" className="flex items-center gap-1" >
        <PiPhoneCallThin />
        <p className="text-lime-600	text-sm">0251-745 045</p>
    </Link>
      <Link href="mailto:info@dakvergroeners.nl" className="flex items-center gap-1" >
        <CiMail />
        <p className="text-lime-600	text-sm">info@dakvergroeners.nl</p>
    </Link>
      </div>
    </div>
    </div>
    
      
   
  )
}

export default dilmension
