import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import useExam from "../../../hooks/useExam";
import { ExaminingModal } from "../../Loading";
import * as TYPES from "../../Template/Generators/generatorTypes";
import { Images, Range, Text } from "./Types";

const Property = ({ property, visible: override = false }) => {
  const [{ visible, examining }, { handleExaminate, setVisible }] = useExam(override);

  useEffect(() => {
    if (!property.exam) {
      setVisible(true);
    } else setVisible(override);
  }, [override]);

  const getPropertyBase = useMemo(
    () =>
      ({
        [TYPES.IMAGES]: <Images property={property} visible={visible} />,
        [TYPES.RANGE]: <Range property={property} visible={visible} />,
        [TYPES.TEXT]: <Text property={property} visible={visible} />,
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
