import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import CustomNumberInput from "./CustomNumberInput";

const REQUIRED_FIELDS = [
  {
    name: "minBonus",
    title: "minBonus",
  },
  {
    name: "maxMalus",
    title: "maxMalus",
  },
  {
    name: "maxPrice",
    title: "maxPrice",
  },
];

const RequiredFields = ({ data = {} }) => (
  <Row gutter={16}>
    {REQUIRED_FIELDS.map((field, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput name={field.name} value={data[field.name]}>
          {field.name}
        </CustomNumberInput>
      </Col>
    ))}
  </Row>
);

export default RequiredFields;

RequiredFields.propTypes = {
  data: PropTypes.object,
};
