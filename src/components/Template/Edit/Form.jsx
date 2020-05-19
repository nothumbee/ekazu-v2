import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TemplateBaseForm from "../Base/Form/Form";
import axe from "../../../helpers/Axios";
import validateIncomingData from "../Validate/Incoming";
import validateOutcomingData from "../Validate/Outcoming";

const TemplateEditForm = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const id = location.search.split("?id=").pop();

  const handleLoadData = () => {
    if (!data) {
      axe.get(`/admin/template/${id}`).then(response => {
        const newData = validateIncomingData(response.data);
        setData(newData);
        console.log("VALIDATED EDIT DATA :", validateIncomingData(response.data));
      });
    }
  };
  useEffect(handleLoadData, []);

  const handleSubmit = data => {
    // const newData = validateOutcomingData(data);
    console.log("DATA TO SEND EDITED :", data);
    // axe.put(`admin/template/${id}`, JSON.stringify(newData));
  };

  // load data and send it to base form of add template form
  return (
    data && <TemplateBaseForm data={data} handleSubmit={handleSubmit} method='edit' />
  );
};

export default TemplateEditForm;
