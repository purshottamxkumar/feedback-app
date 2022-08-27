import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./Components/Header";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import Toggle from "./Components/Toggle";
import AboutIconLink from "./Components/AboutIconLink";
import AboutPage from "./Pages/AboutPage";
import "./App.css";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const [reversevalue, setReverseValue] = useState(false);
	const [toggleValue, setToggleValue] = useState("Dark Mode");

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure, you want to delete? ")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const handleReverse = () => {
		if (reversevalue) {
			setReverseValue(false);
		} else setReverseValue(true);

		if (toggleValue === "Dark Mode") {
			setToggleValue("Light Mode");
		} else setToggleValue("Dark Mode");
	};

	return (
		<Router>
			<Header text="Feedback UI" />
			<div className="main-div">
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
									reverseValue={reversevalue}
								/>
							</>
						}
					></Route>
					<Route path="/about" element={<AboutPage />} />
				</Routes>
				<div className="toggle-btn-div nav-card-home">
					<NavLink to="/" activeClassName="active" className="nav-btn">
						Home
					</NavLink>
				</div>
				<div className="toggle-btn-div nav-card-about">
					<NavLink to="/about" activeClassName="active" className="nav-btn">
						About
					</NavLink>
				</div>
				<AboutIconLink />
				{/* <- we don't have to include this component in the Routes Component, this is ? component at the bottom right of our webpage */}
				<Toggle reverseFunc={handleReverse} toggleValue={toggleValue} />
			</div>
		</Router>
		// in import React from "react"; // React is an Object.
		/*  React.createElement(
                "div",
                { className = "container"},
                React.createElement("h1", {}, "My h1 Element");
            ); <-- if we want to createElement without writing JSX and this is regular JS */

		// jsx basically allows us to write html in js in our component.
		// jsx is actually html however it is syntactic sugar, it is basically js under the hood.
		// jsx always have one parent element, whole code is simply included under one element.
		// class -> className, for -> htmlFor
	);
};

export default App;
