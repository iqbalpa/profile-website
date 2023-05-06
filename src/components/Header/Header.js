import React from "react";
import Logo from "../../assets/logo-1.png";

const Header = () => {
	return (
		<header className="fixed w-screen h-[4.5rem] z-10 flex flex-row justify-between items-center bg-ResolutionBlue text-white">
			<img src={Logo} alt="logo" className="w-32 h-10 ml-5" />

			<div className="flex flex-row items-center mr-8 text-md font-semibold">
				<a href="#1" className="text-xl m-3 duration-75 hover:text-green-500">
					About
				</a>
				<a href="#2" className="text-xl m-3 duration-75 hover:text-green-500">
					Projects
				</a>
				<a href="mailto:iqbalpahlevi07@gmail.com">
					<button className="hover:scale-105 m-3 p-2 text-lg rounded-lg border-2 border-green-500 duration-300 hover:bg-green-500 text-green-500 hover:text-ResolutionBlue">Contact Me</button>
				</a>
			</div>
		</header>
	);
};

export default Header;
