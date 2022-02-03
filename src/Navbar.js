import React from 'react';
import { NavLink } from 'react-router-dom';

import { VscDebugStepOver} from "react-icons/vsc";
const Navbar = () => {
  return <>
  <nav className="w-full py-3 bg-blue-800 nav">
    <div className='w-[80%] items-center text-white font-serif flex justify-between  mx-auto'>
    <span className='text-[1.9rem] animate-spin'><VscDebugStepOver/></span>
   
    
    <div className='w-[90%] text-right  md:w-[50%] text-lg lg:text-[2.5rem]  '> NEWS CENTER
   <h6 className='font-mono text-sm'> Best and Real News</h6>
   
    </div>
    </div>
</nav>
  </>;
};

export default Navbar;
