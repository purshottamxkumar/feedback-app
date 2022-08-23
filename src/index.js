// this is basically the entry point to react
import React from "react";
import ReactDOM from "react-dom"; // it basically allows us to interact with browser dom.
import App from "./App";

// react is made up of many components and it basically has its root component called App.
// any other component we will be creating that's gonna embedded into that main root component App.
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// there is something called StrictMode that react adds as to activate some additional checks and warning within our application.