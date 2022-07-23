import React from "react";

const Hero = () => {
    return (
        <main className="bg-MidnightBlue text-white flex flex-row items-center justify-evenly pt-28 pb-4">
            <div className="w-80">
                <p className="text-4xl font-bold mb-8">IQBAL PAHLEVI AMIN</p>
                <a href="/resume.pdf" className="px-4 py-3 font-bold rounded-lg border-2 border-green-500 duration-300 hover:bg-green-500 text-green-500 hover:text-ResolutionBlue" download>Download CV</a>
            </div>
            <img src="/foto.png" alt="iqbal" className="w-80 drop-shadow-2xl"/>
            <div className="w-80">
                <p className="text-2xl font-bold text-green-500 mb-2">About Me</p>
                <p className="text-lg">Iqbal, 19 years old Computer Science student who loves <span className="italic">Math</span> a lot. I love to learn something new, especially coding-math related and writing. My goals is to be an Artificial Intelligence Researcher.</p>
            </div>
        </main>
    )
}

export default Hero;