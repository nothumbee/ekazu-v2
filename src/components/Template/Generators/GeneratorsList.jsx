import React, { useRef, useContext, useState } from "react";
import { List, Card, Form } from "antd";
import { MinusCircleOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import FormContext from "../context";
import GeneratorAddForm from "./GeneratorAddForm";
import GeneratorSingle from "./GeneratorSingle";
import TitleInput from "../Base/Inputs/TitleInput";
import IsPartialExamForm from "./IsPartialExamForm";
import { getGeneratorRangesIndexes } from "./utils";

const GeneratorsList = ({ path, childPath, actions }) => {
  const isPartialFieldPath = [...path, "isPartialExam"];
  const { getFieldValue } = useContext(FormContext);
  const [isPartialExam, setIsPartialExam] = useState(
    getFieldValue(isPartialFieldPath) || false
  );
  const removeGenerator = useRef();

  const handleFilterRanges = () => {
    const generators = getFieldValue([...path, "generators"]);
    const indexes = getGeneratorRangesIndexes(generators);

    indexes.forEach((idx) => {
      removeGenerator.current(idx);
    });
  };

  const handleChange = () => {
    const isPartial = getFieldValue(isPartialFieldPath);
    setIsPartialExam(isPartial);
    if (isPartial) {
      handleFilterRanges();
    }
  };

  const getGeneratorType = (name) => {
    return getFieldValue([...path, "generators", name, "type"]);
  };

  return (
    <Card
      title={`Skupina ${childPath[0] + 1}`}
      style={{
        width: "100%",
        backgroundColor: "#fafafa",
        marginTop: "12px",
        marginBottom: "12px",
      }}
      // TODO put somewhere else
      actions={actions}
      size='small'
    >
      <TitleInput childPath={childPath} />
      <IsPartialExamForm
        childPath={childPath}
        handleChange={handleChange}
        isPartialExam={isPartialExam}
      />
      <Form.List name={[...childPath, "generators"]}>
        {(generators, { add, remove, move }) => {
          // TODO can be removed?
          removeGenerator.current = remove;
          return (
            <>
              <GeneratorAddForm
                handleAddGenerator={(type) => {
                  add({
                    type,
                    title: "",
                    exam: isPartialExam,
                  });
                }}
                allowOnlyRanges={isPartialExam}
              />
              <List
                size='small'
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
                      type={getGeneratorType(name)}
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
