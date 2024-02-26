"use client";

// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[35rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
            "./img/logo/nodejs.png",
        title: "Node Js",
    },
    {
        quote: "./img/logo/reactjs.png",
        title: "React",
    },
    {
        quote: "./img/logo/expressjs.png",
        title: "Express",
    },
    {
        quote: "./img/logo/mongodb.png",
        title: "Mongo Db",
    },
    {
        quote: "./img/logo/bootstrap.png",
        title: "Bootstrap",
    },
    {
        quote: "./img/logo/tailwind.png",
        title: "Tailwind CSS",
    },
    {
        quote: "./img/logo/ejs.png",
        title: "EJS",
    },
    {
        quote: "./img/logo/git.png",
        title: "Git",
    },
];
