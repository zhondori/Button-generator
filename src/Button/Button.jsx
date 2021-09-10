import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import TopBar from "../TopBar/TopBar";

const Button = () => {
    const data = useContext(AppContext);
    const { state } = data;
    return (
        <div className="button-box">
            <TopBar title={"Preview"}/>
            <div className="button-div">
                <button style={{
                    backgroundColor: state.backgroundColor,
                    color: state.color,
                    fontFamily: state.font,
                    fontSize: `${state.fontSize}px`,
                    fontWeight: state.fontWeight,
                    paddingLeft: state.horizontalPadding.left,
                    paddingRight: state.horizontalPadding.right,
                    paddingTop: state.verticalPadding.top,
                    paddingBottom: state.verticalPadding.bottom,
                    border: `${state.border.width}px ${state.border.style} ${state.border.color} `,
                    borderRadius: `${state.border.radius}px`,
                    boxShadow: `${state.boxShadow.x}px ${state.boxShadow.y}px ${state.boxShadow.blur}px ${state.boxShadow.weight}px ${state.boxShadow.color}`,
                    textShadow: `${state.textShadow.x}px ${state.textShadow.y}px ${state.textShadow.blur}px ${state.textShadow.color}`,
                }}
                    className={state.buttonClass}
                >{state.buttonText}</button>
            </div>
        </div>
    );
};

export default Button;
