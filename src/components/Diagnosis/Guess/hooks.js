import axe from "../../../helpers/Axios";
import React, { useState, useEffect } from "react";

export const useHandleFinishCase = ({ caseID, exams, handleSuccess }) => {
  const [isChecking, setIsChecking] = useState(false);

  const handleFinishCase = (e, selectedDiagnosis) => {
    setIsChecking(true);
    e.preventDefault();

    if (selectedDiagnosis) {
      axe
        .post(`student/${caseID}`, {
          diagnosis: selectedDiagnosis,
          exams,
        })
        .then(response => {
          setTimeout(() => {
            setIsChecking(false);
          }, 1500);

          handleSuccess(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return { handleFinishCase, isChecking };
};

export const useDiagnosisSelect = () => {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
  const { diagnosisList } = useLoadDiagnosisList();
  const diagnosisSelect = (
    <select
      name='diagnosis'
      value={selectedDiagnosis}
      onChange={({ target }) => {
        setSelectedDiagnosis(target.value);
      }}
    >
      <option value=''>----</option>
      {diagnosisList.map((diagnosis, index) => (
        <option key={index} value={diagnosis}>
          {diagnosis}
        </option>
      ))}
    </select>
  );

  return { diagnosisSelect, selectedDiagnosis };
};

const useLoadDiagnosisList = () => {
  const [diagnosisList, setDiagnosisList] = useState([]);
  const loadDiagnosisList = () => {
    axe
      .get("student/diagnosis")
      .then(response => {
        setDiagnosisList(response.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(loadDiagnosisList, []);
  return { diagnosisList };
};
