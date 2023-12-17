import React from "react";

function ContactButton() {
	const recipient = "iqbalpahlevi@ristek.cs.ui.ac.id";
	const subject = "Subject";
	const body = "Enter your message here";

	const handleClick = () => {
		const emailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}&tf=1&source=mailto&shva=1`;
	};

	return (
		<button
			className="hover:scale-105 m-3 p-2 text-lg rounded-lg border-2 border-white duration-300 hover:bg-white text-white hover:text-ResolutionBlue"
			onClick={handleClick}
		>
			Contact Me
		</button>
	);
}

export default ContactButton;
