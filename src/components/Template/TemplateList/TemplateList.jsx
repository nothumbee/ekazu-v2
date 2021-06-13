import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Collapse, Button, List, Card } from "antd";
import Title from "antd/lib/typography/Title";
import axe from "../../../helpers/axios";
import { ADMIN_EDIT_TEMPLATE, ADMIN_DUPLICATE_TEMPLATE } from "../../../constants/routes";
import "./TemplateList.scss";

const { Panel } = Collapse;
const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  border: "1px solid #e4e4e4",
  overflow: "hidden",
};

const TemplateList = (props) => {
  const [templateList, setTemplateList] = useState([]);
  const history = useHistory();

  const loadTemplateList = () => {
    if (!templateList.length) {
      axe
        .get("/admin/template/list")
        .then((result) => {
          setTemplateList(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(loadTemplateList, []);

  const editTemplate = (id) => history.push(`${ADMIN_EDIT_TEMPLATE}?id=${id}`);
  const duplicateTemplate = (id) => history.push(`${ADMIN_DUPLICATE_TEMPLATE}?id=${id}`);

  return (
    <>
      <Title level={2}>Seznam šablon</Title>
      <Card>
        <Collapse accordion style={{ backgroundColor: "transparent", border: 0 }}>
          {templateList.map((template) => (
            <Panel
              key={template.id}
              header={template.diagnosis}
              // header={template.title}
              style={customPanelStyle}
              extra={
                <div className='exxxtra'>
                  <Button
                    onClick={() => duplicateTemplate(template.id)}
                    type='primary'
                    site='small'
                  >
                    Zkopírovat
                  </Button>
                  <Button onClick={() => editTemplate(template.id)} type='primary'>
                    Upravit
                  </Button>
                </div>
              }
            >
              <Title level={2}>{template.diagnosis}</Title>

              {template.groups.map((group) =>
                group.generators.map((generator, index) => (
                  <React.Fragment key={index}>
                    <Title level={4}> {generator.title}</Title>
                    {generator.exam && "Skryté vyšetření"}
                    {generator.text && (
                      <List
                        bordered
                        dataSource={generator.text}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                        style={{ marginBottom: "1.5em" }}
                      />
                    )}
                  </React.Fragment>
                ))
              )}
            </Panel>
          ))}
        </Collapse>
      </Card>
    </>
  );
};

export default TemplateList;
