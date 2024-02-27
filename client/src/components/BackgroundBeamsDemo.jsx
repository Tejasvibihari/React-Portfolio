"use client";
// import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import HeroContent from "./HeroContent";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">

            <HeroContent />
            <BackgroundBeams />
        </div>
    );
}
