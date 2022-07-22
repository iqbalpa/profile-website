import React from "react";

const Card = ({ title, url, imagePath }) => {
    return(
        <main className="w-[25rem] bg-Sapphire flex flex-col p-5 rounded-lg border-[1px] border-ResolutionBlue">
            <img src={imagePath} alt={title} className="rounded-xl w-96 mb-3" />
            <a href={url} target="_blank" rel="noreferrer" className="font-bold text-lg text-center hover:text-gray-400">{title}</a>
        </main>
    )
}

export default Card;
