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
  console.log("🚀 ~ file: Obstacles.jsx:13 ~ Obstacles ~ obstacles:", obstacles[0])

  const [checkedItems, setCheckedItems] = useState([]);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  const handleCheckboxChange = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };
  const calculateArea = (value1, value2) => {
    const area = parseFloat(value1) * parseFloat(value2);
    return isNaN(area) ? 0 : area; // Handle NaN case
  };
  
  const handleAddInput = (obstacle) => {
    const updatedObstacles = obstacles.map((ob) =>
      ob.name === obstacle.name
        ? {
            ...ob,
            inputCount: ob.inputCount + 1,
            inputList: [
              ...ob.inputList,
              {
                id: Date.now(),
                name: obstacle.name + " " + ob.inputCount,
                total: total1 + total2,
                inputValue1: "1.00", // Add default value here
                inputValue2: "1.00", // Add default value here
              },
            ],
            totalArea: calculateArea(total1, total2),
          }
        : ob
    );
    setObstacles(updatedObstacles);
  };


  const handleDeleteInput = (obstacle, id) => {
    if (obstacle.inputCount > 0) {
      const updatedObstacles = obstacles.map((ob) =>
        ob.name === obstacle.name
          ? {
              ...ob,
              inputList: ob.inputList.filter((inputItem) => inputItem.id !== id),
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
              {checkedItems.includes(obstacle.name) && obstacle.inputList.map((item, index) => (
  <div key={item.id}>
    <input 
      defaultValue={item.inputValue1} // Set the value here
      onChange={(e) => setTotal1(e.target.value)}
      type="text" placeholder="Type here" className="input input-bordered max-w-xs" />
    <input
      defaultValue={item.inputValue2} // Set the value here
      onChange={(e) => setTotal2(e.target.value)}
      type="text" placeholder="Type here" className="input input-bordered max-w-xs ml-2" />
    <button className="ml-2" onClick={() => handleDeleteInput(obstacle, item.id)}>
      <BsTrash />
    </button>
   
  </div>
))}







              </div>
              {checkedItems.includes(obstacle.name) && (
                <button
                  onClick={() => {
                    handleAddInput(obstacle);
                  }}
                  className="btn bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
                >
                  +
                </button>
              )}
            </li>
          ))}
        </ul>

        <NPButton />
      </div>
    </div>
  );
};

export default Obstacles;
