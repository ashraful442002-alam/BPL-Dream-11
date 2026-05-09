import React from 'react';
import dollarImg from "../../assets/dollar 1.png"
const Navbar = ({ coins }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl font-bold font-serif text-[#7689de]">
                    BPL Dream 11
                </a>
            </div>
            <div className="flex-none">
                <button className="flex justify-between items-center gap-2 font-bold text-xl">
                    <img src={dollarImg} alt="" />{coins} Coins
                    
                </button>
            </div>
        </div>
    );
};

export default Navbar;