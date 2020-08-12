import React from "react";
import { Button, Row, Col } from "antd";
import generatorTypes from "./generatorTypes";

const GeneratorAddForm = ({ handleSubmit, allowOnlyRanges }) => (
  <Row className='customFieldsBar'>
    {!allowOnlyRanges && (
      <>
        <Col span={8}>
          <Button type='primary' onClick={() => handleSubmit(generatorTypes.TEXT)}>
            Přidej textové pole
          </Button>
        </Col>
        <Col span={8}>
          <Button type='primary' onClick={() => handleSubmit(generatorTypes.IMAGES)}>
            Přidej obrázky
          </Button>
        </Col>
      </>
    )}
    <Col span={8}>
      <Button type='primary' onClick={() => handleSubmit(generatorTypes.RANGE)}>
        Přidej číselné rozmezí
      </Button>
    </Col>
  </Row>
);

export default GeneratorAddForm;
