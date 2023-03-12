import React from 'react';
import Navbar from '../components/navbar';

function Projects() {
    function Card(props) {
        return <>
            <div class="w-full rounded overflow-hidden shadow-lg border h-md">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 font-lora">Project 1</div>
                </div>
                <div class="px-6 pb-4">
                    <p class="text-black text-base py-2">
                        Tech Stack: 
                    </p>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React JS</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Three JS</span>
                </div>
                <div className='buttons px-6 py-8 flex space-x-4 justify-center'>
                    <div className='relative w-32'>
                        <div className='absolute inset-0.5 bg-gradient-to-r from-red-500 to-indigo-500 opacity-75 blur'/>
                            <div className='relative bg-white text-black flex justify-center rounded-sm py-1'>
                                Github
                            </div>
                    </div>
                    <div className='relative w-32'>
                        <div className='absolute inset-0.5 bg-gradient-to-r from-red-500 to-indigo-500 opacity-75 blur'/>
                            <div className='relative bg-white text-black flex justify-center rounded-sm py-1'>
                                Link
                            </div>
                    </div>
                </div>
            </div>
        </>;
      }

    return ( <>
         <div className='grid lg:grid-cols-3 h-full w-full content-center justify-items-center sm:px-10 sm:py-4'>
            <div className='px-2 py-4 w-5/6'>
                <Card />
            </div>
            <div className='px-2 py-4 w-5/6'>
                <Card /> 
            </div>
            <div className='px-2 py-4 w-5/6'>
                <Card />
            </div>
         </div>
    </> );
}

export default Projects;