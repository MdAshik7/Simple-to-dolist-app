import React, { useState } from "react";

function Todoitem(props) {
  const [isChange, setchange] = useState(false);
  function changeEvent() {
    setchange((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={changeEvent}>
      <li style={{ textDecoration: isChange ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default Todoitem;
