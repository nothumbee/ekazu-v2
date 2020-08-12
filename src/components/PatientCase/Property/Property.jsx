import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import useExam from "../../../hooks/useExam";
import { ExaminingModal } from "../../Loading";
import generatorTypes from "../../Template/Generators/generatorTypes";
import { Images, Range, Text } from "./Types";

const Property = ({ property, visible: overrideVisibility = false }) => {
  const [{ visible, examining }, { handleExaminate, setVisible }] = useExam(
    overrideVisibility
  );

  useEffect(() => {
    if (!property.exam) {
      setVisible(true);
    } else setVisible(overrideVisibility);
  }, [overrideVisibility]);

  const getPropertyBase = useMemo(
    () =>
      ({
        [generatorTypes.IMAGES]: <Images property={property} visible={visible} />,
        [generatorTypes.RANGE]: <Range property={property} visible={visible} />,
        [generatorTypes.TEXT]: <Text property={property} visible={visible} />,
      }[property.type])
  );

  return (
    <>
      {getPropertyBase}
      {property.exam && !visible && (
        <Button type='primary' onClick={handleExaminate}>
          Provést vyšetření
        </Button>
      )}
      {examining && <ExaminingModal />}
    </>
  );
};

export default Property;

Property.propTypes = {
  visible: PropTypes.bool.isRequired,
  property: PropTypes.object.isRequired,
};
