import React, { useState } from "react";
import Popover from "../Popover";

import "./index.scss";

const ChangableButton = () => {
  const [buttonText, setButtonText] = useState("");
  const [childrenText, setChildrenText] = useState();

  const onChangeInput = (e) => {
    const value = e.target.value;
    setButtonText(value);
  };

  const onChangeChildren = (e) => {
    const value = e.target.value;
    setChildrenText(value);
  };

  return (
    <div className="changableButton">
      <input type="text" onChange={onChangeInput} placeholder="Button text"/>
      <input type="text" onChange={onChangeChildren} placeholder="Children text"/>
      <Popover buttonText={buttonText}>{childrenText}</Popover>
    </div>
  );
};

export default ChangableButton;
