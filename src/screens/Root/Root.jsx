import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Layout, Affix } from "antd";
import * as ROUTES from "../../constants/routes";
import AppBar from "../../components/AppBar";
import FooterCredits from "../../components/Footer";
import LandingPage from "../Landing";
import AdminPage from "../Admin";
import StudentPage from "../Student";
import SignInPage from "../Admin";
import "./Root.scss";

const { Footer, Content } = Layout;

const ScreensRoot = () => {
  return (
    <BrowserRouter>
      <Layout className={"Container"}>
        <Affix>
          <AppBar />
        </Affix>
        <Content className={"Content"}>
          <div className={"inside"}>
            <Switch>
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.STUDENT} component={StudentPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            </Switch>
          </div>
        </Content>
        <Footer>
          <FooterCredits />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default ScreensRoot;
