import React, { useEffect, useState } from "react";

const Form = ({ color, setColor, setShades }) => {
  // color val is the value selected or written in input
  // color is the final value that sets the color after generate button is clicked
  const [colorVal, setColorVal] = useState(color);
  const [temShades, setTempShades] = useState(2);
  const reg = /^#[0-9A-F]{6}$/i;
  // check if string is a valid hex color
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="color"
          onChange={(e) => setColorVal(e.target.value)}
          value={reg.test(colorVal) ? colorVal : color}
        />
        <input
          type="text"
          placeholder={reg.test(colorVal) ? colorVal : color}
          onChange={(e) => setColorVal(e.target.value)}
        />
        <label htmlFor="shades" className="shades">
          Weight Difference:
        </label>
        <input
          type="number"
          min={1}
          name="shades"
          placeholder="10"
          onChange={(e) => {
            if (Number(e.target.value) > 0) setTempShades(e.target.value);
          }}
        />
        <button
          className="btn"
          type="button"
          style={{ background: `${reg.test(colorVal) ? colorVal : color}` }}
          onClick={() => {
            setColor(colorVal);
            setShades(Number(temShades));
          }}
        >
          Generate
        </button>
      </form>
    </section>
  );
};

export default Form;
