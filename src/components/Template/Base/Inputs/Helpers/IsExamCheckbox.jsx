import React from "react";
import { Form, Switch } from "antd";
import "./helpers.scss";

const IsExamCheckbox = ({ id, handleChange }) => {
  const name = [id[id.length - 1], "exam"];

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
