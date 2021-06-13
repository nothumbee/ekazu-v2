import React from "react";
import { Button, Row, Col } from "antd";

const GroupAddButton = ({ onClick }) => (
  <Row className='customFieldsBar'>
    <Col span={24}>
      <Button type='primary' onClick={onClick}>
        Přidej skupinu
      </Button>
    </Col>
  </Row>
);

export default GroupAddButton;
