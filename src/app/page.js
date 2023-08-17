// import Dilmension from "../Components/Dilmension/Dilmension";
"use client"
import { useContext } from "react";
import Dilmension from "../Components/Dilmension/Dilmension";

import { DataContext } from "../Context/DataProvider";
import System from "../Components/System/System";
import GravelStrip from "../Components/GravelStrip/GravelStrip";
import Obstacles from "../Components/Obstacles/Obstacles";
import WaterDrainage from "../Components/WaterDrainage/WaterDrainage";
import Fertillizer from "../Components/Fertillizer/Fertillizer";
import Mooring from "../Components/Mooring/Mooring";
import Complete from "../Components/Complete/Complete";




export default function Home() {

  const {pages} = useContext(DataContext)

  const PageDisplay = ()=>{
    if(pages === 0){
      return  <Dilmension />
    }
    else if(pages === 1){
      return <System/>
    }
    else if(pages === 2){
      return <GravelStrip/>
    }
    else if(pages === 3){
      return <Obstacles/>
    }
    else if(pages === 4){
      return <WaterDrainage/>
    }
    else if(pages === 5){
      return <Fertillizer/>
    }
    else if(pages === 6){
      return <Mooring/>
    }
    else {
      return <Complete/>
    }
  }


  return (
    <div className="pl-20">
     {PageDisplay()}
 </div>
  )
}
