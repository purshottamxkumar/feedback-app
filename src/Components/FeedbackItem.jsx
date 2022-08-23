import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./Shared/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ item, handleDelete, reverseValue}) => {

	return (
		<Card reverse={reverseValue}>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className={reverseValue ? "close-btn close-btn-toggle" : "close-btn"}>
				<FaTimes color={reverseValue ? "white" : "purple"} />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
