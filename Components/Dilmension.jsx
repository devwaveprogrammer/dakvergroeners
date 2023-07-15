import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { PiPhoneCallThin } from 'react-icons/pi';
import { CiMail } from 'react-icons/ci';


const dilmension = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <div className="col-span-2  pt-10">
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

      <button className="btn normal-case w-96 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg" style={{ transition: 'background-color 0.3s, box-shadow 0.3s ' }}>
      Next
    </button>

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
      {/* Main Devide */}
      <div className="bg-gray-100 "> 
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
    </div>
  )
}

export default dilmension
