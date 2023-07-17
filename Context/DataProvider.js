"use client";

const { createContext, useState } = require("react");

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [length, setLength] = useState("5");
  const [width, setWidth] = useState("7");
  const [surface, setSurface] = useState("");
  const [circumference, setCircumference] = useState("");
  const [toggle, setToggle] = useState(true);

  const [selectedValues, setSelectedValues] = useState([]);

  const handleInputChange = (event, index) => {
    const inputValue = event.target.checked ? event.target.value : null;
    // console.log(`Input ${index + 1} value`, inputValue);
    setSelectedValues([inputValue,index])
    return
  };

  const info = {
    length,
    setLength,
    width,
    setWidth,
    surface,
    setSurface,
    circumference,
    setCircumference,
    toggle,
    setToggle,
    selectedValues,
    handleInputChange,
  };

  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
}
