"use client";

const { createContext, useState } = require("react");

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [surface, setSurface] = useState("");
  const [circumference, setCircumference] = useState("");
  const [toggle, setToggle] = useState(true);

  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState(0);

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
    price,
    setPrice,
    title,
    setTitle,
  };

  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
}
