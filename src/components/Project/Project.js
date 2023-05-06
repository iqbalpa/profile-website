import React from "react";
import Netflix from "../../assets/netflix-clone.png";
import FaceDetector from "../../assets/face-detector.png";
import ParisHousing from "../../assets/paris-housing-price.png";

const Project = () => {
	return (
		<>
			<div id="2" className="flex flex-col justify-center items-center bg-ResolutionBlue py-14">
				<h1 className="text-2xl text-green-500 font-bold">P R O J E C T</h1>
				<p className="text-lg">Here is the project I have worked with lately</p>
				<div className="grid grid-cols-3 gap-14 mt-8">
					<div className="card card-compact w-96 bg-base-100 shadow-xl">
						<figure>
							<img src={Netflix} alt="Netflix Clone" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Netflix Website clone</h2>
							<p>Netflix Website interface clone using React JS and Tailwind CSS</p>
							<div className="card-actions justify-end">
								<a href="https://netflix-clone-iqbalpa.vercel.app/" target="_blank" rel="noreferrer">
									<button className="btn btn-success hover:scale-105">check it out</button>
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact w-96 bg-base-100 shadow-xl">
						<figure>
							<img src={FaceDetector} alt="Face Detector" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Face Detector and Finger Counter</h2>
							<p>Face detector and finger counter based on python opencv library</p>
							<div className="card-actions justify-end">
								<a href="https://github.com/iqbalpa/opencv" target="_blank" rel="noreferrer">
									<button className="btn btn-success hover:scale-105">check it out</button>
								</a>
							</div>
						</div>
					</div>
					<div className="card card-compact w-96 bg-base-100 shadow-xl">
						<figure>
							<img src={ParisHousing} alt="Paris Housing Price Predictor" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Paris Housing Price Prediction</h2>
							<p>Kaggle Competition deployed machine learning model into website using Streamlit</p>
							<div className="card-actions justify-end">
								<a href="https://iqbalpa-final-project-educare-app-aq96jt.streamlit.app/" target="_blank" rel="noreferrer">
									<button className="btn btn-success hover:scale-105">check it out</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
