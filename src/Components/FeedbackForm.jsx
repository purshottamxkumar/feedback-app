import React, { useState } from "react";
import Card from "./Shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./Shared/Button";

const FeedbackForm = ({ handleAdd }) => {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");

	const handleTextChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length < 10) {
			setMessage("Text must be atleast 10 characters");
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // since it is submit form we have to use it as it is used to prevent the default behaviour which is submitting to the actual file

		if (text.trim().length >= 10) {
			const newFeedback = {
				text,
				rating,
			};
			handleAdd(newFeedback);
			setText("");
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
						className="input-area"
					/>
					<Button type="submit" version="primary" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
			</form>
			{message && <div className="message-alert">{message}</div>}
		</Card>
	);
};

export default FeedbackForm;
