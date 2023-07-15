"use client"

const { createContext } = require("react");

export const DataContext = createContext()



export default function DataProvider({ children }) {

const info = {

}



  return (
    <div><DataContext.Provider value={info}>{children}</DataContext.Provider></div>
  )
}
