import React, { useEffect, useState } from "react";

const Input = ({ onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChangeCheckbox = (e) => {
    const value = e.target.checked;
    setIsVisible(value);
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);

  useEffect(() => {
    console.log("Sayfa yüklendi.");
  }, []);

  return (
    <>
      <input type="checkbox" onChange={onChangeCheckbox} />
      {isVisible && <input type="text" onChange={onChangeInput} />}
    </>
  );
};

export default Input;
