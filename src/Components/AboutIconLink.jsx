import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const AboutIconLink = () => {
	return (
		<div className="about-link-div">
			<Link to = "/about" className="about-link">
                <FaQuestion size={30} />
            </Link>
		</div>
	);
};

export default AboutIconLink;
