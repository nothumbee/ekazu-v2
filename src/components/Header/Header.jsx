import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Menu, Layout, Space } from "antd";
import styled from "styled-components";
import {
  LoginOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  FormOutlined,
  OrderedListOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import * as ROUTES from "../../constants/routes";
import Logo from "./logo.svg";
import useAuth from "../Auth/hooks/useAuth";

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [current, setCurrent] = useState(location.pathname);
  history.listen(() => setCurrent(location.pathname));

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <StyledHeader className='header'>
      <StyledLogoLink to={ROUTES.LANDING}>
        <StyledLogo />
      </StyledLogoLink>

      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' theme='dark'>
        <Menu.Item key={ROUTES.LANDING}>
          <Link to={ROUTES.LANDING}>Úvod</Link>
        </Menu.Item>

        <SubMenu title='Učitel' key={ROUTES.ADMIN}>
          <MenuItemGroup title='Vytvořit'>
            <Menu.Item key={ROUTES.ADMIN_CREATE_TEMPLATE}>
              <Link to={ROUTES.ADMIN_CREATE_TEMPLATE}>
                <Space>
                  <PlusCircleOutlined />
                  Vytvořit šablonu
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
              <Link to={ROUTES.ADMIN_CREATE_DIAGNOSIS}>
                <Space>
                  <PlusCircleOutlined />
                  Vytvořit diagnózu
                </Space>
              </Link>
            </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title='Zobrazit'>
            <Menu.Item key={ROUTES.ADMIN_TEMPLATE_LIST}>
              <Link to={ROUTES.ADMIN_TEMPLATE_LIST}>
                <Space>
                  <OrderedListOutlined />
                  Zobrazit seznam šablon
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_DIAGNOSIS_LIST}>
              <Link to={ROUTES.ADMIN_DIAGNOSIS_LIST}>
                <Space>
                  <FormOutlined />
                  Zobrazit seznam diagnóz
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTES.ADMIN_HISTORY}>
              <Link to={ROUTES.ADMIN_HISTORY}>
                <Space>
                  <HistoryOutlined />
                  Zobrazit historii testů
                </Space>
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <SubMenu title='Student' key={ROUTES.STUDENT}>
          <Menu.Item key={ROUTES.STUDENT_EXAM}>
            <Link to={ROUTES.STUDENT}>Zkusit test</Link>
          </Menu.Item>
          <Menu.Item key={ROUTES.STUDENT_HISTORY}>
            <Link to={ROUTES.STUDENT_HISTORY}>Zobrazit historii</Link>
          </Menu.Item>
        </SubMenu>

        {!user ? (
          <Menu.Item key={ROUTES.SIGN_IN}>
            <Link to={ROUTES.SIGN_IN}>
              <Space>
                <LoginOutlined />
                Přihlásit se
              </Space>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item key='LOGOUT' onClick={logout}>
            <Space>
              <LogoutOutlined />
              Odhlásit se
            </Space>
          </Menu.Item>
        )}
      </Menu>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled(Layout.Header)`
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
