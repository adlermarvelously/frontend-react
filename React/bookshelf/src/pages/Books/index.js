import React, { useState } from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";

const Books = () => {
  const [newBookId, setNewBookId] = useState();
  const [isVisible, setIsVisible] = useState(true);

  const onChange = (id) => {
    setNewBookId(id);
  };

  const onChangeCheckbox = (e) => {
    const value = e.target.checked;
    setIsVisible(value);
  };

  return (
    <>
      <Form onChange={onChange} />
      <label>
        <input
          type="checkbox"
          onChange={onChangeCheckbox}
          defaultChecked={true}
        />
        Table gözüksün mü?
      </label>
      {isVisible && <Table newBookId={newBookId} />}
    </>
  );
};

export default Books;
