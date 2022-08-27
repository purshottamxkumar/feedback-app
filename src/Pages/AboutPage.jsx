import React from "react";
// import { Link } from "react-router-dom";
import Card from "../Components/Shared/Card";

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>This is a React App to leave feedback for a product or service.</p>
				<p>Version: 1.0.0</p>
				{/* <p className="about-back-link-p">
					<Link to="/" className="about-back-link">
						Back To Home
					</Link>
				</p> */}
			</div>
		</Card>
	);
};

export default AboutPage;
