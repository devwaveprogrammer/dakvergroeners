"use client"
import { DataContext } from "@/src/Context/DataProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
const {setPages, pages} = useContext(DataContext)
  const FormTitles=[
    {
      id:"0",
      name:"Dilmension",
      link:"/"
    },
    {
      id:"1",
      name:"System",
      link:"/system"
    },
    {
      id:"2",
      name:"Gravel Strip",
      link:"/gravelstripe"
    },
    {
      id:"3",
      name:"Obstacles",
      link:"/obstacles"
    },
    {
      id:"4",
      name:"Water Drainage",
      link:"/waterdrainage"
    },
    {
      id:"5",
      name:"Fertillizer",
      link:"/fertillizer"
    },
    {
      id:"6",
      name:"Mooring",
      link:"/mooring"
    },
    {
      id:"7",
      name:"Complete",
      link:"/complete"
    }
   
  ]


  return (
    <div>
      <div className="navbar bg-base-100 border py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <a>Item 12</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case w-48 ">
            <img src="/logo.svg" alt="" />
          </a>
        </div>
       <div className="navbar-center hidden lg:flex text-md font-bold breadcrumbs">
  <ul className="">
    {
      FormTitles?.map(title => (
        <li key={title.id} className={`pr-2 ${pages === parseInt(title.id) ? 'text-blue-600' : ''}`}>
         <a onClick={() => setPages(parseInt(title.id))}>{title.name}</a>
        </li>
      ))
    }
  </ul>
</div>

        <div className="navbar-end gap-5">
          <button 
          disabled={pages == 0}
          onClick={()=>{setPages((currPage)=>currPage - 1)}} className="btn text-xl">
            <AiOutlineArrowLeft />
          </button>
          <button 
          disabled={pages == FormTitles.length -1}
          onClick={()=>{setPages((currPage)=>currPage + 1)}} className="btn text-xl">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
