import React, { useEffect, useState } from "react";
import { Typography, Card, Form, Button } from "antd";
import DiagnosisSelect from "../Inputs/DiagnosisSelect";
import RequiredFields from "../Inputs/RequiredFields";
import TitleInput from "../Inputs/TitleInput";
import FormContext from "../../context";
import axe from "../../../../helpers/axios";
import GroupsList from "../../Groups/GroupsList";
import FormSteps from "./FormSteps";
import Conditions from "../../Groups/Conditions";
import HeartBeatLoading from "../../../Loading/HeartBeat/HeartBeatLoading";
import "./TemplateBaseForm.scss";

const { Title } = Typography;

const TemplateBaseForm = ({ data, handleSubmit }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [diagnosisList, setDiagnosisList] = useState([]);

  useEffect(() => {
    axe
      .get("admin/codelist/diagnosis")
      .then((result) => {
        setDiagnosisList(result.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (values) => {
    console.log("FORM values", values);

    // form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //     handleSubmit(values);
    //   }
    // });
    handleSubmit(values);
  };

  return (
    <>
      {loading ? <HeartBeatLoading /> : null}
      <Card>
        <Title level={2}>Přidání šablony</Title>
        <Form
          form={form}
          name='template_form'
          onFinish={onSubmit}
          // initialValues={INITIAL_STATE}
          size='small'
        >
          <FormContext.Provider value={form}>
            <FormSteps
              steps={[
                {
                  title: "Základní informace",
                  content: (
                    <>
                      <TitleInput />
                      <DiagnosisSelect diagnosisList={diagnosisList} />
                      <RequiredFields />
                    </>
                  ),
                },
                {
                  title: "Skupiny vyšetření",
                  content: <GroupsList loading={loading} />,
                },
                {
                  title: "Podmínky vyšetřování",
                  content: <Conditions />,
                },
              ]}
              finishButton={
                // <Form.Item wrapperCol={{ span: 12 }}>
                <Button
                  type='primary'
                  onClick={() => console.log("getFieldValue", form.getFieldValue())}
                >
                  Přidej šablonu
                </Button>
                // </Form.Item>
              }
            />
            {/* <TitleInput /> */}
            {/* <DiagnosisSelect diagnosisList={diagnosisList} /> */}
            {/* <RequiredFields /> */}

            {/* <GroupsList loading={loading} /> */}
          </FormContext.Provider>
        </Form>
      </Card>
    </>
  );
};

export default TemplateBaseForm;

export const INITIAL_STATE = {
  id: "5dbc75587421ec0004754599",
  diagnosis: "Crohnova choroba ",
  title: "Zdravý člověk",
  minBonus: 50,
  maxMalus: 20,
  maxPrice: 1000,
  groups: [
    {
      id: 1,
      title: "Známé informace",
      order: 1,
      isPartialExam: false,
      generators: [
        {
          id: "5dbc75587421ec0004754593",
          order: 1,
          type: "images",
          title: "Rodinná anamnéza",
          exam: false,
          text: [
            "otec má anginu pectoris, matka zdráva, sourozenci 2 zdraví",
            "dalsi text",
          ],
          imageGroup: null,
        },
        {
          id: "5dbc75587421ec0004754594",
          order: 2,
          type: "text",
          title: "Předchozí vyšetření",
          exam: true,
          malus: 0,
          bonus: 0,
          price: 0,
          text: [
            "otec má anginu pectoris, matka zdráva, sourozenci nejsou :(",
            "dalsi text",
          ],
        },
        {
          id: "5dbc75587421ec0004754595",
          title: "RANGE TEST",
          order: 3,
          type: "range",
          exam: false,
          text: ["nekuřák, alkohol příležitostně, drogy 0"],
        },
        {
          id: "5dbc75587421ec000475s595",
          title: "OBRAZKY TEST",
          order: 4,
          type: "images",
          exam: false,
          text: ["nekuřák, alkohol příležitostně, drogy 0"],
          imageGroup: ["image.lol"],
        },
      ],
    },
    {
      id: 2,
      title: "Dalsi infoT",
      order: 2,
      isPartialExam: false,
      generators: [
        {
          id: "5dbc75587421ec0004754593",
          order: 1,
          type: "text",
          title: "Rodinná anamnéza",
          exam: false,
          text: [
            "otec má anginu pectoris, matka zdráva, sourozenci 2 zdraví",
            "dalsi text",
          ],
          imageGroup: null,
        },
        {
          id: "5dbc75587421ec00047d4593",
          order: 2,
          type: "text",
          title: "Rodinná anamnéza",
          exam: false,
          text: [
            "otec má anginu pectoris, matka zdráva, sourozenci 2 zdraví",
            "dalsi text",
          ],
          imageGroup: null,
        },
      ],
    },
    {
      id: 3,
      title: "Rozbor krve",
      order: 3,
      isPartialExam: true,
      // TODO BE - add check - partial exam can only contain ranges
      generators: [
        {
          id: "5dbc75587421ec0004754597",
          order: 1,
          type: "range",
          min: 23,
          max: 26.4,
          title: "Leukocyty",
          exam: true,
          unit: "10^9/l",
          malus: 0,
          bonus: 10,
          price: 2000,
          text: ["dsadasd"],
          imageGroup: null,
        },
        {
          id: "5dbc75587421ec00047d4598",
          order: 2,
          type: "range",
          min: 2,
          max: 28.4,
          title: "Hemoglobin",
          exam: true,
          unit: "g/l",
          malus: 10,
          bonus: 0,
          price: 2000,
          text: ["sd"],
          imageGroup: null,
        },
        {
          id: "5dbc75587421ec0004754598",
          order: 3,
          type: "range",
          title: "Rentgen",
          exam: true,
          unit: null,
          malus: null,
          bonus: null,
          price: null,
          // FIXME BE - return undefined or nothing for missing values
          text: undefined,
          imageGroup: ["url/some.jpg"],
        },
      ],
    },
  ],
};
