import { useEffect, useState } from "react";
import axe from "../../helpers/axios";

const useDiagnosisList = () => {
  const [diagnosisList, setDiagnosisList] = useState([]);
  const loadDiagnosisList = () => {
    axe
      .get("/admin/codelist/diagnosis")
      .then(result => {
        setDiagnosisList(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(loadDiagnosisList, []);

  return { diagnosisList };
};

export default useDiagnosisList;
