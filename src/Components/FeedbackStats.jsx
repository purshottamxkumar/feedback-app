import React from "react";
import PropTypes from "prop-types";

const FeedbackStats = ({feedback}) => {
    let ave_rating = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length;

    ave_rating = ave_rating.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(ave_rating) ? 0 : ave_rating}</h4>
        </div>
    );
};

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
