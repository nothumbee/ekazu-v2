import React, { useRef, useContext, useState, useEffect } from "react";
import { List, Card, Form } from "antd";
import { MinusCircleOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";

import FormContext from "../context";
import GeneratorAddForm from "./AddForm";
import GeneratorSingle from "./Single";
// import generatorTypes from "./generatorTypes";
import TitleInput from "../Base/Inputs/Helpers/TitleInput";
import IsPartialExamForm from "./IsPartialExamForm";

// TODO refactor this component
const GeneratorsList = ({ path, childPath, actions }) => {
  const isPartialFieldPath = [...path, "isPartialExam"];
  const { getFieldValue } = useContext(FormContext);
  const [isPartialExam, setIsPartialExam] = useState(
    getFieldValue(isPartialFieldPath) || false
  );
  const generatorTypes = useRef([]);
  const removeGenerator = useRef();

  useEffect(() => {
    // you need to first setup the field types
    const generators = getFieldValue([...path, "generators"]);
    generators.map(generator => addGeneratorType(generator.type));
  }, []);

  const addGeneratorType = type => {
    const prevTypes = generatorTypes.current;
    generatorTypes.current = [...prevTypes, type];
  };

  const handleFilterRanges = () => {
    removeGenerator.current(1);
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
      <TitleInput childPath={childPath} />
      <IsPartialExamForm
        childPath={childPath}
        handleChange={handleChange}
        isPartialExam={isPartialExam}
      />

      <Form.List name={[...childPath, "generators"]}>
        {(generators, { add, remove, move }) => {
          removeGenerator.current = remove;
          return (
            <>
              <GeneratorAddForm
                handleSubmit={type => {
                  addGeneratorType(type);
                  // TODO just remove above function and do it as default in add() method
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
                      path={[...path, "generators", name]}
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
