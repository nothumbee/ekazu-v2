import React from "react";
import PropTypes from "prop-types";
import { Form, Select, Input } from "antd";

const Option = Select.Option;

const DiagnosisSelect = ({ diagnosisList = [] }) => {
  return (
    <Input.Group>
      <Form.Item
        label={"Vyber diagnózu"}
        name='diagnosis'
        rules={[[{ required: true, message: "Vyberte prosím diagnózu!" }]]}
      >
        <Select style={{ width: 220 }}>
          {diagnosisList.map((diagnosis, index) => (
            <Option key={index} value={diagnosis.definition}>
              {diagnosis.definition}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Input.Group>
  );
};

export default DiagnosisSelect;

DiagnosisSelect.propTypes = {
  diagnosisList: PropTypes.array.isRequired,
};
