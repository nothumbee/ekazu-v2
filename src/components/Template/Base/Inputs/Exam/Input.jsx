import React from "react";
import { Row, Input, Card } from "antd";

import TitleInput from "../Helpers/TitleInput";
import ItemsInput from "../Items/Input";
import ImageGroupInput from "../ImageGroup/ImageGroupInput";
import IsExamModule from "../Helpers/IsExamModule";

const InputGroup = Input.Group;

const ExamInput = ({ id }) => {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#e3e3e3",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px #eee",
        margin: "20px 0px",
      }}
      title={<TitleInput id={id} />}
    >
      <InputGroup className='exam'>
        <IsExamModule id={id} />
        <Row gutter={16}>
          <ItemsInput id={id} />
          <ImageGroupInput id={id} />
        </Row>
      </InputGroup>
    </Card>
  );
};

export default ExamInput;
