import React from "react";
import ExamInput from "../Base/Inputs/Exam/Input";
import RangeInput from "../Base/Inputs/Range/Input";
import SymptomInput from "../Base/Inputs/Symptom/Input";
import * as TYPES from "./generatorTypes";

const GeneratorSingle = ({ id, type = TYPES.TEXT, isPartialExam }) => {
  return {
    [TYPES.IMAGES]: <ExamInput id={id} />,
    [TYPES.RANGE]: <RangeInput id={id} isPartialExam={isPartialExam} />,
    [TYPES.TEXT]: <SymptomInput id={id} />,
  }[type];
};

export default GeneratorSingle;
