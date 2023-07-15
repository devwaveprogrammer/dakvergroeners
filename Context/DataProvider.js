"use client";

const { createContext, useState } = require("react");

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [length, setLength] = useState("5");
  const [width, setWidth] = useState("7");
  const [surface, setSurface] = useState("");
  const [circumference, setCircumference] = useState("");
  const [toggle, setToggle] = useState(true);

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
  };

  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
}
