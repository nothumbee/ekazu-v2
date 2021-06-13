import React from "react";

// import { withAuthorization } from "../../components/Session";
// import { compose } from 'recompose';
// import { withRouter } from 'react-router';

import TemplateList from "../../components/Template/TemplateList/TemplateList";
import DiagnosisList from "../../components/Diagnosis/DiagnosisList";
import DiagnosisAddForm from "../../components/Diagnosis/DiagnosisAddForm";
import AdminHome from "../../components/Admin";
import { useLocation } from "react-router";
import {
  ADMIN,
  ADMIN_CREATE_DIAGNOSIS,
  ADMIN_CREATE_TEMPLATE,
  ADMIN_DIAGNOSIS_LIST,
  ADMIN_DUPLICATE_TEMPLATE,
  ADMIN_EDIT_TEMPLATE,
  ADMIN_TEMPLATE_LIST,
} from "../../constants/routes";
import TemplateAddForm from "../../containers/Templates/TemplateAddForm";
import TemplateEditForm from "../../containers/Templates/TemplateEditForm";
import TemplateDuplicateForm from "../../containers/Templates/TemplateDuplicateForm";

const AdminPageBase = () => {
  return <ActionDecision />;
};

const ActionDecision = () => {
  const location = useLocation();
  console.log("location", location);
  switch (location.pathname) {
    case ADMIN:
      return <AdminHome />;

    case ADMIN_CREATE_TEMPLATE:
      return <TemplateAddForm />;

    case ADMIN_CREATE_DIAGNOSIS:
      return <DiagnosisAddForm />;

    case ADMIN_TEMPLATE_LIST:
      return <TemplateList />;

    case ADMIN_DIAGNOSIS_LIST:
      return <DiagnosisList />;

    case ADMIN_EDIT_TEMPLATE:
      return <TemplateEditForm />;

    case ADMIN_DUPLICATE_TEMPLATE:
      return <TemplateDuplicateForm />;
    // edit, delete template, insert as copy of existing template
    default:
      return null;
  }
};

// const condition = authUser => !!authUser;
// const AdminPage = withAuthorization(condition)(AdminPageBase);
// for preview purposes removed authorization
const AdminPage = AdminPageBase;

export default AdminPage;
