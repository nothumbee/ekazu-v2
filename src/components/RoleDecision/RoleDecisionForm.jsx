import React from "react";
import { Link } from "react-router-dom";
import { STUDENT, ADMIN } from "../../constants/routes";
import StudentIllustration from "./student.svg";
import TeacherIllustration from "./teacher.svg";
import RightVawe from "./right-vawe.svg";
import LeftVawe from "./left-vawe.svg";
import "./RoleDecisionForm.scss";

const RoleDecisionForm = () => {
  return (
    <div className={"RoleDecisionForm"}>
      <div className={"RoleDecisionForm-wrapper"}>
        <div className={"RoleDecisionForm-title"}>Jste vyučující nebo student?</div>
        <Link to={STUDENT}>
          <div className={"RoleDecisionForm-item"}>
            <StudentIllustration className={"RoleDecisionForm-illustration"} />
            <div className={"RoleDecisionForm-text"}>Student</div>
          </div>
        </Link>
        <Link to={ADMIN}>
          <div className={"RoleDecisionForm-item"}>
            <TeacherIllustration className={"RoleDecisionForm-illustration"} />
            <div className={"RoleDecisionForm-text"}>Vyučující</div>
          </div>
        </Link>
      </div>
      <LeftVawe className={"RoleDecisionForm-leftVawe"} />
      <RightVawe className={"RoleDecisionForm-rightVawe"} />
    </div>
  );
};

export default RoleDecisionForm;
