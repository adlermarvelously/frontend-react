import { useState } from "react";
import Input from "../Input";

const Paragraph = () => {
  const [inputValue, setInputValue] = useState();

  const onChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Input onChange={onChange} />
      <p>{inputValue}</p>
    </>
  );
};

export default Paragraph;
