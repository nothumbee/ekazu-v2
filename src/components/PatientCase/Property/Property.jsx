import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import useExam from "../useExam";
import { generatorTypes } from "../../Template/Generators/constants";
import { Images, Range, Text } from "./Types";
import ExaminingModalLoading from "../../Loading/ExaminingModalLoading";

const Property = ({ property, visible: overrideVisibility = false }) => {
  const [{ visible, examining }, { handleExaminate, setVisible }] =
    useExam(overrideVisibility);

  useEffect(() => {
    if (!property.exam) {
      setVisible(true);
    } else setVisible(overrideVisibility);
  }, [overrideVisibility, property.exam, setVisible]);

  const propertyBase = useMemo(
    () =>
      ({
        [generatorTypes.IMAGES]: <Images property={property} visible={visible} />,
        [generatorTypes.RANGE]: <Range property={property} visible={visible} />,
        [generatorTypes.TEXT]: <Text property={property} visible={visible} />,
      }[property.type]),
    [property, visible]
  );

  return (
    <>
      {propertyBase}
      {property.exam && !visible && (
        <Button type='primary' onClick={handleExaminate}>
          Provést vyšetření
        </Button>
      )}
      {examining && <ExaminingModalLoading />}
    </>
  );
};

export default Property;

Property.propTypes = {
  visible: PropTypes.bool.isRequired,
  property: PropTypes.object.isRequired,
};
