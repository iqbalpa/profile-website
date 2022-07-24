import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from 'react-icons/gr';

const Carousel = ({ listData }) => {
    const images = listData.map(item => item.imagePath);
    const titles = listData.map(item => item.title);

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
                <div className="bg-red-300 p-4 rounded-xl flex flex-col items-center justify-center">
                    <img src={images[currentIndex]} alt="" />
                    <p>{titles[currentIndex]}</p>
                </div>

                <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-5">
                    <button onClick={handlePrevClick}><GrPrevious /></button>
                    <button onClick={handleNextClick}><GrNext /></button>
                </div>
            </div>
        </main> 
    )
}

export default Carousel;