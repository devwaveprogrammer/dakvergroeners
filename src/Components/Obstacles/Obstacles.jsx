"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsTrash } from 'react-icons/bs';

const Obstacles = () => {
  const [obstacles, setObstacles] = useState([
    { name: 'Skylight', inputCount: 0 },
    { name: 'Solar panel', inputCount: 0 },
    { name: 'Flue', inputCount: 0 },
    { name: 'Other obstacle', inputCount: 0 },
  ]);
  
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };
  const [inputCount, setInputCount] = useState(0);

  // Handle adding an input box
  const handleAddInput = (obstacle) => {
    const updatedObstacles = obstacles.map((ob) =>
      ob.name === obstacle.name ? { ...ob, inputCount: ob.inputCount + 1 } : ob
    );
    setObstacles(updatedObstacles);
  };
  

  // Handle deleting an input box
  const handleDeleteInput = () => {
    if (inputCount > 0) {
      setInputCount(inputCount - 1);
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
          <button className="ml-2" onClick={() => handleDeleteInput(obstacle)}> <BsTrash /></button>
        </div>
      ))}
    </div>
    {checkedItems.includes(obstacle.name) && (
      <button onClick={() => handleAddInput(obstacle)} className="btn bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg">
        +
      </button>
    )}
  </li>
))}

        </ul>
        <div className="ml-10">
          <Link
            href="/obstacles"
            className="btn  no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
            style={{ transition: 'background-color 0.3s, box-shadow 0.3s ' }}
          >
            <BsArrowLeft className="text-xl no-animation" /> Previous Step
          </Link>
          <Link
            href="/waterdrainage"
            className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white"
          >
            Next Step <BsArrowRight className="text-xl no-animation" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Obstacles;