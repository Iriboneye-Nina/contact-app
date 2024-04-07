import React from "react";

import { IoMdContact } from "react-icons/io";

function Navbar() {
  return (
    <>
    <nav id="navigation" className=" bg-slate-400">
     <div id="contact" className="justify-center gap-60 h-20 text-center items-center flex">
       <a href="#" className="bold text-2xl">Contact</a>
       <a href="#">home</a>
    
     <div id="background" className="flex gap-4 bg-slate-200 h-16 text-center justify-center p-4">
     <div>
     <IoMdContact/>
     </div>
     <div> <span>Iriboneye Nina@gmail.com</span>
     </div>
    <div><button className="border-r text-center bg-black text-white rounded-md">Sign out</button>
    </div>
     
     </div>
     </div>
    </nav>
    </>
   
  )
}

export default Navbar
