import React from "react";
import { Space, Input, Card } from "antd";
import TitleInput from "../TitleInput";
import TextfieldsInput from "../TextfieldsInput";
import ImageGroupInput from "../ImageGroupInput";
import IsExamModule from "./IsExamModule";
import { inputCardStyles } from "../constants";

const InputGroup = Input.Group;

const ExamInput = ({ path, childPath, isChangeTo, style }) => {
  const props = {
    childPath,
    path,
  };
  return (
    <Card
      style={{
        ...inputCardStyles,
        ...style,
      }}
      title={<TitleInput {...props} isChangeTo={isChangeTo} />}
      size='small'
    >
      <InputGroup className='exam'>
        <IsExamModule {...props} isChangeTo={isChangeTo} />
        <Space direction='vertical'>
          <TextfieldsInput {...props} />
          <ImageGroupInput {...props} />
        </Space>
      </InputGroup>
    </Card>
  );
};

export default ExamInput;
