import React from "react";
import { Row, Input, Card } from "antd";
import TitleInput from "../Helpers/TitleInput";
import ItemsInput from "../Items/Input";
import ImageGroupInput from "../ImageGroup/ImageGroupInput";
import IsExamModule from "../Helpers/IsExamModule";

const InputGroup = Input.Group;

const ExamInput = ({ path, childPath, isChangeTo, style }) => {
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
        ...style,
      }}
      title={<TitleInput {...props} isChangeTo={isChangeTo} />}
    >
      <InputGroup className='exam'>
        <IsExamModule {...props} isChangeTo={isChangeTo} />
        <Row gutter={16}>
          <ItemsInput {...props} />
          <ImageGroupInput {...props} />
        </Row>
      </InputGroup>
    </Card>
  );
};

export default ExamInput;
