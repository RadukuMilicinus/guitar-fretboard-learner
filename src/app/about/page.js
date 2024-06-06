import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function About() {
  return (
    <div className="h-full w-full">
      <div className="absolute left-0 top-0 h-[100%] w-[100%] bg-[#2D2D2D]">
        <div className="relative top-[25%] justify-center align-middle flex rounded-2xl h-[25%]">
          <img src="/pozaEuSuparatSquare.png" className="rounded-full" alt="Profile"></img>
        </div>
        <div className="absolute top-[55%] h-[20%] left-[20%] w-[60%] bg-[#7D7D7D] z-2"></div>
        <div className="absolute top-[90%] left-0 w-full h-[5%] z-2">
          <div className="relative top-0 left-0 w-[100%] h-[100%] justify-center align-middle flex">
            <motion.img 
              src="/ReadMore2.png" 
              className="relative flex justify-center align-middle w-[20%] h-[100%]" 
              alt="Read More"
              initial={{ y: 0 }}
              whileHover={{ y: 50 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}