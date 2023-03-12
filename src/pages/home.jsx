import React from 'react';
import './css/home.css';

function home() {
    return ( 
        <>  
  
            <section className='content px-4'>
                    <div>
                    <div className='grid place-items-center text-center text-[50px]'>
                        <div><span className='font-lora'>I'm <span className='font-cat'>Saakshi Raut</span>.</span></div>
                    </div>
                    <div className='grid place-items-center h-[500px] text-[350px] font-mont font-black '>
                        <div className='flex invisible md:visible'><span className='font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FF0000] to-[#FFFFFF] tracking-wide'>HO</span><span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#2730FF] to-[#FFFFFF] tracking-wide'>LA</span></div>
                    </div>
                    </div>
                    <div className=''>
                        
                    </div>
            </section>
        </>
     );
}

export default home;