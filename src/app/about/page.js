"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import styled from 'styled-components';
import "./styles.css"
import {useRouter, redirect} from 'next/navigation'

export default function About() {
  return (
    <div className="h-full w-full">
      <div className="absolute left-0 top-0 h-[100%] w-[100%] bg-[#2D2D2D]">
        <AboutBar></AboutBar>
        <div className="absolute left-[15%] w-[30%] h-[85%] invisible md:visible">
          <div className="relative top-[25%] justify-center align-middle flex rounded-2xl h-[35%]">
            <img src="/pozaEuSuparatSquare.png" className="rounded-full border-solid border-3 border-blue-500" alt="Profile"></img>
          </div>
          <div className="absolute top-[65%] h-[20%] left-[0%] w-[100%]  z-2">
            <div className="relative top-0 flex justify-center align-middle font-semibold md:text-3xl name md:font-bold bg-gradient-to-r from-green-600 to-blue-700 text-transparent bg-clip-text h-[50%]">
              Radu Milicin
            </div>
            {/* <br></br> */}
            <div className="relative top-[0%] flex justify-center items-center font-medium md:text-2xl text-center profession md:font-semibold bg-gradient-to-r from-green-600 to-blue-700 text-transparent bg-clip-text h-[50%]">
              Software developer
            </div>
          </div>
        <div className="relative top-[50%] flex justify-center items-center flex-row text-2xl font-bold text-blue-700 h-[10%] gap-2">
          <div className="relative flex flex-col basis-1/3 lg:basis-1/4 h-full items-center justify-center hover:border-2 hover:border-[#7D7D7D] rounded-xl invisible md:visible" 
            onClick={() => { console.log("Clicked on LinkedIn"); window.location.href = "https://www.linkedin.com/in/radu-milicin/"; }}>
            <img src="./RinkedIn.png" className="relative flex items-center justify-center min-h-[50%] md:max-w-[100%] md:max-h-[100%] img-height" alt="LinkedIn"></img>
          </div>
          <div className="relative flex flex-col basis-1/3 lg:basis-1/4 h-full items-center justify-center hover:border-2 hover:border-[#7D7D7D] rounded-xl invisible md:visible" 
            onClick={() => { console.log("Clicked on GitHub"); window.location.href = "https://github.com/radumilicin"; }}>
            <img src="./gh_perfect.png" className="relative flex items-center justify-center min-h-[50%] md:max-w-[50%] md:max-h-[50%] img-height" alt="GitHub"></img>
          </div>
          <div className="relative flex flex-col basis-1/3 lg:basis-1/4 h-full items-center justify-center hover:border-2 hover:border-[#7D7D7D] rounded-xl invisible md:visible" 
            onClick={() => { console.log("Clicked on LinkedIn"); window.location.href = "https://www.instagram.com/radu_milicin/"; }}>
            <img src="./Instaguramo.png" className="relative flex items-center justify-center min-h-[50%] md:max-w-[70%] md:max-h-[70%] img-height" alt="LinkedIn"></img>
          </div>
        </div>
      </div>
      <div className="absolute top-[15%] left-[55%] w-[35%] h-[80%] invisible md:visible">
        <div className="relative top-[18%] h-[10%] w-full text-3xl greetings font-bold bg-gradient-to-r from-green-600 to-blue-700 text-transparent bg-clip-text greetingAnimation">
          Hi, I'm Radu! <br></br>
        </div>  
        <div className="relative top-[28%] h-[60%] w-full text-sm font-medium  md:text-base description text-blue-700 ">
          I have a BSc in Computer Science at Radboud University. I decided to create this app to fuse my 2 passions: music and programming. Being a guitar player for more than 10 years alongside the constant strive to become better at the instrument made me understand the importance of music theory from composition to improvisation. I hope this app will help you in your journey.
        </div>
      </div>  
      <div className="absolute top-[2%]"> </div>
      <Logo2></Logo2>
      {/* <Logo></Logo> */}
      <PhoneViewAbout></PhoneViewAbout>
        
        {/* <div className="absolute top-[82%] left-0 w-full h-[5%] z-2">
          <div className="relative top-0 left-0 w-[100%] h-[100%] justify-center align-middle flex text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
            READ MORE
          </div>
          <div className="relative top-[25%] left-0 w-[100%] h-[100%] justify-center align-middle flex">
            <img src="/ReadMore2.png" id="readMore" alt="Read More"></img>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export function Logo2() {
  return (
    <div className="absolute top-[4%] left-[2%] w-[50%] h-[6%] flex visible">
      <div className="relative flex flex-col max-h-[100%] w-[80%] justify-center items-center">
        <img src="./FretboardDojo Logo.png" alt="logo" />
      </div>
    </div>
  );
}

// export function Logo() {
//   return (
//     <div className="absolute top-[12%] w-full max-h-[20%] flex justify-center invisible md:visible">
//       <div className="flex items-center justify-center max-w-[45%] h-[100%]">
//         <img src="./FretboardDojo Logo.png" alt="logo" />
//       </div>
//     </div>
//   );
// }

function PhoneViewAbout(){
  return (
    <div className="relative flex flex-col items-center justify-start w-full top-[12%] h-[80%] visible md:invisible">
      <div className="flex flex-row basis-1/3 justify-center items-center top-0 max-w-[40%] max-h-[40%] border-3 border-blue-700 rounded-full">
        <div className="w-full h-full top-0 flex flex-row items-center justify-center">
          <img src="/pozaEuSuparatSquare.png" className="top-0 w-full h-full rounded-full"></img>
        </div>
      </div>
      <div className="flex flex-col basis-1/4 justify-center items-center">
        <div className="flex basis-1/3 items-center justify-center text-2xl font-semibold bg-gradient-to-r from-green-600 name2 to-blue-700 text-transparent bg-clip-text">Radu Milicin</div>
        <div className="flex basis-1/3 items-center justify-center text-xl font-semibold bg-gradient-to-r from-green-600 profession2 to-blue-700 text-transparent bg-clip-text">Software Developer</div>
      </div>
      <div className="relative top-[0%] basis-1/8 flex justify-center items-center flex-row text-2xl font-bold text-blue-700 h-[10%] gap-4">
        <div className="relative flex flex-col basis-1/3 h-full w-[80px] items-center justify-center hover:border-2 hover:border-[#7D7D7D] rounded-xl visible md:invisible" 
          onClick={() => { console.log("Clicked on LinkedIn"); window.location.href = "https://www.linkedin.com/in/radu-milicin/"; }}>
          <img src="./RinkedIn.png" className="relative flex items-center justify-center min-w-[40px] min-h-[40px] md:min-w-[50px] md:min-h-[50px]" alt="LinkedIn"></img>
        </div>
        <div className="relative flex flex-col basis-1/3 h-full w-[80px] items-center justify-center hover:border-2 hover:border-[#7D7D7D] rounded-xl visible md:invisible" 
          onClick={() => { console.log("Clicked on GitHub"); window.location.href = "https://github.com/radumilicin"; }}>
          <img src="./gh_perfect.png" className="relative flex items-center justify-center max-w-[40px]  max-h-[40px] md:max-w-[50px] md:max-h-[50px]" alt="GitHub"></img>
        </div>
        <div className="relative flex flex-col basis-1/3 h-full w-[80px] items-center justify-center hover:border-2 hover:border-[#7D7D7D] rounded-xl visible md:invisible" 
          onClick={() => { console.log("Clicked on GitHub"); window.location.href = "https://www.instagram.com/radu_milicin/"; }}>
          <img src="./Instaguramo.png" className="relative flex items-center justify-center max-w-[40px]  max-h-[40px] md:max-w-[50px] md:max-h-[50px]" alt="GitHub"></img>
        </div>
      </div>
      <div className="relative flex flex-col font-medium text-blue-700 left-0 w-[60%] h-[20%]"> 
        <div className="relative top-[10%] text-md left-0 flex items-center descriptionVertical justify-center text-center overflow-ellipsis">
          I decided to create this app to fuse my 2 passions: music and programming. Being a guitar player for more than 10 years alongside the constant strive to be better made me understand the importance of music theory from composition to improvisation. I hope this app will help you in your journey.
        </div>
      </div>
    </div>
  );
}

function AboutBar() {

    const router = useRouter()

    return (
      <div className="relative flex flex-row left-[72%] w-[28%] top-[4%] h-[6%] md:top-[4%] md:left-[76%] md:w-[24%] lg:left-[82%] lg:w-[18%] bg-[#3D3D3D] z-1 rounded-l-2xl">
        <div className="relative h-[100%] w-[100%] hover:bg-[#727272] hover:rounded-l-2xl flex top-0 basis-1/2 justify-center items-center text-[#929292] text-sm font-bold lg:text-md xl:text-xl 2xl:text-2xl md:font-semibold" onClick={() => {console.log("BACK HOME!"); router.push('/')}}>
          {/* HOME */}
          HOME
        </div>
        {/* <div className="relative top-0 w-[10px] bg-[#3D3D3D] h-[100%] z-2"></div> */}
        <div className="relative flex h-[100%] w-[100%] hover:bg-[#727272] top-0 basis-1/2 justify-center items-center text-[#929292] text-sm font-bold lg:text-md xl:text-xl 2xl:text-2xl md:font-semibold" onClick={() => {console.log("Now should be in the about route"); router.push('/about')}}>
          {/* ABOUT */}
          ABOUT
        </div>
      </div>
    );
  }