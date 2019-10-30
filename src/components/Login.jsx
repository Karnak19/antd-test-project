import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import ChatHttpServer from "../utils/chatHttpServer";
const { Item } = Form;

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    props.handleLoading(true);
    try {
      const res = await ChatHttpServer.login({ username, password });
      props.handleLoading(false);
      if (res.error) {
        alert("Invalid credentials !");
      } else {
        ChatHttpServer.setLS("userid", res.userId);
        props.history.push("/home");
      }
    } catch (err) {
      props.handleLoading(false);
      alert("Invalid credentials !");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
        />
      </Item>
      <Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
        />
      </Item>
      <Item>
        <Checkbox>Remember me</Checkbox>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Item>
    </Form>
  );
}

export default LoginForm;
