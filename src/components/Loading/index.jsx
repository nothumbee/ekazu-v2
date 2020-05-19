import React from "react";
import { Skeleton, Spin, Modal } from "antd";
import HeartBeat from "./HeartBeat";

export const LoadingSkeleton = () => <Skeleton active />;

export const ExaminingModal = () => (
  <Modal visible footer={null} closable={false} style={{ textAlign: "center" }}>
    Vyšetřuji pacienta
    <LoadingSpin />
  </Modal>
);

export const LoadingSpin = () => <Spin style={{ margin: "0.8em" }} />;

export { HeartBeat };
