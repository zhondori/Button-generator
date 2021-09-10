import React from "react";

const TopBar = ({ title }) => {
    return (
        <div className="top-bar">
            <h3>{title}</h3>
            <div className="box">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
            </div>
        </div>
    );
};

export default TopBar;