import React from "react";
import useFormContext from "../Base/Inputs/Exam/useFormContext";
import ExamConditions from "../Base/Inputs/Exam/ExamConditions";
import { Typography, Card } from "antd";
import { inputCardStyles } from "../Base/Inputs/constants";

const { Title } = Typography;

const Conditions = () => {
  const { getFieldValue } = useFormContext();
  const formState = getFieldValue();
  return (
    <div>
      {formState?.groups?.map((group, groupIndex) =>
        group?.generators?.map((generator, generatorIndex) =>
          generator?.exam ? (
            <Card
              style={{
                ...inputCardStyles,
              }}
              key={generator.id}
            >
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
            </Card>
          ) : null
        )
      )}
    </div>
  );
};

export default Conditions;
