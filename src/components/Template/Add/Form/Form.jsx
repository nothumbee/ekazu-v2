import React, { useState } from "react";
import { Alert, message } from "antd";
import TemplateBaseForm from "../../Base/Form";
import { useHistory } from "react-router";
import { ADMIN_SHOW_TEMPLATE_LIST } from "../../../../constants/routes";
// import axe from "../../../../helpers/Axios";
// import validateOutcomingData from "../../Validate/Outcoming";

const TemplateAddForm = () => {
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const handleSubmit = data => {
    console.log("adding data", data);

    message.success("Šablona úspěšně nahrána.");
    // history.push(ADMIN_SHOW_TEMPLATE_LIST);

    // const validData = validateOutcomingData(data, "add");
    // axe
    //   .post("/admin/template/", JSON.stringify(validData))
    //   .then(response => setIsSuccess(true))
    //   .catch(err => setIsError(true));
  };

  return (
    <>
      <TemplateBaseForm handleSubmit={handleSubmit} method='create' />
      {isError && <Alert message='Někde se stala chyba.' type='error' />}
    </>
  );
};

export default TemplateAddForm;
