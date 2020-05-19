import React from "react";
import { Button, Row, Col } from "antd";

const GroupAddButton = ({ handleClick }) => (
  <Row className='customFieldsBar'>
    <Col span={24}>
      <Button type='primary' onClick={handleClick}>
        Přidej skupinu
      </Button>
    </Col>
  </Row>
);

export default GroupAddButton;
