import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import axe from "../../helpers/axios";
import Group from "./Group";
import DiagnosisGuessForm from "../Diagnosis/DiagnosisGuessForm";
import HeartBeatLoading from "../Loading/HeartBeat/HeartBeatLoading";

const { Title } = Typography;

const INITIAL_STATE = {
  id: "5dbc75587421ec0004754599",
  diagnosis: "Crohnova choroba ",
  title: null,
  minBonus: 50,
  maxMalus: 20,
  maxPrice: 1000,
  groups: [
    {
      id: 1,
      title: "Známé informace",
      order: 1,
      isPartialExam: false,
      properties: [
        {
          id: "5dbc75587421ec0004754593",
          order: 1,
          type: "text",
          title: "Rodinná anamnéza",
          exam: false,
          malus: 0,
          bonus: 0,
          price: 0,
          text: "otec má anginu pectoris, matka zdráva, sourozenci 2 zdraví",
          imageGroup: null,
        },
        {
          id: "5dbc75587421ec0004754594",
          order: 2,
          type: "text",
          title: "Předchozí vyšetření",
          exam: false,
          malus: 0,
          bonus: 0,
          price: 0,
          text: "běžné dětské nemoci, zápal plic v 10 letech, dosud se neléčí s žádno interní diagnózou, st.p. UCNA l.dx. pro intramurální strikturu močov 12/09, úrazy: naštípnutý ukazováček na PDK.",
          imageGroup: null,
          conditions: {
            andExams: [
              {
                exam: "5dbc75587421ec0004754594",
                orExams: ["5dbc75587421ec0004754597"],
              },
            ],
            changesTo: {
              bonus: 122,
              exam: true,
              id: "5dbc75587421ec0004754594",
              malus: 78,
              order: 2,
              price: 8,
              text: [
                "otec má anginu pectoris, matka zdráva, sourozenci nejsou :(",
                "dalsi text",
              ],
              title: "Předchozí vyšetření",
              type: "text",
            },
          },
        },
        {
          id: "5dbc75587421ec0004754595",
          order: 3,
          type: "text",
          title: "RF",
          exam: false,
          malus: 0,
          bonus: 0,
          price: 0,
          text: "nekuřák, alkohol příležitostně, drogy 0",
          imageGroup: null,
        },
      ],
    },
    {
      id: 2,
      title: "???",
      order: 2,
      isPartialExam: false,
      properties: [
        {
          id: "5dbc75587421ec0004754596",
          order: 1,
          type: "images",
          title: "RTG břicha vstoje",
          exam: true,
          malus: 0,
          bonus: 0,
          price: 0,
          text: [
            "Dilatace kliček tenkého střeva na 30 mm, naplněn žaludek tekutinou, v dolní a srední části břicha prakticky chybí plyn, nález může odpovídat incip ileoznímu event. subileosnímu stavu.",
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
      properties: [
        {
          id: "5dbc75587421ec0004754597",
          order: 1,
          type: "range",
          title: "Leukocyty",
          exam: true,
          unit: "10^9/l",
          malus: 0,
          bonus: 10,
          price: 2000,
          text: null,
          imageGroup: null,
        },
        {
          id: "5dbc75587421ec0004754598",
          order: 2,
          type: "range",
          title: "Hemoglobin",
          exam: true,
          unit: "g/l",
          malus: 10,
          bonus: 0,
          price: 2000,
          text: null,
          imageGroup: null,
        },
      ],
    },
  ],
};

const Groups = () => {
  const [card, setCard] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axe.get("student").then((response) => {
      console.log("RRRRRRR", response.data);
      // TODO prepare backend to return similar res to initial state
      // setCard(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return loading ? (
    <HeartBeatLoading />
  ) : (
    <>
      <Title level={2}>Karta pacienta</Title>
      {card.groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
      <DiagnosisGuessForm caseID={card.id} />
    </>
  );
};

export default Groups;
