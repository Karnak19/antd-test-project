import React, { useState } from "react";
import { Row, Col, Spin } from "antd";
import LoginForm from "../components/Login";
import RegistrationForm from "../components/Register";
import AuthMenu from "../components/AuthMenu";

function Authentication() {
  const [current, setCurrent] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = e => {
    console.log(e.key);
    setCurrent(e.key);
  };

  const handleLoading = load => {
    setIsLoading(load);
  };

  return (
    <Row style={{ height: "100vh", paddingTop: "200px" }}>
      <Spin tip="Loading..." spinning={isLoading}>
        <Col span={8} offset={8}>
          <AuthMenu current={current} onClick={handleClick} />
          {current === "login" && <LoginForm handleLoading={handleLoading} />}
          {current === "register" && <RegistrationForm handleLoading={handleLoading} />}
        </Col>
      </Spin>
    </Row>
  );
}

export default Authentication;
