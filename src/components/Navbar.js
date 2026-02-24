import React from 'react'

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TbFileCv } from "react-icons/tb"


function Navbar() {
  return (
    <nav className="mb-10 items-center flex justify-between py-[2px]">
          <div className="flex items-center flex-shrink-0">
          {/* <img className="mx-2 w-10"src={} alt="logo"></img> */}
          </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jyoti-choudhary6/" target="_blank" ><FaLinkedin></FaLinkedin></a>
            <a href="https://github.com/jyoti1042" target="_blank" ><FaGithub></FaGithub></a> 
            <a href="mailto:jchoudhary6767@gmail.com"><BiLogoGmail></BiLogoGmail></a>
            <a href="https://drive.google.com/file/d/1MyXatR9EItGbV26vPIV6jqCUGoZMjO8c/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><TbFileCv style={{width:"25px", height:"25px"}}> </TbFileCv></a> 
             </div>
           </nav>
  )
}

export default Navbar