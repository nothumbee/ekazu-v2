import { isNil, reject, compose, sort, map } from "rambda";
import { generatorTypes } from "./constants";

const rejectNil = reject(isNil);
const sortDesc = sort((a, b) => b - a);
const mapRanges = (generators) =>
  generators.map((generator, index) =>
    generator.type !== generatorTypes.RANGE ? index : null
  );

export const getGeneratorRangesIndexes = compose(sortDesc, rejectNil, mapRanges);
