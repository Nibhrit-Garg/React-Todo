import React from "react";
import Checkbox from "./Checkbox";

function TodoRow({ label, isSelected, onDelete, onToggleSelection }) {
  return (
    <div className="TodoRow">
      <div className="Checkbox">
        <Checkbox checked={isSelected} onChange={onToggleSelection} />
        <span className="Label">{label}</span>
      </div>
      <button className="DeleteButton" onClick={onDelete}>
        x
      </button>
    </div>
  );
}

export default TodoRow;
