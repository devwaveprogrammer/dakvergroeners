import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
        <li><a>Item 12</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case w-48 "><img src="/logo.svg"  alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex text-md font-bold breadcrumbs">
    <ul className="">
    <li className='pr-2'><Link href='/'>Dilmension</Link></li> 
    <li className='pr-2'><Link href='/system'>System</Link></li> 
    <li className='pr-2'><Link href='/system'>Gravel Strip</Link></li> 
    <li className='pr-2'><Link href='/system'>Obstacles</Link></li> 
    <li className='pr-2'><Link href='/system'>Water Drainage</Link></li> 
    <li className='pr-2'><Link href='/system'>Fertillizer</Link></li> 
    <li className='pr-2'><Link href='/system'>Mooring</Link></li> 
    <li className='pr-2'><Link href='/system'>Complete</Link></li> 
    
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn text-xl"><AiOutlineArrowLeft/></a>
    <a className="btn text-xl"><AiOutlineArrowRight/></a>
  </div>
</div>
    </div>
  )
}

export default Navbar
