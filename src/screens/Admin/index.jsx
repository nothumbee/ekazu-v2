import React from "react";
import PropTypes from "prop-types";

// import { withAuthorization } from "../../components/Session";
// import { compose } from 'recompose';
// import { withRouter } from 'react-router';

import * as ROUTES from "../../constants/routes";
import TemplateAddForm from "../../components/Template/Add/Form/Form";
import TemplateList from "../../components/Template/List/List";
import DiagnosisList from "../../components/Diagnosis/List";
import DiagnosisAddForm from "../../components/Diagnosis/Add/Form";
import TemplateDuplicateForm from "../../components/Template/Duplicate/Form";
import TemplateEditForm from "../../components/Template/Edit/Form";
import AdminHome from "../../components/Admin";
import { useLocation } from "react-router";

const AdminPageBase = () => {
  return <ActionDecision />;
};

const ActionDecision = () => {
  const location = useLocation();
  switch (location.pathname) {
    case ROUTES.ADMIN:
      return <AdminHome />;

    case ROUTES.ADMIN_CREATE_TEMPLATE:
      return <TemplateAddForm />;

    case ROUTES.ADMIN_CREATE_DIAGNOSIS:
      return <DiagnosisAddForm />;

    case ROUTES.ADMIN_SHOW_TEMPLATE_LIST:
      return <TemplateList />;

    case ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST:
      return <DiagnosisList />;

    case ROUTES.ADMIN_EDIT_TEMPLATE:
      return <TemplateEditForm />;

    case ROUTES.ADMIN_DUPLICATE_TEMPLATE:
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
