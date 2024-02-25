import { useState, useEffect } from "react";

export default function HeroContent() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = ["Developer", "Designer", "Freelancer"]; // Array of words
    const delay = 2000;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentText(text[currentIndex]);
            setCurrentIndex((currentIndex + 1) % text.length); // Loop back to the beginning
        }, delay);

        return () => clearInterval(typingInterval);
    }, [text, delay]);

    return (
        <>
            <div className="grid gap-16 grid-cols-1 md:grid-cols-2 text-center p-4 max-w-full md:mx-[150px]">
                <div className="flex flex-col mx-6 my-auto">
                    <h3 className="text-[#71D9D3] text-left font-semibold">Hello, I am Tejasvi Kumar</h3>
                    <div className="text-7xl font-[Anta] text-left text-white">
                        Craft, Code <br />
                        <span className="">
                            {currentText}
                        </span>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-8 justify-items-start">
                        <button className="mx-2 hover:animate-bounce">
                            <a href="#contact" className="px-8 py-3 hover:text-[#C084FC] bg-[#71D9D3] hover:bg-white hover:transition-colors hover:ease-in-out hover:duration-700 text-black font-bold">
                                Download CV <span>
                                    <i className="fa-solid fa-arrow-down px-2 hover:animate-bounce font-bold"></i>
                                </span>
                            </a>
                        </button>
                        <button className="mx-2 hover:animate-bounce">
                            <a href="#contact" className="px-8 py-3 text-[#C084FC] bg-white hover:bg-[#71D9D3] hover:transition-colors ease-in-out hover:duration-700 hover:text-black font-bold">
                                Contact Me<span className="">
                                    <i className="px-2 fa-solid fa-user-tie"></i>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center h-full animate-[bounce_1s_infinite_ease-in-out]">
                    <img src="img/tejasvi banner.webp" className="md:w-96 w-80" />
                </div>
            </div>
        </>

    )
}
