import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-4xl text-center'
      >
        Technologies
      </motion.h1>   
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <FaHtml5 className='text-7xl' />
          <span className="mt-2 text-[16px]">HTML5</span>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <RiTailwindCssFill className='text-7xl text-cyan-400' />
          <span className="mt-2 text-[16px]">Tailwind CSS</span>
        </motion.div>

        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <FaCss3 className='text-7xl text-cyan-400' />
          <span className="mt-2 text-[16px]">CSS3</span>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <TbBrandJavascript className='text-7xl text-red-700' />
          <span className="mt-2 text-[16px]">JavaScript</span>
        </motion.div>


        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <RiReactjsLine className='text-7xl text-blue-500' />
          <span className="mt-2 text-[16px]">ReactJs</span>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <RiNextjsFill className='text-7xl' />
          <span className="mt-2 text-[16px]">NextJs</span>
        </motion.div>


        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <TbBrandRedux className='text-7xl text-cyan-400' />
          <span className="mt-2 text-[16px]">Redux</span>
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <FaNodeJs className='text-7xl text-cyan-400' />
          <span className="mt-2 text-lg">NodeJs</span>
        </motion.div>

        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <SiMongodb className='text-7xl text-green-500' />
          <span className="mt-2 text-[16px]">MongoDB</span>
        </motion.div>

        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <SiExpress className='text-7xl text-slate-900' />
          <span className="mt-2 text-[16px]">ExpressJs</span>
        </motion.div>

      
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <SiFirebase className='text-7xl text-yellow-600' />
          <span className="mt-2 text-[16px]"> Firebase</span>
        </motion.div>



      

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center'
        >
          <FaJava className='text-7xl text-red-700' />
          <span className="mt-2 text-lg">Java</span>
        </motion.div>
      </motion.div>   
    </div>
  )
}

export default Technologies
