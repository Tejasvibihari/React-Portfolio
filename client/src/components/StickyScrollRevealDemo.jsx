"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Auth for To-do-List",
        description:
            "This project focuses on developing a secure authentication system for a to-do list application using Node.js, Express, and MongoDB. Authentication is a crucial aspect of any web application, ensuring that only authorized users can access sensitive data or perform certain actions.",
        image: "./img/form.webp"
    },
    {
        title: "Real Estate Web App",
        description:
            "This project is a comprehensive real estate web application developed using Node.js, Express.js, MongoDB, and React. The application serves as a platform for users to browse, search, and discover real estate properties, facilitating the buying, selling, and renting of residential and commercial properties.",
        image: "./img/notes.png"
    },
    {
        title: "To do list",
        description:
            "This project is a modern To-Do List application developed using Node.js, Express.js, MongoDB, and React. The application allows users to create, read, update, and delete tasks, providing a seamless and intuitive interface for managing daily tasks and activities.",
        image: "./img/notes.png"
    },
    {
        title: "Blog Web App",
        description:
            "This project is a dynamic blog web application developed using Node.js, Express.js, MongoDB, and EJS (Embedded JavaScript). The application allows users to create, read, update, and delete blog posts, providing a platform for sharing thoughts, ideas, and experiences with a wider audience.",
        image: "./img/notes.png"
    }

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
