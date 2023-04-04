import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";



const Contact = () => {
    const link = [
        {
            id: 1,
            child: (
                <>
                    <FaInstagram size={25} color="white" />
                </>
            ),
            links: "https://www.instagram.com/noirr334/"

        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={25} color="white" />
                </>
            ),
            links: "https://github.com/juancj1"

        },
        {
            id: 3,
            child: (
                <>
                    <CgMail size={27} color="white" />
                </>
            ),
            links: "mailto:juan.cerah_ti20@nusaputra.ac.id"

        },


    ];
    return (
        <div>
            <div
                name="contact"
                className="w-full h-[90vh] bg-gray-600 p-4 text-white"
            >
                <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            Contact
                        </p>
                    </div>

                    <div className=" flex justify-center items-center">
                        <form
                            action="https://getform.io/f/6e094239-5eb3-4732-92e2-ebca300cbbb7"
                            method="POST"
                            className=" flex flex-col w-full md:w-1/2"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="10"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            ></textarea>

                            <button className="text-black bg-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                Kirim
                            </button>
                        </form>
                    </div>

                </div>


            </div>

            <div className="p-4 bg-gray-600 h-[13vh]">

                <div className=" flex justify-center mb-2 text-white">
                    ©copyright by juan cerah joseph
                </div>
                <ul className="flex justify-center gap-3">
                    {link.map(({ id, links, child }) => (
                        <li >
                            <a href={links} target="_blank" rel="noopener noreferrer">
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    );
};

export default Contact;