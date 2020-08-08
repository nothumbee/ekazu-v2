import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Menu, Layout } from "antd";
import styled from "styled-components";
import {
  PlusCircleOutlined,
  FormOutlined,
  OrderedListOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import * as ROUTES from "../../constants/routes";
import Logo from "./logo.svg";

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  height: 40px;
`;

const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const AppBar = ({ authUser = true }) => {
  const location = useLocation();
  const history = useHistory();
  const [current, setCurrent] = useState(location.pathname);
  history.listen(() => setCurrent(location.pathname));

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Header className='header'>
      <StyledLogoLink to={ROUTES.LANDING}>
        <StyledLogo />
      </StyledLogoLink>

      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' theme='dark'>
        <Menu.Item key={ROUTES.LANDING}>
          <Link to={ROUTES.LANDING}>Úvod</Link>
        </Menu.Item>

        <SubMenu title='Učitel'>
          <MenuItemGroup title='Vytvořit'>
            <Menu.Item key={ROUTES.ADMIN_CREATE_TEMPLATE}>
              <Link to={ROUTES.ADMIN_CREATE_TEMPLATE}>
                <PlusCircleOutlined />
                Vytvořit šablonu
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
              <Link to={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
                <PlusCircleOutlined />
                Vytvořit diagnózu
              </Link>
            </Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup title='Zobrazit'>
            <Menu.Item key={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
              <Link to={ROUTES.ADMIN_SHOW_TEMPLATE_LIST}>
                <OrderedListOutlined />
                Zobrazit seznam šablon
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
              <Link to={ROUTES.ADMIN_SHOW_DIAGNOSIS_LIST}>
                <FormOutlined />
                Zobrazit seznam diagnóz
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key={ROUTES.STUDENT}>
          <Link to={ROUTES.STUDENT}>Student</Link>
        </Menu.Item>

        {!authUser ? (
          <Menu.Item key={ROUTES.SIGN_IN}>
            <Link to={ROUTES.SIGN_IN}>
              <LoginOutlined />
              Přihlásit se
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item
            key='LOGOUT'
            onClick={() => sessionStorage.setItem("authUser", false)}
          >
            <LogoutOutlined />
            Odhlásit se
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default AppBar;
