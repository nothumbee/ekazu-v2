import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import "./helpers.scss";

const TitleInput = ({ childPath, isChangeTo }) => {
  const name = childPath ? [...childPath, "title"] : "title";
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
      <Input disabled={isChangeTo} />
    </Form.Item>
  );
};

export default TitleInput;

TitleInput.propTypes = {
  id: PropTypes.array,
};
