import React from "react";
import { Affix, Form } from "antd";
import { MinusCircleOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import GeneratorsList from "../Generators/List";
import GroupAddButton from "./AddButton";

// TODO possibly add collapse (what will be in header?)
const GroupsList = ({ loading = false }) => {
  return (
    <div style={{ width: "100%" }}>
      <Form.List name='groups'>
        {(fields, { add, remove, move }) => {
          return (
            <>
              <Affix offsetTop={64}>
                <GroupAddButton handleClick={() => add()} />
              </Affix>
              {fields.map((field, index) => {
                return (
                  <GeneratorsList
                    key={field.key}
                    path={["groups", field.name]}
                    childPath={[field.name]}
                    actions={[
                      <MinusCircleOutlined
                        className='dynamic-delete-button'
                        onClick={() => remove(field.name)}
                        key='del'
                      />,
                      <UpOutlined
                        onClick={() => move(field.name, field.name - 1)}
                        key='up'
                      />,
                      <DownOutlined
                        onClick={() => move(field.name, field.name + 1)}
                        key='down'
                      />,
                    ]}
                  />
                );
              })}
            </>
          );
        }}
      </Form.List>
    </div>
  );
};

export default GroupsList;
