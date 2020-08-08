import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScreensRoot from "./screens/Root";
import "antd/dist/antd.less";

const App = () => (
  <BrowserRouter>
    <ScreensRoot />
  </BrowserRouter>
);
export default App;
