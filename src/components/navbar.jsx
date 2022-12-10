import React from "react";
import Paw from "../assets/icons/paws.png";

const Navbar = () => {
    return (
        <nav className="flex justify-between py-12 px-12 sticky top-0">
            <div className="h-[50px] w-[50px]">
                <img src={Paw} alt="Paws" />
            </div>
            <div className="font-nunito space-x-6 text-[18px] font-semibold">
                <span className="line-through hover:underline">About</span>
                <span className="line-through hover:underline">Projects</span>
            </div>
        </nav>
    )
}
export default Navbar