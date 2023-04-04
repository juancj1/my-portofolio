import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gray-600 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-5">
                    saya seorang mahasiswa di Universitas Nusa putra sukabumi yang
                    masuk jurusan Teknik informatika saya memiliki sifat pekerja keras
                    dan senang belajar hal baru saya adalah seorang front end
                    developer yang belajar HTML, Tailwind, dan CSS. dan saya telah
                    membuat beberapa projek mengunakan ke tiga hal tersebut
                </p>

            </div>
        </div>
    );
};

export default About;