import React from "react";
import "./styles/Checkbox.css";

function Checkbox({ checked, onChange }) {
  return (
    <label className="Checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="Checkmark"></span>
    </label>
  );
}

export default Checkbox;
