import React from "react";
import Values from "values.js";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
// nanoid is used to give unique id as key in map function
const Colors = ({ color, shades }) => {
  const colorList = new Values(color).all(Number(shades));

  return (
    <div className="colors">
      {colorList.map((item, index) => {
        // default clipboard api is used to copy
        // toastify react lib for creating toasts
        const copyToClipboard = async () => {
          try {
            await navigator.clipboard.writeText(`#${item.hex}`);
            toast.success("Text copied to clipboard");
          } catch (error) {
            toast.error("Failed to copy to clipboard");
            console.log(error);
          }
        };
        return (
          // light color theme for the color blocks after later half of colorList (darker shades)
          <div
            className={
              index >= colorList.length / 2 ? "color color-light" : "color"
            }
            style={{ background: `#${item.hex}` }}
            onClick={copyToClipboard}
            key={nanoid()}
          >
            <p className="percent-value">{item.weight}%</p>
            <p className="color-value">#{item.hex}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
