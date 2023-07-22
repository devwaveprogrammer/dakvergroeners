"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Obstacles = () => {
  const [selectedObstacles, setSelectedObstacles] = useState([]);
  const [skylightItems, setSkylightItems] = useState([]);
  const [solarPanelItems, setSolarPanelItems] = useState([]);
  const [flueItems, setFlueItems] = useState([]);
  const [otherItems, setOtherItems] = useState([]);

  const handleObstacleToggle = (obstacle) => {
    if (selectedObstacles.includes(obstacle)) {
      setSelectedObstacles(
        selectedObstacles.filter((item) => item !== obstacle)
      );

      switch (obstacle) {
        case "Skylight":
          setSkylightItems([]);
          break;
        case "Solar panel":
          setSolarPanelItems([]);
          break;
        case "flue":
          setFlueItems([]);
          break;
        case "Other obstacle":
          setOtherItems([]);
          break;
        default:
          break;
      }
    } else {
      setSelectedObstacles([...selectedObstacles, obstacle]);
    }
  };

  const handleAddItem = (obstacle) => {
    const newItem = { input1: "", input2: "" };

    switch (obstacle) {
      case "Skylight":
        setSkylightItems([...skylightItems, newItem]);
        break;
      case "Solar panel":
        setSolarPanelItems([...solarPanelItems, newItem]);
        break;
      case "flue":
        setFlueItems([...flueItems, newItem]);
        break;
      case "Other obstacle":
        setOtherItems([...otherItems, newItem]);
        break;
      default:
        break;
    }
  };

  const handleDeleteItem = (obstacle, index) => {
    switch (obstacle) {
      case "Skylight":
        setSkylightItems(skylightItems.filter((_, idx) => idx !== index));
        break;
      case "Solar panel":
        setSolarPanelItems(solarPanelItems.filter((_, idx) => idx !== index));
        break;
      case "flue":
        setFlueItems(flueItems.filter((_, idx) => idx !== index));
        break;
      case "Other obstacle":
        setOtherItems(otherItems.filter((_, idx) => idx !== index));
        break;
      default:
        break;
    }
  };

  const handleInputChange = (obstacle, index, type, value) => {
    switch (obstacle) {
      case "Skylight":
        const updatedSkylightItems = [...skylightItems];
        updatedSkylightItems[index][type] = value;
        setSkylightItems(updatedSkylightItems);
        break;
      case "Solar panel":
        const updatedSolarPanelItems = [...solarPanelItems];
        updatedSolarPanelItems[index][type] = value;
        setSolarPanelItems(updatedSolarPanelItems);
        break;
      case "flue":
        const updatedFlueItems = [...flueItems];
        updatedFlueItems[index][type] = value;
        setFlueItems(updatedFlueItems);
        break;
      case "Other obstacle":
        const updatedOtherItems = [...otherItems];
        updatedOtherItems[index][type] = value;
        setOtherItems(updatedOtherItems);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4">
        {/* Rest of the code */}

        <ul className="mt-12 divide-y">
          {/* Skylight */}
          <li>
            <div className="py-5 flex items-start justify-between">
              {/* Label */}
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">
                    Skylight
                  </span>
                </div>
              </div>
              {/* Toggle switch */}
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes("Skylight")}
                onChange={() => handleObstacleToggle("Skylight")}
              />
            </div>
            {/* Items */}
            {selectedObstacles.includes("Skylight") && (
              <div>
                {skylightItems.map((item, index) => (
                  <div key={index} className="flex items-center mt-3">
                    {/* Input 1 */}
                    <input
                      type="text"
                      className="px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 1"
                      value={item.input1}
                      onChange={(e) =>
                        handleInputChange(
                          "Skylight",
                          index,
                          "input1",
                          e.target.value
                        )
                      }
                    />
                    {/* Input 2 */}
                    <input
                      type="text"
                      className="ml-2 px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 2"
                      value={item.input2}
                      onChange={(e) =>
                        handleInputChange(
                          "Skylight",
                          index,
                          "input2",
                          e.target.value
                        )
                      }
                    />
                    {/* Delete button */}
                    <button
                      className="text-red-600 ml-3"
                      onClick={() => handleDeleteItem("Skylight", index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {/* Add button */}
                <button
                  className="btn btn-primary text-white mt-3"
                  onClick={() => handleAddItem("Skylight")}
                >
                  Add Item
                </button>
              </div>
            )}
          </li>

          {/* Rest of the obstacles */}
          {/* Solar panel */}
          <li>
            <div className="py-5 flex items-start justify-between">
              {/* Label */}
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">
                    Solar panel
                  </span>
                </div>
              </div>
              {/* Toggle switch */}
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes("Solar panel")}
                onChange={() => handleObstacleToggle("Solar panel")}
              />
            </div>
            {/* Items */}
            {selectedObstacles.includes("Solar panel") && (
              <div>
                {solarPanelItems.map((item, index) => (
                  <div key={index} className="flex items-center mt-3">
                    {/* Input 1 */}
                    <input
                      type="text"
                      className="px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 1"
                      value={item.input1}
                      onChange={(e) =>
                        handleInputChange(
                          "Solar panel",
                          index,
                          "input1",
                          e.target.value
                        )
                      }
                    />
                    {/* Input 2 */}
                    <input
                      type="text"
                      className="ml-2 px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 2"
                      value={item.input2}
                      onChange={(e) =>
                        handleInputChange(
                          "Solar panel",
                          index,
                          "input2",
                          e.target.value
                        )
                      }
                    />
                    {/* Delete button */}
                    <button
                      className="text-red-600 ml-3"
                      onClick={() => handleDeleteItem("Solar panel", index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {/* Add button */}
                <button
                  className="btn btn-primary text-white mt-3"
                  onClick={() => handleAddItem("Solar panel")}
                >
                  Add Item
                </button>
              </div>
            )}
          </li>
          {/* Flue */}
          <li>
            <div className="py-5 flex items-start justify-between">
              {/* Label */}
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">
                    Flue
                  </span>
                </div>
              </div>
              {/* Toggle switch */}
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes("Flue")}
                onChange={() => handleObstacleToggle("Flue")}
              />
            </div>
            {/* Items */}
            {selectedObstacles.includes("Flue") && (
              <div>
                {flueItems.map((item, index) => (
                  <div key={index} className="flex items-center mt-3">
                    {/* Input 1 */}
                    <input
                      type="text"
                      className="px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 1"
                      value={item.input1}
                      onChange={(e) =>
                        handleInputChange(
                          "Flue",
                          index,
                          "input1",
                          e.target.value
                        )
                      }
                    />
                    {/* Input 2 */}
                    <input
                      type="text"
                      className="ml-2 px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 2"
                      value={item.input2}
                      onChange={(e) =>
                        handleInputChange(
                          "Flue",
                          index,
                          "input2",
                          e.target.value
                        )
                      }
                    />
                    {/* Delete button */}
                    <button
                      className="text-red-600 ml-3"
                      onClick={() => handleDeleteItem("Flue", index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {/* Add button */}
                <button
                  className="btn btn-primary text-white mt-3"
                  onClick={() => handleAddItem("Flue")}
                >
                  Add Item
                </button>
              </div>
            )}
          </li>

          {/* Other obstacle */}
          <li>
            <div className="py-5 flex items-start justify-between">
              {/* Label */}
              <div className="flex gap-3">
                <div>
                  <span className="block text-xl text-gray-700 font-semibold">
                    Other obstacle
                  </span>
                </div>
              </div>
              {/* Toggle switch */}
              <input
                type="checkbox"
                className="toggle"
                checked={selectedObstacles.includes("Other obstacle")}
                onChange={() => handleObstacleToggle("Other obstacle")}
              />
            </div>
            {/* Items */}
            {selectedObstacles.includes("Other obstacle") && (
              <div>
                {otherItems.map((item, index) => (
                  <div key={index} className="flex items-center mt-3">
                    {/* Input 1 */}
                    <input
                      type="text"
                      className="px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 1"
                      value={item.input1}
                      onChange={(e) =>
                        handleInputChange(
                          "Other obstacle",
                          index,
                          "input1",
                          e.target.value
                        )
                      }
                    />
                    {/* Input 2 */}
                    <input
                      type="text"
                      className="ml-2 px-2 py-1 border border-gray-300 rounded"
                      placeholder="Input 2"
                      value={item.input2}
                      onChange={(e) =>
                        handleInputChange(
                          "Other obstacle",
                          index,
                          "input2",
                          e.target.value
                        )
                      }
                    />
                    {/* Delete button */}
                    <button
                      className="text-red-600 ml-3"
                      onClick={() => handleDeleteItem("Other obstacle", index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {/* Add button */}
                <button
                  className="btn btn-primary text-white mt-3"
                  onClick={() => handleAddItem("Other obstacle")}
                >
                  Add Item
                </button>
              </div>
            )}
          </li>
        </ul>

        <Link
          href="/gravelstripe"
          className="btn no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
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
  );
};

export default Obstacles;
