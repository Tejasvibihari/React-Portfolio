// import React from 'react'

export default function WorkSection() {
    return (
        <>
            <div className='bg-black text-white text-center pt-16'>
                <div>
                    <h1 className="text-white text-center font-smibold text-3xl font-[Lora] md:pt-0 pt-6">Work Experience</h1>
                </div>
                <div className='grid gap-5 md:grid-cols-2 grid-cols-1 mx-auto md:max-w-5xl max-w-fit py-7 mt-10' style={{
                    background:
                        "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }}>
                    <div className='flex flex-row items-center justify-center border-slate-700 border-[1px] m-4'>
                        <img src="./img/logo/nainsoftech.webp" className='my-12 px-12 w-96' alt='Nainsoftech logo' />
                    </div>
                    <div className='m-4'>
                        <div className='flex flex-row items-start items-center justify-between'>
                            <h1 className='text-2xl font-bold'>Work
                                Nain Softech
                            </h1>
                            <span className='text-sm  text-gray-400'>
                                Feb 2023 - December 2023
                            </span>
                        </div>
                        <div className='flex flex-col items-start justify-between'>
                            <h1 className='text-sm text-gray-400 mt-1'>Work
                                Web Developer
                            </h1>
                            <ul className='text-left list-disc mt-4'>
                                <li className='text-sm'>Developed and maintained websites using HTML, CSS, Bootstrap JavaScript, and PHP</li>
                                <li className='text-sm'>Worked on the development of the company website and other Doctor projects</li>
                                <li className='text-sm'>Worked as a Project Manager</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
