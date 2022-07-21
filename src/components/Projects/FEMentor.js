import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const FEMentor = () => {
    const [data, setData] = useState([]);

    // get data from src/assets/data.json using useeffect
    useEffect(() => {
        fetch("/assets/data.json")
            .then(res => res.json())
            .then(dat => setData(dat))
            .catch(err => console.log(err));
    }, []);

    return (
        <main className="bg-MidnightBlue flex flex-col justify-center items-center pt-5 pb-10">
            <p className="text-2xl font-bold text-green-500 drop-shadow-lg">Frontend Mentor Challenge</p>

            <div className="grid grid-cols-3 grid-rows-4">
                {/* create loop for the data */}
                {data.map(item => (
                    <Card key={item.id} title={item.title} url={item.url} imagePath={item.imagePath} />
                ))}
            </div>
        </main>
    )
}

export default FEMentor;