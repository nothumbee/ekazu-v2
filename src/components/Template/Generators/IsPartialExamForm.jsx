import React from "react";
import { Form, Switch } from "antd";
import ExamNumberInputs from "../Base/Inputs/Helpers/ExamNumberInputs";

const IsPartialExamForm = ({ childPath, isPartialExam, handleChange }) => {
  const name = [...childPath, "isPartialExam"];
  return (
    <>
      <Form.Item
        fieldKey={name}
        name={name}
        valuePropName='checked'
        label='Považovat za parciální vyšetření:'
      >
        <Switch onChange={handleChange} />
      </Form.Item>

      {isPartialExam && <ExamNumberInputs childPath={childPath} />}
    </>
  );
};

export default IsPartialExamForm;
