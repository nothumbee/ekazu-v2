import React from "react";
import { Button, Form, Select } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { dropLast } from "ramda";
import useFormContext from "./useFormContext";
import useExamsOptions from "./useExamsOptions";
import "./ConditionExams.scss";

const ConditionExams = ({ parentName, path }) => {
  const { getFieldValue } = useFormContext();
  const groups = getFieldValue(dropLast(4, path));
  const { examOptions } = useExamsOptions({ groups });

  return (
    <div className='ConditionsExams'>
      <Form.Item
        name={[parentName, "exam"]}
        label={"Pokud je vyšetřeno po:"}
        required={true}
        style={{ marginRight: "0.5rem" }}
      >
        <Select style={{ width: 220 }} options={examOptions} />
      </Form.Item>
      <Form.List name={[parentName, "orExams"]}>
        {(conditions, { add, remove }) => {
          return (
            <>
              {conditions.map((field, index) => (
                <Form.Item
                  key={field.key}
                  fieldKey={field.fieldKey}
                  required={false}
                  label={"nebo po:"}
                >
                  <Form.Item {...field} noStyle>
                    {/* TODO tady udelat custom validaci, ze musi by one of current exams */}
                    <Select style={{ width: 220 }} options={examOptions} />
                  </Form.Item>
                  <MinusCircleOutlined
                    className='dynamic-delete-button'
                    style={{ margin: "0 8px" }}
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Form.Item>
              ))}
              <Button type='dashed' onClick={() => add()}>
                <PlusOutlined />
              </Button>
            </>
          );
        }}
      </Form.List>
    </div>
  );
};

export default ConditionExams;
