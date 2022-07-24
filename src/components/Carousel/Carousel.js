import React, { useState } from "react";
import { GrNext, GrPrevious } from 'react-icons/gr';

const Carousel = ({ listData }) => {
    const images = listData.map(item => item.imagePath);
    const titles = listData.map(item => item.title);
    const urls = listData.map(item => item.url);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <main className="w-[37rem] m-auto">
            <div className="w-full relative select-none">
                <div className="bg-Sapphire p-4 rounded-xl flex flex-col items-center justify-center border-[1px] border-ResolutionBlue">
                    <img src={images[currentIndex]} alt="" className="rounded-2xl" />
                    <a href={urls[currentIndex]} target="_blank" rel="noreferrer" className="mt-4 text-lg font-semibold text-white hover:text-gray-400">{titles[currentIndex]}</a>
                </div>

                <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-7">
                    <button onClick={handlePrevClick} className="bg-slate-300/75 hover:bg-slate-500/75 p-2 rounded-full"><GrPrevious /></button>
                    <button onClick={handleNextClick} className="bg-slate-300/75 hover:bg-slate-500/75 p-2 rounded-full"><GrNext /></button>
                </div>
            </div>
        </main> 
    )
}

export default Carousel;