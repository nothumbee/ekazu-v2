import React, { useState, useEffect } from "react";
import { Input, Form, Button, Modal, Divider } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import ConditionExams from "./ConditionExams";
import GeneratorSingle from "../../../Generators/GeneratorSingle";
import useFormContext from "./useFormContext";
import { assocPath } from "rambda";

// TODO pridat moznost ulozeni rozpracovane kazuistiky
const ExamConditions = ({ path, childPath, generator }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { validateFields, getFieldValue, setFieldsValue } = useFormContext();

  const setDefaultChangesTo = () => {
    const formState = getFieldValue();
    const newState = assocPath([...path, "changesTo"], generator)(formState);
    console.log("formState", formState);
    console.log("newState", newState);
    setFieldsValue(newState);
  };

  useEffect(() => {
    setDefaultChangesTo();
  }, []);

  return (
    <Input.Group>
      <Form.List name={[...childPath, "andExams"]}>
        {(conditions, { add, remove }) => {
          return (
            <>
              {conditions.map((field, index) => (
                <React.Fragment key={field.key}>
                  <Divider>
                    Podmínka {index + 1}{" "}
                    <MinusCircleOutlined
                      className='dynamic-delete-button'
                      style={{ margin: "0 8px" }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Divider>
                  <ConditionExams index={index} path={path} parentName={field.name} />
                </React.Fragment>
              ))}

              <Button
                block
                style={{ margin: "0.7rem 0 2rem" }}
                type='dashed'
                onClick={() => {
                  // { changesTo: generatorValues } set default state

                  add();
                  console.log("generatorValues", getFieldValue(path));
                }}
              >
                <PlusOutlined />
                Přidat podmínku
              </Button>
            </>
          );
        }}
      </Form.List>
      <>
        {/* TODO change styling of this text */}
        <span style={{ marginRight: "0.5rem" }}>Pak se mění na:</span>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Upravit změny ve vyšetření
        </Button>

        <Modal
          visible={isModalOpen}
          closable
          title={"V případě splnění podmínky se změní na:"}
          cancelText={"Zrušit"}
          okText={"Uložit"}
          onOk={() => {
            const changesToPath = [...path, "changesTo"];
            validateFields([
              [...changesToPath, "malus"],
              [...changesToPath, "price"],
              [...changesToPath, "bonus"],
            ])
              .then(() => setIsModalOpen(false))
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
          onCancel={() => setIsModalOpen(false)}
        >
          <GeneratorSingle
            style={{ border: "1px solid red" }}
            path={[...childPath]}
            parentName={"changesTo"}
            isPartialExam={false}
            type={generator.type}
            isChangeTo={true}
          />
        </Modal>
      </>
    </Input.Group>
  );
};

export default ExamConditions;
