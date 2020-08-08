import React, { useRef, useContext, useState } from "react";
import { List, Card, Form } from "antd";
import { MinusCircleOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";

import FormContext from "../context";
import GeneratorAddForm from "./AddForm";
import GeneratorSingle from "./Single";
import * as TYPES from "./generatorTypes";
import TitleInput from "../Base/Inputs/Helpers/TitleInput";
import IsPartialExamForm from "./IsPartialExamForm";

const GeneratorsList = ({ id, actions }) => {
  const isPartialFieldPath = [...id, "isPartialExam"];
  const { getFieldValue } = useContext(FormContext);
  const [isPartialExam, setIsPartialExam] = useState(
    getFieldValue(isPartialFieldPath) || false
  );
  const generatorTypes = useRef([]);
  const removeGenerator = useRef();

  // console.log("initialValue", initialValue);

  const addGeneratorType = type => {
    const prevTypes = generatorTypes.current;
    generatorTypes.current = [...prevTypes, type];
  };

  const handleFilterRanges = () => {
    // generatorTypes.current.forEach(
    //   (generator, index) => generator !== "range" && removeGenerator.current(index)
    // );
    removeGenerator.current(1);
    // const nextFields = generatorsKeys.filter(generator => generator.type === TYPES.RANGE);
    // setFieldsValue({
    //   [keysName]: nextFields,
    // });
  };

  const handleChange = () => {
    const isPartial = getFieldValue(isPartialFieldPath);
    setIsPartialExam(isPartial);
    if (isPartial) {
      handleFilterRanges();
    }
  };

  const getGeneratorType = key => {
    return generatorTypes.current[key];
  };

  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#fafafa",
        marginTop: "20px",
        marginBottom: "20px",
      }}
      actions={actions}
    >
      <TitleInput id={id} />
      <IsPartialExamForm
        id={id}
        handleChange={handleChange}
        isPartialExam={isPartialExam}
      />

      <Form.List name={[id[id.length - 1], "generators"]}>
        {(generators, { add, remove, move }) => {
          removeGenerator.current = remove;
          return (
            <>
              <GeneratorAddForm
                handleSubmit={type => {
                  addGeneratorType(type);
                  add();
                }}
                allowOnlyRanges={isPartialExam}
              />
              <List
                dataSource={generators}
                renderItem={({ name, key }) => (
                  <List.Item
                    key={key}
                    actions={[
                      <MinusCircleOutlined
                        className='dynamic-delete-button'
                        onClick={() => remove(name)}
                        key='del'
                      />,
                      <UpOutlined onClick={() => move(name, name - 1)} key='up' />,
                      <DownOutlined onClick={() => move(name, name + 1)} key='down' />,
                    ]}
                  >
                    <GeneratorSingle
                      id={[...id, "generators", name]}
                      type={getGeneratorType(key)}
                      isPartialExam={isPartialExam}
                    />
                  </List.Item>
                )}
              />
            </>
          );
        }}
      </Form.List>
    </Card>
  );
};

export default GeneratorsList;
