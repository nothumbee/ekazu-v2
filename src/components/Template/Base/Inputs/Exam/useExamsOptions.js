import { filter, propEq, map, prop, o, unnest } from "ramda";

const filterExams = filter(propEq("exam", true));
const getExams = o(unnest, map(o(filterExams, prop("generators"))));

const getExamOptions = groups =>
  getExams(groups).map(exam => ({
    label: exam.title,
    value: exam.id,
  }));

const useExamsOptions = ({ groups }) => {
  // TODO drzet info o tom, jaka vysetreni jsou prave vybrana a podle toho validovat
  // TODO potrebuju tady i exams z partialExam generatoru?
  const examOptions = getExamOptions(groups);
  return { examOptions };
};

export default useExamsOptions;
