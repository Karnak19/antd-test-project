import React, { useState } from "react";
import { Form, Input, Button } from "antd";

import ChatHttpServer from "../utils/chatHttpServer";

function RegistrationForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();
    props.handleLoading(true);
    try {
      const response = await ChatHttpServer.register({ username, password });
      props.handleLoading(false);
      if (response.error) {
        alert("Error !");
      } else {
        ChatHttpServer.setLS("userid", response.userId);
        props.history.push(`/home`);
      }
    } catch (err) {
      props.handleLoading(false);
      alert("Unable to register, try after some time.");
    }
  };

  const checkUsernameAvailability = async e => {
    if (e.target.value !== "" && e.target.value !== undefined) {
      setUsername(e.target.value);
      props.handleLoading(true);
      try {
        const response = await ChatHttpServer.checkUsernameAvailability(username);
        props.handleLoading(false);
        if (response.error) setUsernameAvailable(false);
        else setUsernameAvailable(true);
      } catch (err) {
        props.handleLoading(false);
        setUsernameAvailable(false);
      }
    } else if (e.target.value === "") {
      setUsernameAvailable(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* USERNAME */}
      <Form.Item label="E-mail">
        <Input onChange={checkUsernameAvailability} />
      </Form.Item>

      {/* PASSWORD */}
      <Form.Item label="Password" hasFeedback>
        <Input.Password onChange={e => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
