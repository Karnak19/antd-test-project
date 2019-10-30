import React from "react";
import { Menu, Icon } from "antd";

function AuthMenu(props) {
  return (
    <Menu onClick={props.onClick} selectedKeys={[props.current]} mode="horizontal">
      <Menu.Item key="login">
        <Icon type="login" />
        Login
      </Menu.Item>
      <Menu.Item key="register">
        <Icon type="user-add" />
        Register
      </Menu.Item>
    </Menu>
  );
}

export default AuthMenu;
