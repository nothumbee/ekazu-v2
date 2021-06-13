import React from "react";
import { Row, Col, Input, Card } from "antd";
import CustomNumberInput from "./CustomNumberInput";
import TitleInput from "./TitleInput";
import IsExamModule from "./Exam/IsExamModule";
import UnitInput from "./UnitInput";
import { inputCardStyles } from "./constants";

const InputGroup = Input.Group;

const rangeNumberInputs = [
  { name: "min", title: "Minimum" },
  { name: "max", title: "Maximum" },
];

const RangeInput = ({ isPartialExam, path, childPath, isChangeTo }) => {
  const props = {
    childPath,
    path,
  };
  return (
    <Card
      style={{
        ...inputCardStyles,
      }}
      title={<TitleInput {...props} isChangeTo={isChangeTo} />}
      size='small'
    >
      <InputGroup className='range'>
        {!isPartialExam ? <IsExamModule {...props} isChangeTo={isChangeTo} /> : null}
        <Row gutter={16}>
          <RangeNumberInputs {...props} />
        </Row>
      </InputGroup>
    </Card>
  );
};

const RangeNumberInputs = ({ childPath }) => (
  <>
    {rangeNumberInputs.map((input, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput childPath={childPath} name={input.name}>
          {input.title}
        </CustomNumberInput>
      </Col>
    ))}
    <Col span={8}>
      <UnitInput childPath={childPath} />
    </Col>
  </>
);

export default RangeInput;
