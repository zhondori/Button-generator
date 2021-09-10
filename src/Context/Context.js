import React, { createContext, useReducer } from "react";

export const AppContext = createContext(null);
export const Consumer = AppContext.Consumer;
export const Provider = AppContext.Provider;

const initialState = {
    backgroundColor: "#2D46B9",
    color: "#ffffff",
    font: "sans-serif",
    fontSize: 24,
    fontWeight: 100,
    horizontalPadding: {
        left: 20,
        right: 20
    },
    verticalPadding: {
        top: 10,
        bottom: 10
    },
    border: {
        width: 2,
        color: "#0e34e3",
        style: "solid",
        radius: 5
    },
    boxShadow: {
        x: 0,
        y: 7,
        blur: 15,
        weight: 0,
        color: "#ededed"
    },
    textShadow: {
        x: 3,
        y: 3,
        blur: 0,
        color: "#333333"
    },
    buttonText: "Button",
    buttonClass: "my-button",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "bg":
            return { ...state, backgroundColor: action.payload };
        case "color":
            return { ...state, color: action.payload };
        case "font":
            return { ...state, font: action.payload };
        case "f-size":
            return { ...state, fontSize: action.payload };
        case "f-weight":
            return { ...state, fontWeight: action.payload };
        case "p-left":
            return {
                ...state, horizontalPadding: {
                    ...state.horizontalPadding,
                    left: action.payload
                }
            };
        case "p-right":
            return {
                ...state, horizontalPadding: {
                    ...state.horizontalPadding,
                    right: action.payload
                }
            };
        case "p-top":
            return {
                ...state, verticalPadding: {
                    ...state.verticalPadding,
                    top: action.payload
                }
            };
        case "p-bottom":
            return {
                ...state, verticalPadding: {
                    ...state.verticalPadding,
                    bottom: action.payload
                }
            };
        case "b-width":
            return {
                ...state, border: {
                    ...state.border,
                    width: action.payload
                }
            };
        case "b-style":
            return {
                ...state, border: {
                    ...state.border,
                    style: action.payload
                }
            };
        case "b-color":
            return {
                ...state, border: {
                    ...state.border,
                    color: action.payload
                }
            };
        case "b-radius":
            return {
                ...state, border: {
                    ...state.border,
                    radius: action.payload
                }
            };
        case "x":
            return {
                ...state, boxShadow: {
                    ...state.boxShadow,
                    x: action.payload
                }
            };
        case "y":
            return {
                ...state, boxShadow: {
                    ...state.boxShadow,
                    y: action.payload
                }
            };
        case "blur":
            return {
                ...state, boxShadow: {
                    ...state.boxShadow,
                    blur: action.payload
                }
            };
        case "w-shadow":
            return {
                ...state, boxShadow: {
                    ...state.boxShadow,
                    weight: action.payload
                }
            };
        case "shadow-color":
            return {
                ...state, boxShadow: {
                    ...state.boxShadow,
                    color: action.payload
                }
            };
        case "t-x":
            return {
                ...state, textShadow: {
                    ...state.textShadow,
                    x: action.payload
                }
            };
        case "t-y":
            return {
                ...state, textShadow: {
                    ...state.textShadow,
                    y: action.payload
                }
            };
        case "t-blur":
            return {
                ...state, textShadow: {
                    ...state.textShadow,
                    blur: action.payload
                }
            };
        case "t-shadow-color":
            return {
                ...state, textShadow: {
                    ...state.textShadow,
                    color: action.payload
                }
            };
        case "name":
            return { ...state, buttonText: action.payload };
        case "class":
            return { ...state, buttonClass: action.payload };
        default:
            return state;
    }
}

export default function Context({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
};