import React, { useContext, useState } from "react";
import FormContext from "../../../context";
import IsExamCheckbox from "./IsExamCheckbox";
import ExamNumberInputs from "./ExamNumberInputs";

const IsExamModule = ({
  path,
  childPath,
  isExam: override = false,
  isChangeTo = false,
}) => {
  const fieldPath = [...path, "exam"];
  const { getFieldValue } = useContext(FormContext);
  const [isExam, setIsExam] = useState(getFieldValue(fieldPath) || false);

  const handleChange = () => {
    setIsExam(getFieldValue(fieldPath));
  };

  return (
    <>
      {!override && !isChangeTo ? (
        <IsExamCheckbox childPath={childPath} handleChange={handleChange} />
      ) : null}
      {isExam || override || isChangeTo ? (
        <ExamNumberInputs childPath={childPath} />
      ) : null}
    </>
  );
};

export default IsExamModule;
