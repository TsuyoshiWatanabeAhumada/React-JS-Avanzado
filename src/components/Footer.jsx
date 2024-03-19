import React, { useContext } from 'react'
import { IoHome } from "react-icons/io5";
import { BsCart4, BsList } from "react-icons/bs";
import { AppContext } from '../App';

const Footer = () => {

    const { setRoute } = useContext(AppContext);

  return (
    <footer className=' fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
        <div className=' bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition'  onClick={() => setRoute("Home")}>
        <IoHome />
        </div>
        <div className=' bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute("Shopping")}>
        <BsCart4 />
        </div>
        <div className=' bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute("TaskList")}>
        <BsList />
        </div>
    </footer>
  )
}

export default Footer
