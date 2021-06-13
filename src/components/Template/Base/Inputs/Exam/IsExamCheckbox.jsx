import React from "react";
import { Form, Switch } from "antd";

const IsExamCheckbox = ({ childPath, handleChange }) => {
  const name = [...childPath, "exam"];

  return (
    <Form.Item
      label='Považovat za skryté vyšetření:'
      valuePropName='checked'
      name={name}
      fieldKey={name}
    >
      <Switch onChange={handleChange} />
    </Form.Item>
  );
};

export default IsExamCheckbox;
