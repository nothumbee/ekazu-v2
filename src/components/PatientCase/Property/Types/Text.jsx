import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";

const { Title, Text: TextField } = Typography;

const Text = ({ property, visible }) => (
  <>
    <Title level={4}>{property.title}</Title>
    {visible && <TextField>{property.text}</TextField>}
  </>
);

export default Text;

Text.propTypes = {
  property: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
};
