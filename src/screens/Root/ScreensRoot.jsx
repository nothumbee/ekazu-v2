import React from "react";
import { Route, Switch } from "react-router";
import { Layout, Affix } from "antd";
import * as ROUTES from "../../constants/routes";
import Header from "../../components/Header";
import FooterCredits from "../../components/Footer";
import LandingPage from "../LandingPage";
import AdminPage from "../AdminPage";
import SignInPage from "../Auth/SignIn";
import SignUpPage from "../Auth/SignUp";
import PrivateRoute from "../../components/Auth/PrivateRoute";
import WrongUserRolePage from "../WrongUserRolePage";
import StudentPage from "../StudentPage";
import "./ScreensRoot.scss";

const { Footer, Content } = Layout;

const ScreensRoot = () => {
  return (
    <Layout className={"Container"}>
      <Affix>
        <Header />
      </Affix>
      <Content className={"Content"}>
        <div className={"inside"}>
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.STUDENT} component={StudentPage} />
            <PrivateRoute path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.WRONG_USER_ROLE} component={WrongUserRolePage} />
          </Switch>
        </div>
      </Content>
      <Footer>
        <FooterCredits />
      </Footer>
    </Layout>
  );
};
export default ScreensRoot;
