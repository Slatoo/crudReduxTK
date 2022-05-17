import React from "react";
import "antd/dist/antd.css";
import SiderForm from "./components/sider";
import Display from "./components/usersDisplay";
//import "./App.css";
import { Row, Col } from "antd";


export default function App() {
  return (
    <>
      <Row>
        <Col sm={12} span={24}>
          <SiderForm />
        </Col>
        <Col sm={12} span={24}>
          <Display />
        </Col>
      </Row>
    </>
  );
}
