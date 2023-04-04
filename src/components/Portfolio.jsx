import React from "react";
import Capture from "../assets/portfolio/Capture.PNG";
import mangcoding from "../assets/portfolio/mangcoding.PNG";


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Capture,
            demo: "https://juancj1.github.io",
            repos: "https://github.com/juancj1/juancj1.github.io"
        },
        {
            id: 2,
            src: mangcoding,
            demo: "https://juancj1.github.io/mangcoding/",
            repos: "https://github.com/juancj1/mangcoding"
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gray-600 w-full text-white sm:pt-32 md:pt-0 md:h-[70vh] flex justify-center"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">cek projek saya di sini</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, demo, repos, src }) => (
                        <div key={id} className="shadow-md shadow-white rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a href={demo} target="_blank" rel="noopener noreferrer">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button>
                                </a>

                                <a href={repos} target="_blank" rel="noopener noreferrer">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                                </a>

                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;