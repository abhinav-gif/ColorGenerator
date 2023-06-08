import React from "react";
import Values from "values.js";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
// nanoid is used to give unique id as key in map function
const Colors = ({ color }) => {
  const colorList = new Values(color).all(10);

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
          <div
            className={index > 10 ? "color color-light" : "color"}
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
