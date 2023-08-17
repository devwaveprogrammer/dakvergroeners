"use client"
import NPButton from '@/src/utils/NPButton';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsTrash } from 'react-icons/bs';

const Obstacles = () => {
  const [obstacles, setObstacles] = useState([
    { name: 'Skylight', inputCount: 0, inputList: [] },
    { name: 'Solar panel', inputCount: 0, inputList: [] },
    { name: 'Flue', inputCount: 0, inputList: [] },
    { name: 'Other obstacle', inputCount: 0, inputList: [] },
  ]);
  console.log("🚀 ~ file: Obstacles.jsx:10 ~ Obstacles ~ inputList:", obstacles[0].inputList)
  
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };
  
  // const [items, setItems] = useState(0)
  // console.log("🚀 ~ file: Obstacles.jsx:26 ~ Obstacles ~ items:", items)

 // Handle adding an input box
 const handleAddInput = (obstacle) => {
  const updatedObstacles = obstacles.map((ob) =>
    ob.name === obstacle.name
      ? { ...ob, inputCount: ob.inputCount + 1, inputList: [...ob.inputList, ob.inputCount] }
      : ob
  );
  setObstacles(updatedObstacles);
};

// Handle deleting an input box for a specific obstacle
const handleDeleteInput = (obstacle, index) => {
  console.log("🚀 ~ file: Obstacles.jsx:41 ~ handleDeleteInput ~ index:", index);
  if (obstacle.inputCount > 0) {
    const updatedObstacles = obstacles.map((ob) =>
      ob.name === obstacle.name
        ? {
            ...ob,
          
            inputList: ob.inputList.filter((item) => item !== index), // Use !== to filter out the specified index
          }
        : ob
    );
    setObstacles(updatedObstacles);
  }

};
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4">
        <div className="items-start justify-between sm:flex">
          <div>
            <h4 className="text-gray-800 text-2xl font-semibold">Do you have obstacles on your roof?</h4>
            <p className="mt-2 text-gray-600 text-base sm:text-sm">
              Choose from the following obstacles to add to your roof, the number of m² is deducted from the green roof.
              We always place a gravel edge of 10 cm around the obstacles!
            </p>
          </div>
        </div>
        <ul className="mt-12 divide-y">
        {obstacles.map((obstacle, idx) => (
  <li key={idx} className="py-5">
    <div className="flex gap-3 items-start justify-between">
      <div>
        <span className="block text-xl text-gray-700 font-semibold">{obstacle.name}</span>
      </div>
      <input
        type="checkbox"
        className="toggle"
        checked={checkedItems.includes(obstacle.name)}
        onChange={() => handleCheckboxChange(obstacle.name)}
      />
    </div>
     <div>
     {[...Array(obstacle.inputCount)].map((_, index) => (
        <div key={index}>
          <input type="text" placeholder="Type here" className="input input-bordered max-w-xs" />
          <input type="text" placeholder="Type here" className="input input-bordered max-w-xs ml-2" />
          <button className="ml-2" onClick={() => handleDeleteInput(obstacle, index)}> <BsTrash /></button>
        </div>
      ))}
              </div>
              {checkedItems.includes(obstacle.name) && (
  <button onClick={() => {
    
    handleAddInput(obstacle)}} className="btn bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg">
    +
  </button>
)}

  </li>
))}

        </ul>
     
          <NPButton/>
        
      </div>
    </div>
  );
};

export default Obstacles;