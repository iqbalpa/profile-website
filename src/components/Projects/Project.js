import React from "react";

const Project = () => {
    return (
        <main className="bg-MidnightBlue flex flex-col justify-center items-center py-14 text-white">
            <p className="text-3xl font-bold text-green-500 drop-shadow-lg mb-8">P R O J E C T S</p>
            <div className="w-[25rem] bg-Sapphire flex flex-col p-5 rounded-lg border-[1px] border-ResolutionBlue">
                <img src="/projects/url-shortener.png" alt="url shortener" className="rounded-xl w-96 mb-3"/>
                <a href="https://iqbal-url-shortener.vercel.app/" target="_blank" className="font-bold text-lg text-center">URL Shortener</a>
                <p className="text-left opacity-80">Customize URLs easily without login and signup requirements. Created using Express JS as the backend, MongoDB as the database, and React JS as the frontend.</p>
            </div>
        </main>
    )
}

export default Project;