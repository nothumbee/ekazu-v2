import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import "./helpers.scss";

const TitleInput = ({ id }) => {
  const name = id ? [id[id.length - 1], "title"] : "title";
  return (
    <Form.Item
      label='Název'
      name={name}
      fieldKey={name}
      rules={[
        {
          required: true,
          message: "Vyplňtě prosím toto pole!",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

export default TitleInput;

TitleInput.propTypes = {
  id: PropTypes.array,
};
