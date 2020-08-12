import React, { useState, memo } from "react";
import { Steps, Button, message } from "antd";
import "./FormSteps.scss";

const { Step } = Steps;

const FormSteps = ({ steps = [], finishButton }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Steps current={current} style={{ marginBottom: "1rem" }}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div>{steps[current]?.content}</div>

      <div className='FormSteps-actions'>
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
      </div>
    </div>
  );
};

export default memo(FormSteps);
