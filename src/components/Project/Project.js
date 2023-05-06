import React from "react";
import Card from "../Card/Card";
import Netflix from "../../assets/netflix-clone.png";
import FaceDetector from "../../assets/face-detector.png";
import ParisHousing from "../../assets/paris-housing-price.png";
import NumbersApi from "../../assets/numbers-api.png";

const Project = () => {
	const data = {
		projects: [
			{
				imageLink: Netflix,
				title: "Netflix Website clone",
				description: "Netflix Website interface clone using React JS and Tailwind CSS",
				link: "https://netflix-clone-iqbalpa.vercel.app/",
			},
			{
				imageLink: FaceDetector,
				title: "Face Detector and Finger Counter",
				description: "Face detector and finger counter based on python opencv library",
				link: "https://github.com/iqbalpa/opencv",
			},
			{
				imageLink: ParisHousing,
				title: "Paris Housing Price Prediction",
				description: "Kaggle Competition deployed machine learning model into website using Streamlit",
				link: "https://iqbalpa-final-project-educare-app-aq96jt.streamlit.app/",
			},
			{
				imageLink: NumbersApi,
				title: "Numbers Random Fact",
				description: "Generate random fact of a number using numbersapi.com",
				link: "https://iqbalpa-numbers-api.netlify.app/",
			},
		],
	};

	return (
		<>
			<div id="2" className="flex flex-col justify-center items-center bg-ResolutionBlue py-14">
				<h1 className="text-2xl text-green-500 font-bold">P R O J E C T</h1>
				<p className="text-lg">Here is the project I have worked with lately</p>
				<div className="grid grid-cols-3 gap-14 mt-8">
					{data.projects.map((project, index) => (
						<Card key={index} imageLink={project.imageLink} title={project.title} description={project.description} link={project.link} />
					))}
				</div>
			</div>
		</>
	);
};

export default Project;
