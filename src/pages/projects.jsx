import React, { Component } from 'react';
import rect1 from '../assets/images/Rectangle 2.png';
import rect2 from '../assets/images/Rectangle 3.png';
import rect3 from '../assets/images/Rectangle 4.png';
import rect4 from '../assets/images/Rectangle 5.png';

function Projects() {
    function Card(props) {
        return <>
            <div className='flex w-full h-full'>
                <div className='number flex font-lora text-4xl font-black pl-32 items-center h-full'>
                    <div className=''>
                        1. <br />
                        2. <br />
                        3. <br />
                    </div>
                </div>
                <div className='title flex items-center font-mont font-black leading-none -mx-56 text-8xl'>
                    <div className='-rotate-90 leading-none'>
                    <span >PORTFOLIO</span>
                    </div>
                </div>
                <div className='domain flex flex-col place-content-center items-end w-full text-lg space-y-1'>
                    <span className='px-2 font-lora text-xl font-bold'>Web Development</span>
                    <hr className="w-72 h-0.5 bg-black"></hr>
                    <span className='px-2'><i class="fa-solid fa-code-fork px-1"></i>
                    <i class="fa-sharp fa-solid fa-link"></i></span>
                </div>
            </div>
        </>;
      }

    return ( <>
    <div className='container flex h-full'>
        <div className='flex w-1/2'>
            <Card/>
        </div>
        <div className='images flex w-1/2 space-between-3 align-bottom items-end space-x-16'>
            <img src={rect3} alt='img' width='150px' className='h-full' />
            <img src={rect1} alt='img' width='100px' className='h-3/5'/>
            <img src={rect2} alt='img' width='150px' className='h-5/6'/>
            <img src={rect4} alt='img' width='100px' className='h-3/5'/>
        </div>
    </div>
    </> );
}

export default Projects;