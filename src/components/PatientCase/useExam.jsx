import { useState, useMemo, useCallback } from "react";

const useExam = (overrideVisible = false) => {
  const [examining, setExamining] = useState(false);
  const [visible, setVisible] = useState(overrideVisible);

  const handleExaminate = useCallback(() => {
    setExamining(true);
    setTimeout(() => {
      setVisible(true);
      setExamining(false);
      // TODO send to server
    }, 1000);
  }, []);

  const state = {
    examining,
    visible,
  };

  const api = useMemo(
    () => ({
      handleExaminate,
      setVisible,
    }),
    [handleExaminate, setVisible]
  );

  return [state, api];
};
export default useExam;
