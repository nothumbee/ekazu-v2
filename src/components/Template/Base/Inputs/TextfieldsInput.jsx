import React from "react";
import { Button, Input, Form, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const InputGroup = Input.Group;

const TextfieldsInput = ({ childPath }) => {
  return (
    <InputGroup>
      <Form.List name={[...childPath, "text"]} size='small'>
        {(textFields, { add, remove, move }) => {
          return (
            <>
              {textFields.map((field) => (
                <Form.Item
                  key={field.key}
                  fieldKey={field.key}
                  label={`Text ${field.name + 1}`}
                >
                  <Row>
                    <Col flex={1}>
                      <Form.Item noStyle {...field}>
                        <Input.TextArea />
                      </Form.Item>
                    </Col>
                    {textFields.length > 1 ? (
                      <Col style={{ marginLeft: 8 }}>
                        <MinusCircleOutlined
                          className='dynamic-delete-button'
                          onClick={() => remove(field.name)}
                        />
                      </Col>
                    ) : null}
                  </Row>
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

export default TextfieldsInput;
