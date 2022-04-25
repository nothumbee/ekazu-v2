import React from "react";
import { Table, Card } from "antd";
import Title from "antd/lib/typography/Title";
import { useDiagnosisList } from "./hooks";

const DiagnosisList = () => {
  const { diagnosisList } = useDiagnosisList();

  const dataSource = diagnosisList.map((diagnosis, index) => ({
    key: index,
    ...diagnosis,
  }));

  const columns = Object.keys(diagnosisList[0] ? diagnosisList[0] : []).map((key) => ({
    title: key,
    dataIndex: key,
    key: key,
  }));

  console.log("dataSource :", dataSource);

  return (
    <>
      <Title level={2}>Seznam diagnóz</Title>
      <Card>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default DiagnosisList;
