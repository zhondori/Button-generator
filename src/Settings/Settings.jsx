import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import TopBar from "../TopBar/TopBar";

const Settings = () => {
  const data = useContext(AppContext);
  const { dispatch, state } = data;
  return (
    <div className="settings">
      <TopBar title={"Style"} />
      <div className="all-settings">
        <div className="set">
          <h3>Background Color</h3>
          <input
            type="color"
            defaultValue={"#2D46B9"}
            onChange={(e) => {
              dispatch({ type: "bg", payload: e.target.value });
            }}
          />
        </div>
        <div className="set">
          <h3>Color</h3>
          <input
            type="color"
            defaultValue={"#ffffff"}
            onChange={(e) => {
              dispatch({ type: "color", payload: e.target.value });
            }}
          />
        </div>
        <div className="set">
          <h3>Font Family</h3>
          <select
            onChange={(e) =>
              dispatch({ type: "font", payload: e.target.value })
            }
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="monospace">MonoSpace</option>
            <option value="serif">Serif</option>
          </select>
        </div>
        <div className="set">
          <h3>Font Size</h3>
          <input
            type="number"
            defaultValue={state.fontSize}
            onChange={(e) =>
              dispatch({
                type: "f-size",
                payload: e.target.value ? parseInt(e.target.value) : 0,
              })
            }
          />
        </div>
        <div className="set">
          <h3>Font Weight</h3>
          <select
            onChange={(e) =>
              dispatch({ type: "f-weight", payload: e.target.value })
            }
          >
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
        <div className="set">
          <h3>Padding Horizontal</h3>
          <label htmlFor="left">
            Left
            <input
              type="number"
              id="left"
              defaultValue={state.horizontalPadding.left}
              onChange={(e) =>
                dispatch({
                  type: "p-left",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="right">
            Right
            <input
              type="number"
              id="right"
              defaultValue={state.horizontalPadding.right}
              onChange={(e) =>
                dispatch({
                  type: "p-right",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
        </div>
        <div className="set">
          <h3>Padding Vertical</h3>
          <label htmlFor="top">
            Top
            <input
              type="number"
              id="top"
              defaultValue={state.verticalPadding.top}
              onChange={(e) =>
                dispatch({
                  type: "p-top",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="bottom">
            Bottom
            <input
              type="number"
              id="bottom"
              defaultValue={state.verticalPadding.bottom}
              onChange={(e) =>
                dispatch({
                  type: "p-bottom",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
        </div>
        <div className="set">
          <h3>Border</h3>
          <label htmlFor="b-width">
            Border Width
            <input
              type="number"
              id="w-width"
              defaultValue={state.border.width}
              onChange={(e) =>
                dispatch({
                  type: "b-width",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <label htmlFor="b-style">
            Border Style
            <select
              id="b-style"
              defaultValue={state.border.style}
              onChange={(e) =>
                dispatch({ type: "b-style", payload: e.target.value })
              }
            >
              <option value="solid">Solid</option>
              <option value="dotted">Dotted</option>
              <option value="dashed">Dashed</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="hidden">Hidden</option>
            </select>
          </label>
          <label htmlFor="b-color">
            Border Color
            <input
              type="color"
              id="w-color"
              defaultValue={state.border.color}
              onChange={(e) =>
                dispatch({ type: "b-color", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="b-radius"></label>
          <h3>Border Radius</h3>
          <input
            type="number"
            defaultValue={state.border.radius}
            onChange={(e) =>
              dispatch({
                type: "b-radius",
                payload: e.target.value ? parseInt(e.target.value) : 0,
              })
            }
          />
        </div>
        <div className="set">
          <h3>Box Shadow</h3>
          <label htmlFor="x">
            X
            <input
              type="number"
              id="x"
              defaultValue={state.boxShadow.x}
              onChange={(e) =>
                dispatch({
                  type: "x",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="y">
            Y
            <input
              type="number"
              id="y"
              defaultValue={state.boxShadow.y}
              onChange={(e) =>
                dispatch({
                  type: "y",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="blur">
            Blur
            <input
              type="number"
              id="blur"
              defaultValue={state.boxShadow.blur}
              onChange={(e) =>
                dispatch({
                  type: "blur",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="w-shadow">
            Weight
            <input
              type="number"
              id="w-shadow"
              defaultValue={state.boxShadow.weight}
              onChange={(e) =>
                dispatch({
                  type: "w-shadow",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="shadow-color">
            Color
            <input
              type="color"
              id="shadow-color"
              defaultValue={state.boxShadow.color}
              onChange={(e) =>
                dispatch({ type: "shadow-color", payload: e.target.value })
              }
            />
          </label>
        </div>
        <div className="set">
          <h3>Text Shadow</h3>
          <label htmlFor="t-x">
            X
            <input
              type="number"
              id="t-x"
              defaultValue={state.textShadow.x}
              onChange={(e) =>
                dispatch({
                  type: "t-x",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="t-y">
            Y
            <input
              type="number"
              id="t-y"
              defaultValue={state.textShadow.y}
              onChange={(e) =>
                dispatch({
                  type: "t-y",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="t-blur">
            Blur
            <input
              type="number"
              id="t-blur"
              defaultValue={state.textShadow.blur}
              onChange={(e) =>
                dispatch({
                  type: "t-blur",
                  payload: e.target.value ? parseInt(e.target.value) : 0,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="t-shadow-color">
            Color
            <input
              type="color"
              id="t-shadow-color"
              defaultValue={state.boxShadow.color}
              onChange={(e) =>
                dispatch({ type: "t-shadow-color", payload: e.target.value })
              }
            />
          </label>
        </div>
        <div className="set">
          <h3>Button Text</h3>
          <input
            type="text"
            defaultValue={state.buttonText}
            onChange={(e) =>
              dispatch({
                type: "name",
                payload: e.target.value ? e.target.value : "Button",
              })
            }
          />
        </div>
        <div className="set">
          <h3>Button Class Name</h3>
          <input
            type="text"
            defaultValue={state.buttonClass}
            onChange={(e) =>
              dispatch({
                type: "class",
                payload: e.target.value ? e.target.value : "my-button",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
