import React from 'react'
import {HERO_CONTENT} from "../constants/index.js"
import profilePic from "../assets/myimage1.jpeg";
import {motion} from "framer-motion";

const container=(delay)=>({
     hidden:{x:-100,opacity:0},
     visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5, delay:delay}
     },
})

function Hero() {

  return (
    <div className="border-b   border-neutral-900 pb-4 lg:mb-35">
    <div className="flex-wrap flex">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
              
                 className="pb-16 text-6xl tracking-tighter lg:mt-16 lg:text-7xl">Jyoti Choudhary</motion.h1>
                <motion.span 
                 variants={container(0.5)}
                initial="hidden"
                animate="visible"
              
                
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text text-3xl tracking-tighter text-transparent'>Full Stack Developer</motion.span>
                 <motion.p 
                  variants={container(1)}
                initial="hidden"
                animate="visible"
              
                 className="my-2   max-w-xl py-6 font-300 tracking-tight">{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p-8 box-border:inset 0 0 70px 50px black">
        <div className="flex w-full  h-[450px] justify-center ">
            <motion.img 
            className="rounded-2xl w-5/12 shadow-custom-inset brightness-110"
             initial={{x:100,opacity:0}} 
             animate={{x:0,opacity:1}}
             transition={{duration:1,delay:1.2}}


            src={profilePic} alt="profilePic"></motion.img>
        </div>

        </div>
    </div>
      
    </div>
  )
}

export default Hero
