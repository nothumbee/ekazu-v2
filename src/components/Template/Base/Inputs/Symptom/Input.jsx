import React from "react";
import { Input, Card } from "antd";
import TitleInput from "../Helpers/TitleInput";
import ItemsInput from "../Items/Input";
import IsExamModule from "../Helpers/IsExamModule";

const InputGroup = Input.Group;

const SymptomInput = ({ childPath, path, isChangeTo }) => {
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
      <InputGroup className='symptom'>
        <IsExamModule {...props} isChangeTo={isChangeTo} />
        <ItemsInput {...props} />
      </InputGroup>
    </Card>
  );
};

export default SymptomInput;
