import React from "react";
import PropTypes from "prop-types";
import { Form, InputNumber } from "antd";
import "./helpers.scss";

const CustomNumberInput = ({ id, name, children }) => {
  const fieldName = id ? [id[id.length - 1], name] : name;
  return (
    <Form.Item
      label={children}
      name={fieldName}
      fieldKey={fieldName}
      rules={[
        {
          required: true,
          message: "Vyplňte prosím toto pole!",
        },
      ]}
    >
      <InputNumber min={0} />
    </Form.Item>
  );
};

export default CustomNumberInput;

CustomNumberInput.propTypes = {
  id: PropTypes.array,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
