import React from 'react'
import {EXPERIENCES} from "../constants/index.js"
import {motion} from "framer-motion"
function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4 pt-10 md:pt-4'>
    <motion.h1
      whileInView={{opacity:1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
       
     className='my-20 text-center text-4xl'>Experience</motion.h1>
   <div>
    {
        EXPERIENCES.map( (exp,index)=>{
           return <div key={index}
            className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
               whileInView={{opacity:1, x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
       
            
            className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'> {exp.duration}</p>
            </motion.div>
            <motion.div 
               whileInView={{opacity:1, x:0}}
              initial={{opacity:0,x:100}}
               transition={{duration:1.5}}
       
            
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{exp.role} - <span className='text-sm text-purple-100'>{exp.company}</span></h6>
                <p className='mb-4 text-neutral-400'>{exp.description}</p>
                {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                  <ul className="mb-4 list-disc pl-5 text-neutral-400">
                    {exp.highlights.map((point, highlightIndex) => (
                      <li key={highlightIndex} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 mb-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
            </motion.div>



            </div>
        })
    }
   </div>

      
    </div>
  )
}

export default Experience
