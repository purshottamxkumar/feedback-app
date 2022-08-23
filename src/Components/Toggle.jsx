import React from "react";

const Toggle = ({reverseFunc, toggleValue}) => {
    return (
        <div className="toggle-btn">
            <button onClick={reverseFunc} className="btn-toggle">{toggleValue}</button>
        </div>
    );
};

export default Toggle;
