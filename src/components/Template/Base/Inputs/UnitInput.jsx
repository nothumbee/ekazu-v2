import React from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const UnitInput = ({ childPath }) => {
  const name = [...childPath, "unit"];
  return (
    <Form.Item
      label='Jednotka'
      name={name}
      fieldKey={name}
      rules={[
        {
          required: true,
          message: "Vyplňte prosím toto pole!",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

UnitInput.propTypes = {
  id: PropTypes.array,
};

export default UnitInput;
