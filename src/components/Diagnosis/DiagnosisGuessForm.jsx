import React from "react";
import Title from "antd/lib/typography/Title";
import { useHandleFinishCase, useDiagnosisSelect } from "./hooks";
import SpinLoading from "../Loading/SpinLoading";

const DiagnosisGuessForm = ({ caseID, exams }) => {
  const { diagnosisSelect, selectedDiagnosis } = useDiagnosisSelect();

  const { handleFinishCase, isChecking } = useHandleFinishCase({
    caseID,
    exams,
    handleSuccess: handleSuccessFinishedCase,
  });

  const handleSuccessFinishedCase = ({ wasRight }) => {
    if (wasRight) {
      console.log("JE TO NA...", wasRight);
    } else console.log("Spatne kamo :");
  };

  return isChecking ? (
    <SpinLoading />
  ) : (
    <div style={{ marginTop: "2em" }}>
      <Title level={4}>Vyber o jakou diagnózu se jedná:</Title>
      <form onSubmit={(e) => handleFinishCase(e, selectedDiagnosis)}>
        {diagnosisSelect}
        <button
          className='ant-btn ant-btn-primary'
          type='submit'
          disabled={!selectedDiagnosis}
        >
          Ověřit diagnózu
        </button>
      </form>
    </div>
  );
};

export default DiagnosisGuessForm;
