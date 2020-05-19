import React from "react";
import { Form, Switch } from "antd";
import ExamNumberInputs from "../Base/Inputs/Helpers/ExamNumberInputs";

const IsPartialExamForm = ({ id, isPartialExam, handleChange }) => {
  const name = [id[id.length - 1], "isPartialExam"];
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

      {isPartialExam && <ExamNumberInputs id={id} />}
    </>
  );
};

export default IsPartialExamForm;
