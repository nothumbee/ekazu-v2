import React from "react";
import { Button, Row, Col } from "antd";
import { generatorTypes } from "./constants";

const GeneratorAddForm = ({ handleAddGenerator, allowOnlyRanges }) => (
  <Row className='customFieldsBar'>
    {!allowOnlyRanges && (
      <>
        <Col span={8}>
          <Button type='primary' onClick={() => handleAddGenerator(generatorTypes.TEXT)}>
            Přidej textové pole
          </Button>
        </Col>
        <Col span={8}>
          <Button
            type='primary'
            onClick={() => handleAddGenerator(generatorTypes.IMAGES)}
          >
            Přidej obrázky
          </Button>
        </Col>
      </>
    )}
    <Col span={8}>
      <Button type='primary' onClick={() => handleAddGenerator(generatorTypes.RANGE)}>
        Přidej číselné rozmezí
      </Button>
    </Col>
  </Row>
);

export default GeneratorAddForm;
