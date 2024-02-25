import { WavyBackground } from "./ui/wavy-background";
import { useState, useEffect } from "react";

export default function WavyBackgroundDemo() {
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
        <WavyBackground className="w-full mx-auto">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 text-center p-4 max-w-full md:mx-[150px]">
                <div className="flex flex-col mx-6 my-auto">
                    <h3 className="text-[#71D9D3] text-left font-semibold">Hello, I am Tejasvi Kumar</h3>
                    <div className="text-7xl font-[Anta] text-left text-white">
                        Craft, Code <br />
                        <span className="">
                            {currentText}
                        </span>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center h-full animate-bounce">
                    <img src="./public/img/tejasvi banner.webp" className="w-96" />
                </div>
            </div>
        </WavyBackground>
    );
}
