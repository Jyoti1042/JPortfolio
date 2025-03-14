import React from 'react'
import aboutImg from "../assets/imgAbout.jpeg"
import { ABOUT_TEXT } from '../constants/index.js'
import{motion} from "framer-motion"

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4 pl-0 pr-0 md:pl-[6rem] md:pr-[6rem]">
      <h1 className="mt-7 mb-2 text-center text-4xl ">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <p className="my-2 py-6">{ABOUT_TEXT}</p>
      </div>
    </div>
  );
}

export default About

