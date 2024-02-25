// import React from 'react';

export default function Header() {
    return (
        <nav className="bg-red-950 w-full text-white px-10 mx-auto flex justify-between items-center z-30"> {/* Increased z-index to 30 */}
            <div className="font-semibold py-4">
                Tejasvi Kumar
            </div>
            <div>
                <ul className="md:flex hidden py-4">
                    <li className="px-4 items-center cursor-pointer">Home</li>
                    <li className="px-4 items-center cursor-pointer">About</li>
                    <li className="px-4 items-center cursor-pointer">Projects</li>
                    <li className="px-4 items-center cursor-pointer">Contact</li>
                </ul>
            </div>
            <div className="md:hidden">
                <i className="fa-solid fa-bars cursor-pointer"></i>
            </div>
        </nav>
    );
}
