"use client";
import React, { useContext } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { DataContext } from "../Context/DataProvider";

export default function NPButton() {
  const { setPages, pages } = useContext(DataContext);
  const FormTitles = [
    {
      id: "0",
      name: "Dilmension",
      link: "/",
    },
    {
      id: "1",
      name: "System",
      link: "/system",
    },
    {
      id: "2",
      name: "Gravel Strip",
      link: "/gravelstripe",
    },
    {
      id: "3",
      name: "Obstacles",
      link: "/obstacles",
    },
    {
      id: "4",
      name: "Water Drainage",
      link: "/waterdrainage",
    },
    {
      id: "5",
      name: "Fertillizer",
      link: "/fertillizer",
    },
    {
      id: "6",
      name: "Mooring",
      link: "/mooring",
    },
    {
      id: "7",
      name: "Complete",
      link: "/complete",
    },
  ];
  return (

<div>
{ pages == 0 ?
     <button
     disabled={pages == FormTitles.length - 1}
          onClick={() => {
            setPages((currPage) => currPage + 1);
          }}
     className="btn normal-case w-96 animate-none no-animation my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
   >
     Next
   </button> 
   :
    <div>
      <div className="flex items-center">
        <button
          disabled={pages == 0}
          onClick={() => {
            setPages((currPage) => currPage - 1);
          }}
          className="btn no-animation normal-case w-48 mr-8 animate-none my-5 bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white hover:shadow-lg"
          style={{ transition: "background-color 0.3s, box-shadow 0.3s " }}
        >
          <BsArrowLeft className="text-xl no-animation" /> Previous Step
        </button>
        <button
          disabled={pages == FormTitles.length - 1}
          onClick={() => {
            setPages((currPage) => currPage + 1);
          }}
          className="btn normal-case w-48 animate-none my-5 bg-red-400 hover:bg-red-400 hover:shadow-lg text-white "
        >
          Next Step <BsArrowRight className="text-xl no-animation" />
        </button>
      </div>
    </div>
}
</div>
  );
}
