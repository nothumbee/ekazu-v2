import React, { useContext } from "react";
import { Button, Input, Form } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormContext from "../../../context";

const InputGroup = Input.Group;

const ItemsInput = ({ id }) => {
  const context = useContext(FormContext);

  const { getFieldValue, setFieldsValue } = context;

  const itemsField = `${id}.keys`;

  const handleAddItem = () => {
    const keys = getFieldValue(itemsField);
    const count = keys.length;
    const newItemId = keys[count - 1] + 1;
    const nextKeys = keys.concat(newItemId);

    setFieldsValue({
      [itemsField]: nextKeys,
    });
  };

  const handleRemoveItem = item => {
    const keys = getFieldValue(itemsField);
    if (keys.length === 1) {
      return;
    }

    setFieldsValue({
      [itemsField]: keys.filter(key => key !== item),
    });
  };

  const method = getFieldValue("method");
  const setOnChange = method === "duplicate" || method === "edit";

  return (
    <InputGroup>
      <Form.List name={[id[id.length - 1], "text"]}>
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
