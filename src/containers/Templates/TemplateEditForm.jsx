import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TemplateBaseForm from "../../components/Template/Base/Form";
import axe from "../../helpers/axios";
import validateIncomingData from "../../components/Template/validate/Incoming";
import validateOutcomingData from "../../components/Template/validate/Outcoming";

const TemplateEditForm = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const id = location.search.split("?id=").pop();

  const handleLoadData = () => {
    if (!data) {
      axe.get(`/admin/template/${id}`).then(({ data }) => {
        // const newData = validateIncomingData(data);
        setData(data);
        // console.log("VALIDATED EDIT DATA :", validateIncomingData(data));
      });
    }
  };
  useEffect(handleLoadData, []);

  const handleSubmit = (data) => {
    // const newData = validateOutcomingData(data);
    console.log("DATA TO SEND EDITED :", data);
    // axe.put(`admin/template/${id}`, JSON.stringify(newData));
  };

  // load data and send it to base form of add template form
  return <TemplateBaseForm data={data} handleSubmit={handleSubmit} method='edit' />;
};

export default TemplateEditForm;
