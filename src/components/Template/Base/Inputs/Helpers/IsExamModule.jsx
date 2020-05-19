import React, { useContext, useState } from "react";
import FormContext from "../../../context";
import IsExamCheckbox from "./IsExamCheckbox";
import ExamNumberInputs from "./ExamNumberInputs";

const IsExamModule = ({ id, isExam: override = false }) => {
  const fieldPath = [...id, "exam"];
  const { getFieldValue } = useContext(FormContext);
  const [isExam, setIsExam] = useState(getFieldValue(fieldPath) || false);

  const handleChange = () => {
    setIsExam(getFieldValue(fieldPath));
  };

  return (
    <>
      {!override && <IsExamCheckbox id={id} handleChange={handleChange} />}
      {/* <ExamNumberInputs id={id} /> */}
      {(isExam || override) && <ExamNumberInputs id={id} />}
    </>
  );
};

export default IsExamModule;
