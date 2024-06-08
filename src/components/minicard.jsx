import React from 'react'
import Burger from "../assets/images/Burger-Builder.png";
import { Link } from 'react-router-dom';


function MiniCard(props) {
    return (<React.Fragment >
        <Link className="cursor-pointer">
            <div className='border-slate-200 bg-white shadow-lg hover:shadow-xl backdrop-blur-lg backdrop-filter mx-4 my-4 border rounded-lg font-main cursor-pointer overflow-hidden'>
                <img src={ Burger } />
                <p className='px-2 py-2 font-bold text-3xl text-black text-center hover:underline'>{ props.title }</p>
                <p className='px-2 py-2 font-medium text-black text-center text-lg'>{ props.desc }</p>
            </div></Link>
    </React.Fragment>);
}

export default MiniCard;