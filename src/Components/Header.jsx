import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => {
	const { text } = props;
	return (
		<header>
			<div className="header-div">
				<Link to="/" className="header-div-link"><h2>{text}</h2></Link>
			</div>
		</header>
	);
};

Header.defaultProps = {
	text: "Feedback UI",
};

Header.protoTypes = {
	text: PropTypes.string,
	reverseValue: PropTypes.bool,
};

export default Header;
