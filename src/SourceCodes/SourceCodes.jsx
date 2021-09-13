import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../Context/Context";
import TopBar from "../TopBar/TopBar";

const SourceCodes = () => {
    const data = useContext(AppContext);
    const { state } = data;
    const preRef = useRef('');
    const [copy, setCopy] = useState("Copy");
    return (
        <div className="source">
            <TopBar title={"Code"} />
            <section className="code">
                <pre ref={preRef}>
                    <span className={"className"}>.{state.buttonClass}</span> {' {'}<br />
                    <span>    background-color: </span><small>{state.backgroundColor}; </small> <br />
                    <span>    color: </span><small>{state.color}; </small> <br />
                    <span>    font-family: </span><small>{state.font}; </small> <br />
                    <span>    font-size: </span><small>{state.fontSize}px; </small> <br />
                    <span>    font-weight: </span><small>{state.fontWeight}; </small> <br />
                    <span>    padding-left: </span><small>{state.horizontalPadding.left}px; </small> <br />
                    <span>    padding-right: </span><small>{state.horizontalPadding.right}px; </small> <br />
                    <span>    padding-top: </span><small>{state.verticalPadding.top}px; </small> <br />
                    <span>    padding-bottom: </span><small>{state.verticalPadding.bottom}px; </small> <br />
                    <span>    border: </span><small>{state.border.width}px {state.border.style} {state.border.color}; </small> <br />
                    <span>    border-radius: </span><small>{state.border.radius}px; </small> <br />
                    <span>    box-shadow: </span><small>{state.boxShadow.x}px {state.boxShadow.y}px {state.boxShadow.blur}px {state.boxShadow.weight}px {state.boxShadow.color}; </small> <br />
                    <span>    text-shadow: </span><small>{state.textShadow.x}px {state.textShadow.y}px {state.textShadow.blur}px {state.textShadow.color}; </small> <br />
                    {'}'}
                </pre>
            </section>
                <button className={"copy"}
                onClick={() => {
                    let textarea = document.createElement("textarea");
                    textarea.innerText = preRef.current.innerText;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    textarea.remove();
                    setCopy("Copied");

                    setTimeout(() => setCopy("Copy"), 2000);
                }}
                >{copy} To Clipboard</button>
        </div>
   );
};

export default SourceCodes;