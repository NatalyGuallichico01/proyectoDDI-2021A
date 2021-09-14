import React  from "react";
import "../styles/App.css";
import { Button, Form,  Input } from "antd";
import "../styles/login.css";

/*import "../styles/GreenButton.css";*/
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Log() {
  return (
    <div>
      <div className="MainContainer">

        <h1>Inicio de Sesión</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Aceptar
            </Button>
          </Form.Item>
          <div>¿No tienes cuenta? Regístrate </div>
          <div> Aquí</div>
        </Form>
      </div>
    </div>
  );
}
export default Log;