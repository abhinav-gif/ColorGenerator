import React, { useEffect, useState } from "react";

const Form = ({ color, setColor }) => {
  // color val is the value selected or written in input
  // color is the final value that sets the color after generate button is clicked
  const [colorVal, setColorVal] = useState(color);
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
        <button
          className="btn"
          type="button"
          style={{ background: `${reg.test(colorVal) ? colorVal : color}` }}
          onClick={() => setColor(colorVal)}
        >
          Generate
        </button>
      </form>
    </section>
  );
};

export default Form;
