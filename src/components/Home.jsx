import React from "react";
import asd from "../assets/asd.jpeg";
import cv from "../assets/cv.pdf";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gray-600"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center text-white h-full pr-5">
                    <h3>Nama</h3>
                    <h2 className="text-4xl sm:text-5xl font-bold ">
                        juan cerah joseph
                    </h2>
                    <p className=" py-4 max-w-md">
                        Front-end web developer
                    </p>

                    <div>


                        <a href={cv} target="_blank" rel="noopener noreferrer" >
                            <button className="text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer hover:scale-110 duration-300">
                                CV
                                </button>
                        </a>

                    </div>
                </div>

                <div>
                    <img
                        src={asd}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-96 "
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;