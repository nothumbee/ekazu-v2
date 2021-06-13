import React from "react";
import { Modal } from "antd";
import SpinLoading from "./SpinLoading";

const ExaminingModalLoading = () => {
  return (
    <Modal visible footer={null} closable={false} style={{ textAlign: "center" }}>
      Vyšetřuji pacienta
      <SpinLoading />
    </Modal>
  );
};

export default ExaminingModalLoading;
