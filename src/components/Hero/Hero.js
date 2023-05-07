import React from "react";
import { Fade } from "react-reveal";

const Hero = () => {
	return (
		<main id="1" className="bg-MidnightBlue text-white flex flex-row items-center justify-evenly pt-28 pb-4">
			<Fade>
				<div className="w-80">
					<p className="text-4xl font-bold mb-8">IQBAL PAHLEVI AMIN</p>
					<a href="/iqbal-cv.pdf" download>
						<button className="px-4 py-3 font-bold rounded-lg border-2 border-green-500 duration-300 hover:bg-green-500 text-green-500 hover:text-ResolutionBlue hover:scale-105">Download CV</button>
					</a>
					<div className="flex flex-col mt-5 font-semibold text-xl">
						<div className="flex flex-row">
							<a className="mr-2" href="https://github.com/iqbalpa" target="_blank" rel="noreferrer">
								<span class="link-underline"> GitHub </span>
							</a>
							<a className="mr-2" href="https://www.linkedin.com/in/iqbalpahlevia/" target="_blank" rel="noreferrer">
								<span class="link-underline"> LinkedIn </span>
							</a>
							<a href="https://www.kaggle.com/iqbalpahlevi" target="_blank" rel="noreferrer">
								<span class="link-underline"> Kaggle </span>
							</a>
						</div>
						<div className="flex flex-row">
							<a className="mr-2" href="https://iqbalpa.wordpress.com/" target="_blank" rel="noreferrer">
								<span class="link-underline"> Blog </span>
							</a>
							<a href="https://www.medium.com/@iqbalpa" target="_blank" rel="noreferrer">
								<span class="link-underline"> Medium </span>
							</a>
						</div>
					</div>
				</div>
				<img src="/foto.png" alt="iqbal" className="w-80 drop-shadow-2xl" />
				<div className="w-80">
					<p className="text-2xl font-bold text-green-500 mb-2">About Me</p>
					<p className="text-lg">
						Iqbal, 20 years old Computer Science student who loves <span className="italic">Math</span> a lot. I love to learn something new, especially coding-math related and writing. Currently, I am going deeper with my AI
						and Software Engineering knowledges.
					</p>
				</div>
			</Fade>
		</main>
	);
};

export default Hero;
