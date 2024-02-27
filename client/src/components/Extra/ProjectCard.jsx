import PropsTypes from "prop-types";

export default function ProjectCard({ img, title, description, link }) {
    return (
        <>
            <div className="max-w-96 overflow-hidden border-slate-700 border-[1px] bg-blend-soft-light hover:shadow-md hover:shadow-gray-500" style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <div className="max-w-full p-3">
                    <img src={img} className="w-full" alt="" />
                </div>
                <div className="flex flex-col items-start p-4">
                    <h3 className="text-white text-center text-[25px]">{title}</h3>
                    <p className="text-gray-400 text-[12.5px]">
                        {description}
                    </p>
                    <button className="flex mt-4">
                        <a href={link} className="px-4 py-3 hover:text-[#C084FC] hover:bg-white bg-[#71D9D3] hover:transition-colors ease-in-out hover:duration-700 text-black font-bold">
                            View Project<span className="">
                                <i className="px-2 fa-solid fa-arrow-right"></i>
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

ProjectCard.propTypes = {
    img: PropsTypes.string,
    title: PropsTypes.string,
    description: PropsTypes.string,
    link: PropsTypes.string,
}