"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function WaterDrainage() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Water Drainage",
      img:"https://www.dakvergroeners.nl/lcms2/RESIZE/w158-h9999-c158x158-q90/bestanden/cache/store/dakvergroeners/352/bolrooster-rvs-o-8-cm.jpg",
      description:
        "The water drainage system in a building or other structure ensures that the flow of fresh",
      price: 39.99,
       quantity: 0,
    },
    {
      id: 2,
      name: "Water Drainage",
      img:"https://www.dakvergroeners.nl/lcms2/RESIZE/w158-h9999-c158x158-q90/bestanden/cache/store/dakvergroeners/258/groendak-bladvanger-kunststof.png",
      description:
        "The water drainage system in a building or other structure ensures that the flow of fresh",
      price: 49.99,
       quantity: 0,
    },
    {
      id: 3,
      name: "Water Drainage",
      img:"https://www.dakvergroeners.nl/lcms2/RESIZE/w158-h9999-c158x158-q90/bestanden/cache/store/dakvergroeners/356/groendak-tegelbladvanger-kunststof-excl-tegel.jpg",
      description:
        "The water drainage system in a building or other structure ensures that the flow of fresh",
      price: 59.99,
       quantity: 0,
    },
  ])
  return (
    <>
    <div className="grid grid-cols-2 gap-4">
        {
            data.map(item=> <div key={item?.id} class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
        <div class="w-1/3 bg-cover bg-landscape">
          <img
            src={item.img}
            alt=""
          />
        </div>
        <div class="w-2/3 p-4">
          <h1 class="text-2xl font-bold text-gray-900">{item.name}</h1>
          <p class="mt-2 text-sm text-gray-600">
           {item.description}
          </p>
          <p>€{item?.price} price</p>
          <div class="flex justify-end mt-3 gap-3">
  <input
    type="number"
    className="input input-bordered  focus:outline-none w-20"
    value={item.quantity}
    onChange={(e) => {
      // Handle input change and update quantity here
      const newQuantity = parseInt(e.target.value);
      if (!isNaN(newQuantity)) {
        // Ensure the newQuantity is a valid number
        const updatedData = data.map((product) =>
          product.id === item.id ? { ...product, quantity: newQuantity } : product
        );
        setData(updatedData); // Update the state with the new quantity
      }
    }}
  />
  <button
    className="btn normal-case border text-xl text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
    onClick={() => {
      // Handle quantity increase here
      const updatedData = data.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setData(updatedData); // Update the state with the new quantity
    }}
  >
    +
  </button>
  <button
    className="btn normal-case text-xl text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
    onClick={() => {
      // Handle quantity decrease here
      if (item.quantity > 0) {
        const updatedData = data.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        setData(updatedData); // Update the state with the new quantity
      }
    }}
  >
    -
  </button>
</div>

        </div>
      </div>)
        }
     
    
    </div>
    <div >
   <Link
          href="/waterdrainage"
          className="btn  no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
          style={{ transition: "background-color 0.3s, box-shadow 0.3s " }}
        >
          <BsArrowLeft className="text-xl no-animation" /> Previous Step
        </Link>
        <Link
          href="/fertillizer"
          className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white "
        >
          Next Step <BsArrowRight className="text-xl no-animation" />
        </Link>
   </div>
    </>
  );
}
