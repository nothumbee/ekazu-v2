import { filter, propEq, map, prop, compose, chain, identity } from "rambda";

const unnest = chain(identity);
const filterExams = filter(propEq("exam", true));
const getExams = compose(unnest, map(compose(filterExams, prop("generators"))));

const getExamOptions = (groups) =>
  getExams(groups).map((exam) => ({
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
