import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const SignInForm = ({ redirectPath }) => {
  const history = useHistory();
  const { login } = useAuth();

  const onFinish = ({ username, password }) => {
    login({ username, password }, () => {
      if (redirectPath) {
        history.push(redirectPath);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    // TODO show failed toaster
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name='basic'
      labelCol={{
        span: 4,
        offset: 4,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='E-mail'
        name='username'
        rules={[
          {
            required: true,
            message: "Zadejte váš e-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Heslo'
        name='password'
        rules={[
          {
            required: true,
            message: "Zadejte vaše heslo!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Zapamatovat si mě</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          Přihlásit se
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
