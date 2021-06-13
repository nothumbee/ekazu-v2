import React, { memo } from "react";
import ExamInput from "../Base/Inputs/Exam/ExamInput";
import RangeInput from "../Base/Inputs/RangeInput";
import SymptomInput from "../Base/Inputs/SymptomInput";
import { generatorTypes } from "./constants";
import { includes, values } from "rambda";

const generatorTypesContains = (type) => includes(type, values(generatorTypes));

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
