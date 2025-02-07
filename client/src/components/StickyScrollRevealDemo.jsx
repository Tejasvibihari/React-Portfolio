"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Ai Powered Chrome Extension",
        description: "An innovative extension that scrapes, cleans, and accurately summarizes website content by removing ads and distractions while preserving key details. Built with Puppeteer, Gemini, ChatGPT, React, and Redux.",
        image: "./img/Ai Extension.webp"
    },
    {
        title: "Library Student Management System",
        description: "A MERN-based platform for managing student memberships, payments, and seat reservations with automated email notifications and real-time status updates.",
        image: "./img/LibraryManagement.webp"
    },
    {
        title: "Invoice And Inventory Management",
        description:
            "The app provides detailed analytics and reporting to help you make informed decisions and ensure that your inventory is always at optimal levels. With a clean and intuitive user interface.",
        image: "./img/invoice.png"
    },
    {
        title: "Auth for To-do-List",
        description:
            "This project focuses on developing a secure authentication system for a to-do list application using Node.js, Express, and MongoDB. Authentication is a crucial aspect of any web application, ensuring that only authorized users can access sensitive data or perform certain actions.",
        image: "./img/form.webp"
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10 bg-black">
            <div className="">
                <h1 className="text-white text-center font-smibold text-3xl font-[Lora] md:pt-0">My Project</h1>
            </div>
            <StickyScroll content={content} />

        </div>
    );
}
