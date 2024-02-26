// import React from 'react'

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <>
            <div className="bg-[#000000]">
                <div className="">
                    <h1 className="text-white text-center font-smibold text-3xl font-[Lora] md:pt-0">My Project</h1>
                </div>
                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-fit mx-auto mt-8">
                    <ProjectCard
                        img="img/notes.png"
                        title="Notes App"
                        description="akjgdkajgfkajsgfakgd lkahd auhd fsjdagfladsjkadiu ljadsg agd aydg"
                        link="#"
                    />
                    <ProjectCard
                        img="img/notes.png"
                        title="Notes App"
                        description="akjgdkajgfkajsgfakgd lkahd auhd fsjdagfladsjkadiu ljadsg agd aydg"
                        link="#"
                    />
                    <ProjectCard
                        img="img/notes.png"
                        title="Notes App"
                        description="akjgdkajgfkajsgfakgd lkahd auhd fsjdagfladsjkadiu ljadsg agd aydg"
                        link="#"
                    />
                </div>
            </div>
        </>
    )
}
