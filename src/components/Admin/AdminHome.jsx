import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Tabs, Space } from "antd";
import { FileTextOutlined, PlusOutlined, DatabaseOutlined } from "@ant-design/icons";
import {
  ADMIN_CREATE_DIAGNOSIS,
  ADMIN_CREATE_TEMPLATE,
  ADMIN_DIAGNOSIS_LIST,
  ADMIN_TEMPLATE_LIST,
} from "../../constants/routes";

const { Title, Paragraph } = Typography;
const TabPane = Tabs.TabPane;

const AdminHome = () => {
  return (
    <>
      <Title level={2}>Administrace pro vyučujícího</Title>
      <Paragraph>
        Vítejte v administraci pro vyučujícího, kde můžete spravovat šablony a diagnózy
      </Paragraph>

      <Tabs defaultActiveKey='1'>
        <TabPane tab='Šablony' key='1'>
          <Space direction='vertical'>
            <Link to={ADMIN_CREATE_TEMPLATE}>
              <Button type='primary'>
                <PlusOutlined />
                Vytvořit šablonu
              </Button>
            </Link>
            <Link to={ADMIN_TEMPLATE_LIST}>
              <Button type='primary'>
                <FileTextOutlined /> Zobrazit seznam šablon
              </Button>
            </Link>
          </Space>
        </TabPane>

        <TabPane tab='Diagnózy' key='2'>
          <Space direction='vertical'>
            <Link to={ADMIN_CREATE_DIAGNOSIS}>
              <Button type='primary'>
                <PlusOutlined />
                Vytvořit diagnózu
              </Button>
            </Link>
            <Link to={ADMIN_DIAGNOSIS_LIST}>
              <Button type='primary'>
                <DatabaseOutlined /> Zobrazit seznam diagnóz
              </Button>
            </Link>
          </Space>
        </TabPane>
      </Tabs>
    </>
  );
};

export default AdminHome;
