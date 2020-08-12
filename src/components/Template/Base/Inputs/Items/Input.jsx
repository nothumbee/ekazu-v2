import React from "react";
import { Button, Input, Form } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const InputGroup = Input.Group;

const ItemsInput = ({ childPath }) => {
  return (
    <InputGroup>
      <Form.List name={[...childPath, "text"]}>
        {(textFields, { add, remove, move }) => {
          return (
            <>
              {textFields.map(field => (
                <Form.Item
                  key={field.key}
                  fieldKey={field.key}
                  label={`Text ${field.name + 1}`}
                >
                  <Form.Item noStyle {...field}>
                    <Input.TextArea style={{ width: "60%", marginRight: 8 }} />
                  </Form.Item>
                  {textFields.length > 1 ? (
                    <MinusCircleOutlined
                      className='dynamic-delete-button'
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Button type='dashed' onClick={() => add()}>
                <PlusOutlined />
                Přidat text
              </Button>
            </>
          );
        }}
      </Form.List>
    </InputGroup>
  );
};

export default ItemsInput;
