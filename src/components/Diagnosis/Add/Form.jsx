import React, { useState } from "react";
import { Typography, Card, Alert, message } from "antd";
import axe from "../../../helpers/axios";
import { ADMIN_SHOW_DIAGNOSIS_LIST } from "../../../constants/routes";
import { useHistory } from "react-router";

const { Title } = Typography;

const DiagnosisAddForm = () => {
  const [diagnosis, setDiagnosis] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    axe
      .post("/admin/codelist/diagnosis", { definition: diagnosis })
      .then(() => {
        setIsSuccess(true);
        message.success("Šablona úspěšně nahrána.");
        history.push(ADMIN_SHOW_DIAGNOSIS_LIST);
      })
      .catch(() => setIsError(true));
  };

  return (
    <>
      <Title level={2}>Přidání diagnózy</Title>
      <Card>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='diagnosis'
            placeholder='Název diagnózy'
            value={diagnosis}
            onChange={({ target }) => setDiagnosis(target.value)}
            required
          />
          <input type='submit' value='Přidat diagnózu' />
        </form>
        {isSuccess && <Alert message='Diagnóza úspěšně přidána.' type='success' />}
        {isError && <Alert message='Někde se stala chyba.' type='error' />}
      </Card>
    </>
  );
};

export default DiagnosisAddForm;
