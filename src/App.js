import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScreensRoot from "./screens/Root";
import Auth from "./components/Auth";
import "antd/dist/antd.less";

const App = () => (
  <BrowserRouter>
    <Auth>
      <ScreensRoot />
    </Auth>
  </BrowserRouter>
);
export default App;
