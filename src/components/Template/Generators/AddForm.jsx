import React from "react";
import { Button, Row, Col } from "antd";
import * as TYPES from "./generatorTypes";

const GeneratorAddForm = ({ handleSubmit, allowOnlyRanges }) => (
  <Row className='customFieldsBar'>
    {!allowOnlyRanges && (
      <>
        <Col span={8}>
          <Button type='primary' onClick={() => handleSubmit(TYPES.TEXT)}>
            Přidej textové pole
          </Button>
        </Col>
        <Col span={8}>
          <Button type='primary' onClick={() => handleSubmit(TYPES.IMAGES)}>
            Přidej obrázky
          </Button>
        </Col>
      </>
    )}
    <Col span={8}>
      <Button type='primary' onClick={() => handleSubmit(TYPES.RANGE)}>
        Přidej číselné rozmezí
      </Button>
    </Col>
  </Row>
);

export default GeneratorAddForm;
