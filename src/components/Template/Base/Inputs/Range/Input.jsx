import React from "react";
import { Row, Col, Input, Card } from "antd";
import CustomNumberInput from "../Helpers/CustomNumberInput";
import TitleInput from "../Helpers/TitleInput";
import IsExamModule from "../Helpers/IsExamModule";
import UnitInput from "../Helpers/UnitInput";

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
        width: "100%",
        backgroundColor: "#e3e3e3",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px #eee",
        margin: "20px 0px",
      }}
      title={<TitleInput {...props} isChangeTo={isChangeTo} />}
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
