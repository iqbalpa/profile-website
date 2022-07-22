import React from "react";
import Card from "../Card/Card";

const Carousel = ({ listData }) => {
    return (
        <main  className="text-white grid grid-cols-3 grid-rows-4 gap-5">
            {listData.map(item => (
                <Card key={item.id} title={item.title} url={item.url} imagePath={item.imagePath} />
            ))}
        </main>
    )
}

export default Carousel;