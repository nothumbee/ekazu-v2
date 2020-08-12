import React, { memo } from "react";
import ExamInput from "../Base/Inputs/Exam/Input";
import RangeInput from "../Base/Inputs/Range/Input";
import SymptomInput from "../Base/Inputs/Symptom/Input";
import generatorTypes from "./generatorTypes";
import { includes, __, values } from "ramda";

const generatorTypesContains = includes(__, values(generatorTypes));

const GeneratorSingle = ({
  parentName,
  path,
  type = generatorTypes.TEXT,
  isPartialExam,
  style = {},
  isChangeTo = false,
}) => {
  if (generatorTypesContains(type)) {
    // tady chceme path[path.length - 1] nebo navic parentName
    const childPath = isChangeTo ? [...path, parentName] : [path[path.length - 1]];
    const props = {
      path: path,
      isChangeTo: isChangeTo,
      childPath: childPath,
      style: style,
    };
    return {
      [generatorTypes.IMAGES]: <ExamInput {...props} />,
      [generatorTypes.RANGE]: <RangeInput {...props} isPartialExam={isPartialExam} />,
      [generatorTypes.TEXT]: <SymptomInput {...props} style={style} />,
    }[type];
  } else {
    return null;
  }
};

export default memo(GeneratorSingle);
