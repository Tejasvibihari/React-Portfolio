"use client";

// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[35rem] flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "./img/logo/nodejs.webp",
        title: "Node Js",
    },
    {
        quote: "./img/logo/reactjs.webp",
        title: "React",
    },
    {
        quote: "./img/logo/expressjs.webp",
        title: "Express",
    },
    {
        quote: "./img/logo/mongodb.webp",
        title: "Mongo Db",
    },
    {
        quote: "./img/logo/bootstrap.webp",
        title: "Bootstrap",
    },
    {
        quote: "./img/logo/tailwind.webp",
        title: "Tailwind CSS",
    },
    {
        quote: "./img/logo/ejs.webp",
        title: "EJS",
    },
    {
        quote: "./img/logo/git.webp",
        title: "Git",
    },
];
