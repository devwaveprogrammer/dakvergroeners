'use client'
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Obstacles = () => {
  const [selectedObstacles, setSelectedObstacles] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  const handleObstacleToggle = (obstacle) => {
    if (selectedObstacles.includes(obstacle)) {
      setSelectedObstacles(selectedObstacles.filter((item) => item !== obstacle));
      // Remove the corresponding item from addedItems if exists
      const updatedItems = addedItems.filter((item) => item.obstacle !== obstacle);
      setAddedItems(updatedItems);
    } else {
      setSelectedObstacles([...selectedObstacles, obstacle]);
    }
  };

  const handleAddItem = (obstacle) => {
    const newItem = { obstacle, input1: '', input2: ''  };
    setAddedItems([...addedItems, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...addedItems];
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
  };

  const handleInputChange = (index, type, value) => {
    const updatedItems = [...addedItems];
    updatedItems[index][type] = value;
    setAddedItems(updatedItems);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4">
        {/* Rest of the code */}
        <ul className="mt-12 divide-y">
          <li>
            <div className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">Skylight</span>
                </div>
              </div>
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes('Skylight')}
                onChange={() => handleObstacleToggle('Skylight')}
              />
            </div>
              
            {addedItems.map((item, index) => (
              <div key={index} className="flex items-center mt-3">
                <input
                  type="text"
                  className="px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 1"
                  value={item.input1}
                  onChange={(e) => handleInputChange(index, 'input1', e.target.value)}
                />
                <input
                  type="text"
                  className="ml-2 px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 2"
                  value={item.input2}
                  onChange={(e) => handleInputChange(index, 'input2', e.target.value)}
                />
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            {selectedObstacles.includes('Skylight') && (
              <button
                className="btn btn-primary"
                onClick={() => handleAddItem('Skylight')}
              >
                Add Item
              </button>
            )}
          </li>
          <li>
            <div className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">Solar panel</span>
                </div>
              </div>
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes('Solar panel')}
                onChange={() => handleObstacleToggle('Solar panel')}
              />
            </div>
              
            {addedItems.map((item, index) => (
              <div key={index} className="flex items-center mt-3">
                <input
                  type="text"
                  className="px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 1"
                  value={item.input1}
                  onChange={(e) => handleInputChange(index, 'input3', e.target.value)}
                />
                <input
                  type="text"
                  className="ml-2 px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 2"
                  value={item.input2}
                  onChange={(e) => handleInputChange(index, 'input4', e.target.value)}
                />
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            {selectedObstacles.includes('Solar panel') && (
              <button
                className="btn btn-primary"
                onClick={() => handleAddItem('Solar panel')}
              >
                Add Item
              </button>
            )}
          </li>
          <li>
            <div className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">flue</span>
                </div>
              </div>
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes('flue')}
                onChange={() => handleObstacleToggle('flue')}
              />
            </div>
              
            {addedItems.map((item, index) => (
              <div key={index} className="flex items-center mt-3">
                <input
                  type="text"
                  className="px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 1"
                  value={item.input1}
                  onChange={(e) => handleInputChange(index, 'input5', e.target.value)}
                />
                <input
                  type="text"
                  className="ml-2 px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 2"
                  value={item.input2}
                  onChange={(e) => handleInputChange(index, 'input6', e.target.value)}
                />
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            {selectedObstacles.includes('flue') && (
              <button
                className="btn btn-primary"
                onClick={() => handleAddItem('flue')}
              >
                Add Item
              </button>
            )}
          </li>
          <li>
            <div className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">Other obstacle</span>
                </div>
              </div>
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes('Other obstacle')}
                onChange={() => handleObstacleToggle('Other obstacle')}
              />
            </div>
              
            {addedItems.map((item, index) => (
              <div key={index} className="flex items-center mt-3">
                <input
                  type="text"
                  className="px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 1"
                  value={item.input1}
                  onChange={(e) => handleInputChange(index, 'input7', e.target.value)}
                />
                <input
                  type="text"
                  className="ml-2 px-2 py-1 border border-gray-300 rounded"
                  placeholder="Input 2"
                  value={item.input2}
                  onChange={(e) => handleInputChange(index, 'input8', e.target.value)}
                />
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            {selectedObstacles.includes('Other obstacle') && (
              <button
                className="btn btn-primary"
                onClick={() => handleAddItem('Other obstacle')}
              >
                Add Item
              </button>
            )}
          </li>
          {/* Repeat the same pattern for other obstacles */}
        </ul>
        <div className="ml-10">
          <button
            className="btn no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
            style={{ transition: "background-color 0.3s, box-shadow 0.3s " }}
          >
            <BsArrowLeft className="text-xl no-animation" /> Previous Step
          </button>
          <button
            className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white"
          >
            Next Step <BsArrowRight className="text-xl no-animation" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Obstacles;