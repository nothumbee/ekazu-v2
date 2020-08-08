import React, { useEffect, useState } from "react";
import { Typography, Card, Form, Button } from "antd";
import DiagnosisSelect from "../Selects/Diagnosis/Select";
import RequiredFields from "../RequiredFields/RequiredFields";
import TitleInput from "../Inputs/Helpers/TitleInput";
import FormContext from "../../context";
import axe from "../../../../helpers/Axios";
import { HeartBeat } from "../../../Loading";
import GroupsList from "../../Groups/List";
import "./Form.scss";

const { Title } = Typography;

const TemplateBaseForm = props => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [diagnosisList, setDiagnosisList] = useState([]);

  useEffect(() => {
    axe
      .get("admin/codelist/diagnosis")
      .then(result => {
        setDiagnosisList(result.data);
        setLoading(false);
        form.setFieldsValue(props.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = values => {
    console.log("FORM values", values);

    // form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //     props.handleSubmit(values);
    //   }
    // });
    props.handleSubmit(values);
  };

  return (
    <>
      {loading ? <HeartBeat /> : null}
      <Card>
        <Title level={2}>Přidání šablony</Title>
        <Form
          form={form}
          name='template_form'
          onFinish={handleSubmit}
          initialValues={props.data}
        >
          <FormContext.Provider value={form}>
            <TitleInput />
            <DiagnosisSelect diagnosisList={diagnosisList} />
            <RequiredFields />
            <GroupsList loading={loading} />
            <Form.Item wrapperCol={{ span: 12 }}>
              <Button type='primary' htmlType='submit'>
                Přidej šablonu
              </Button>
            </Form.Item>
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
          type: "text",
          title: "Rodinná anamnéza",
          exam: false,
          // malus: 0,
          // bonus: 0,
          // price: 0,
          text: ["otec má anginu pectoris, matka zdráva, sourozenci 2 zdraví"],
          // imageGroup: null,
        },
        // {
        //   id: "5dbc75587421ec0004754594",
        //   order: 2,
        //   type: "text",
        //   title: "Předchozí vyšetření",
        //   exam: false,
        //   malus: 0,
        //   bonus: 0,
        //   price: 0,
        //   text:
        //     "běžné dětské nemoci, zápal plic v 10 letech, dosud se neléčí s žádno interní diagnózou, st.p. UCNA l.dx. pro intramurální strikturu močov 12/09, úrazy: naštípnutý ukazováček na PDK.",
        //   imageGroup: null,
        // },
        // {
        //   id: "5dbc75587421ec0004754595",
        //   order: 3,
        //   type: "text",
        //   title: "RF",
        //   exam: false,
        //   malus: 0,
        //   bonus: 0,
        //   price: 0,
        //   text: "nekuřák, alkohol příležitostně, drogy 0",
        //   imageGroup: null,
        // },
      ],
    },
    // {
    //   id: 2,
    //   title: "???",
    //   order: 2,
    //   isPartialExam: false,
    //   generators: [
    //     {
    //       id: "5dbc75587421ec0004754596",
    //       order: 1,
    //       type: "images",
    //       title: "RTG břicha vstoje",
    //       exam: true,
    //       malus: 0,
    //       bonus: 0,
    //       price: 0,
    //       text: [
    //         "Dilatace kliček tenkého střeva na 30 mm, naplněn žaludek tekutinou, v dolní a srední části břicha prakticky chybí plyn, nález může odpovídat incip ileoznímu event. subileosnímu stavu.",
    //       ],
    //       imageGroup: null,
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Rozbor krve",
    //   order: 3,
    //   isPartialExam: true,
    //   generators: [
    //     {
    //       id: "5dbc75587421ec0004754597",
    //       order: 1,
    //       type: "range",
    //       title: "Leukocyty",
    //       exam: true,
    //       unit: "10^9/l",
    //       malus: 0,
    //       bonus: 10,
    //       price: 2000,
    //       text: null,
    //       imageGroup: null,
    //     },
    //     {
    //       id: "5dbc75587421ec0004754598",
    //       order: 2,
    //       type: "range",
    //       title: "Hemoglobin",
    //       exam: true,
    //       unit: "g/l",
    //       malus: 10,
    //       bonus: 0,
    //       price: 2000,
    //       text: null,
    //       imageGroup: null,
    //     },
    //     {
    //       id: "5dbc75587421ec0004754598",
    //       order: 3,
    //       type: "exam",
    //       title: "Rentgen",
    //       exam: true,
    //       unit: null,
    //       malus: null,
    //       bonus: null,
    //       price: null,
    //       text: ["Rentgen vam ukaze"],
    //       imageGroup: ["url/some.jpg"],
    //     },
    //   ],
    // },
  ],
};
