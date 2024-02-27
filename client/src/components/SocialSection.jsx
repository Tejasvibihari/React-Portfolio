// import React from 'react'

export default function SocialSection() {
    return (
        <>
            <div className='bg-black text-white text-center pb-12' id="social_section">
                <div>
                    <h1 className="text-white text-center font-smibold text-3xl font-[Lora] md:pt-0 pt-6 pb-6">Connect with me</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-4 gap-4 max-w-md">
                        <div className="">
                            <a href={social.github.url}>
                                <img src={social.github.image} className="w-[65px] p-1" alt="Github Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.linkedin.url}>
                                <img src={social.linkedin.image} className="w-[65px] p-1" alt="LinkedIn Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.twitter.url}>
                                <img src={social.twitter.image} className="w-[65px] p-1" alt="Twitter Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.instagram.url}>
                                <img src={social.instagram.image} className="w-[65px] p-1" alt="Instagram Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="max-w-60 mt-6">
                        <img src="./img/tejasvisign.webp" />
                    </div>
                </div>
            </div >
        </>
    )
}

const social = {
    github:
    {
        "id": 1,
        "name": "Github",
        "url": "https://github.com/Tejasvibihari",
        "image": "./img/social/github.webp"
    },
    linkedin:
    {
        "id": 2,
        "name": "Linked In",
        "url": "https://www.linkedin.com/in/tejasvi-bihari/",
        "image": "./img/social/linkedin.webp"
    },
    instagram:
    {
        "id": 1,
        "name": "Twitter",
        "url": "https://www.instagram.com/tejasvi_bihari/",
        "image": "./img/social/instagram.webp"
    },
    twitter:
    {
        "id": 1,
        "name": "Instagram",
        "url": "https://twitter.com/tejasvi_Bihari",
        "image": "./img/social/x.webp"
    },
}