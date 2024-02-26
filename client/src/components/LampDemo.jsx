"use client";
// import React from "react";   
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
    return (
        <>

            <LampContainer>

                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="md:max-w-3xl mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-lg text-lg"
                >
                    As a versatile full-stack developer, I bring expertise in a wide array of technologies, including React,
                    Node.js, MongoDB, Express.js, EJS, Tailwind CSS, and Bootstrap. With a passion for crafting robust and
                    innovative solutions, I have honed my skills through building diverse applications. From chat applications
                    to central authentication systems and job portals, I have tackled various challenges head-on, delivering
                    solutions that meet the needs of my clients.
                </motion.h1>
            </LampContainer></>
    );
}
