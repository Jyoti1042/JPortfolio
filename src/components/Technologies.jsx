import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {RiReactjsLine} from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import {motion} from "framer-motion"

const iconVariants=(duration)=>({
     initial:{y:-10},
     animate:{
          y:[10,-10],
          transition:{
               duration:duration,
               ease:"linear",
               repeat:Infinity,
               repeatType:"reverse"
          }
     }
})



function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 
      whileInView={{opacity:1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
       
    
    className='my-20 text-4xl text-center'>Technologies</motion.h1>   
    <motion.div 

    whileInView={{opacity:1, x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
       
    
    className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
       initial="initial"
       animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaHtml5 className='text-7xl'></FaHtml5>
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
       initial="initial"
       animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
             <RiTailwindCssFill className='text-7xl text-cyan-400'></RiTailwindCssFill>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
       initial="initial"
       animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaCss3 className='text-7xl text-cyan-400'></FaCss3>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
             <TbBrandJavascript className='text-7xl text-red-700'></TbBrandJavascript>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
             <RiReactjsLine className='text-7xl text-blue-500'></RiReactjsLine>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
             <TbBrandRedux className='text-7xl text-cyan-400'></TbBrandRedux>
        </motion.div>
        <motion.div
        variants={iconVariants(8)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
             <SiExpress className='text-7xl text-slate-900'></SiExpress>
        </motion.div>
        <motion.div 
       variants={iconVariants(5)}
       initial="initial"
       animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
             <SiMongodb className='text-7xl text-green-500'></SiMongodb>
        </motion.div>
        <motion.div
        variants={iconVariants(7)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaNodeJs className='text-7xl text-cyan-400'></FaNodeJs>
        </motion.div>
        <motion.div
        variants={iconVariants(5.5)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaJava className='text-7xl text-red-700'></FaJava>
        </motion.div>
     </motion.div>   
    </div>
  )
}

export default Technologies
