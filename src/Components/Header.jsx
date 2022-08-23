import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
	const { text } = props;
	return (
		<header>
			<div className="header-div">
				<h2>{text}</h2>
			</div>
		</header>
	);
};

Header.defaultProps = {
	text: "Feedback UI",
};

Header.protoTypes = {
	text: PropTypes.string,
};

export default Header;
