"use client";

const { createContext, useState } = require("react");

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [surface, setSurface] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const [dataa, setDataa] = useState();

  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState(0);
  const [gravelPrice, setGravelPrice] = useState(0);
  const [gravelTitle, setGravelTitle] = useState(0);
  const [totalPrices, setTotalPrices] = useState(0);
  const [totalName, setTotalName] = useState([]);
  const [pages, setPages]= useState(0)

  const info = {
    length,
    setLength,
    width,
    setWidth,
    surface,
    setSurface,
    circumference,
    setCircumference,
    price,
    setPrice,
    title,
    setTitle,
    dataa,
    setDataa,
    totalPrices,
    setTotalPrices,
    gravelPrice,
    setGravelPrice,
    gravelTitle,
    setGravelTitle,
    totalName,
    setTotalName,pages, setPages
  };

  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
}
