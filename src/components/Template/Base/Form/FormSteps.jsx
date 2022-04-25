import React, { useState, memo } from "react";
import { Steps, Button } from "antd";
import styled from "styled-components";

const { Step } = Steps;

const FormSteps = ({ steps = [], finishButton }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <StyledSteps current={current} onChange={(step) => setCurrent(step)}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </StyledSteps>

      <div>{steps[current]?.content}</div>

      <StepAction>
        {current > 0 ? (
          <Button style={{ margin: "0 8px" }} onClick={() => setCurrent(current - 1)}>
            Předchozí
          </Button>
        ) : null}
        {current === steps.length - 1 ? finishButton : null}
        {current < steps.length - 1 ? (
          <Button type='primary' onClick={() => setCurrent(current + 1)}>
            Další
          </Button>
        ) : null}
      </StepAction>
    </div>
  );
};
export default memo(FormSteps);

const StyledSteps = styled(Steps)`
  margin-bottom: 2rem !important;
`;

const StepAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
