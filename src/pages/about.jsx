import React, { Component } from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './css/about.css'

function About() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Hello, Saakshi here, a computer engineering student studying and working in Mumbai, India. "], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        });

        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);
    return ( 
        <>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="foreground"></div>
            <div className='container py-20 px-20'>
                {/* TITLE */}
                <div className='title w-full flex justify-end '>
                    <span className='text-3xl font-semibold font-mont'>ABOUT</span>
                    <br/>
                </div>
                <div className='title2 w-full flex justify-end '>
                    <hr className="w-1/2 h-0.5 my-4 bg-black border-0" />
                    <br/>
                </div>
                {/* INTRODUCTION */}
                <div className='intro flex px-20 py-32 '> 
                    <span className='auto-type font-lora text-xl lg:w-2/3 font-regular space-y-2'>
                        <span ref={el}></span>
                        <p>I'm an AI | ML enthusiast and a web designer/developer specializing in front-end development. In my free time, I like to contribute to open-source projects.</p>
                        <p>And I believe that aliens do exist 👾.</p>
                    </span>
                </div>
                {/* LAST LINES */}
                <div className='my-32'>
                    <div className='title2 w-full grid space-y-1.5 '>
                        <hr className="w-full h-0.5  bg-black border-0" />
                        <hr className="w-3/4 h-0.5 bg-black border-0" />
                        <br/>
                    </div>
                </div>
            </div>
           
        </>
     );
}

export default About;