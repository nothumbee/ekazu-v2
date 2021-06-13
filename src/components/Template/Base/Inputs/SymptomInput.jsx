import React from "react";
import { Input, Card } from "antd";
import TitleInput from "./TitleInput";
import TextfieldsInput from "./TextfieldsInput";
import IsExamModule from "./Exam/IsExamModule";
import { inputCardStyles } from "./constants";

const InputGroup = Input.Group;

const SymptomInput = ({ childPath, path, isChangeTo }) => {
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
      <InputGroup className='symptom'>
        <IsExamModule {...props} isChangeTo={isChangeTo} />
        <TextfieldsInput {...props} />
      </InputGroup>
    </Card>
  );
};

export default SymptomInput;
