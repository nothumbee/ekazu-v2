import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TemplateBaseForm from "../Base/Form/Form";
import axe from "../../../helpers/Axios";
import validateIncomingData from "../Validate/Incoming";
import validateOutcomingData from "../Validate/Outcoming";

const TemplateDuplicateForm = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const id = location.search.split("?id=").pop();

  const handleLoadData = () => {
    console.log(!data);
    if (!data) {
      axe.get(`/admin/template/${id}`).then(response => {
        console.log("hello");
        const newData = validateIncomingData(response.data, "duplicate");
        setData(response.data);
      });
    }
  };

  useEffect(handleLoadData, []);

  const handleSubmit = data => {
    const validData = validateOutcomingData(data, "duplicate");
    console.log("VALIDATED DATA TO SEND DUPLICATE :", validData);
    axe.post("admin/template/", JSON.stringify(validData));
  };

  // load data and send it to base form of add template form
  return (
    data && (
      <TemplateBaseForm data={data} handleSubmit={handleSubmit} method='duplicate' />
    )
  );
};

export default TemplateDuplicateForm;
