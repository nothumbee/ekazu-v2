import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Range = ({ property, visible }) => (
  <>
    <Title level={4}>{property.title}</Title>
    {visible && <Text>{`${property.text} ${property.unit}`}</Text>}
  </>
);

export default Range;

Range.propTypes = {
  property: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
};
