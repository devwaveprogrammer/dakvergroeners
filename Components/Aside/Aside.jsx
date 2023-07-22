'use client'

import { useContext, useEffect } from 'react'
import Image from 'next/image'
import { DataContext } from '@/Context/DataProvider'

const Aside = () => {
  const {
    surface,
    circumference,
    price,
    title,
    setSurface,
    setCircumference,
    setTitle,
  } = useContext(DataContext);
  const Postage = 59;

  // Get values from localStorage
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("roof-layouts"));
    if (localStorageData && localStorageData.length > 0) {
      const { area, circumference, title } = localStorageData[0];
      setSurface(area);
      setCircumference(circumference);
      setTitle(title);
    }
  }, []);


  const total = ((price * surface) + Postage).toFixed(2)
  return (
    <div className="bg-gray-100 pb-24">
      <div className="relative">
        <Image
          src="/roof-3@2x.png"
          width={300}
          height={500}
          className="pt-20 absolute right-48"
        />
      </div>
      <div className="pt-96 pl-10">
        <h3 className="text-xl font-semibold">Your Green Roof</h3>
      </div>
      {!surface ? (
        <div className="bg-[#fcf8e3] w-72">
          <p className="p-5">
            Unfortunately, we cannot yet <br /> calculate your green roof.
            First enter <br /> the dimensions and other options.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex px-10 pt-5 justify-between text-sm">
            <div>
              <p>Surface</p>
              <p>Circumference</p>
            {
              title &&
            <p>{title}</p>
            }  
            </div>
            <div>
              <p>{surface} sqm</p>
              <p>{circumference}m</p>
              {
                price ?
              <p>€ {price}</p>
              :
              <p></p>
              }
            </div>
          </div>
          <hr />
          <div className="flex px-10 pt-5 justify-between text-sm">
            <div>
              <p>Postage costs</p>
              <p className="font-bold">Total</p>
            </div>
            <div>
              <p>€ 59.00</p>
              <p className="font-bold">€ {total}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aside;