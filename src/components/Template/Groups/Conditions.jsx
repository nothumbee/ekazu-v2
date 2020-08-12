import React from "react";
import useFormContext from "../Base/Inputs/Exam/useFormContext";
import ExamConditions from "../Base/Inputs/Exam/ExamConditions";
import { Typography } from "antd";

const { Title } = Typography;

const Conditions = () => {
  const { getFieldValue } = useFormContext();
  const formState = getFieldValue();
  return (
    <div>
      {formState?.groups.map((group, groupIndex) =>
        group?.generators.map((generator, generatorIndex) =>
          generator?.exam ? (
            <React.Fragment key={generator.id}>
              <Title level={4}>{generator.title}</Title>
              <ExamConditions
                generator={generator}
                path={["groups", groupIndex, "generators", generatorIndex, "conditions"]}
                childPath={[
                  "groups",
                  groupIndex,
                  "generators",
                  generatorIndex,
                  "conditions",
                ]}
              />
            </React.Fragment>
          ) : null
        )
      )}
    </div>
  );
};

export default Conditions;
