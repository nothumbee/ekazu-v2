import React from "react";
import HeartBeatSvg from "./HeartBeat.svg";
import "./index.scss";

const HeartBeatLoading = () => (
  <div className={"Loading-bgCover"}>
    <div className={"HeartBeat"}>
      <HeartBeatSvg className={"HeartBeat-svgDraw"} />
      <div className={"HeartBeat-innerCircle"} />
      <div className={"HeartBeat-outerCircle"} />
    </div>
  </div>
);

export default HeartBeatLoading;
