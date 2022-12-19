import {useLocation, useNavigate} from "react-router-dom";
import {Button, Form, Input, Layout, message} from 'antd';
import React from 'react';
import {useTranslation} from 'react-i18next';
import config from '../config';
import {LoginOutlined} from '@ant-design/icons';
import {useAuth} from "../hook/useAuth";

const {Content} = Layout;
const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16}
};
const tailLayout = {
  wrapperCol: {offset: 8, span: 16}
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();
  const {t} = useTranslation();
  const fromPage = location.state?.from?.pathname || '/';

  const onFinish = async (values: any) => {
    signin(values.username, () => navigate(fromPage, {replace: true}));

    return

    let body = new URLSearchParams();
    body.set('username', values.username);
    body.set('password', values.password);

    const response = await fetch(config.API_BASE_URL + '/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: body
    });

    if (response.ok) {
      //TOOO
      //props.setIsAuthenticated(true);
      signin(values.username, () => navigate(fromPage, {replace: true}));
      message.info('Login succeeded');
    } else {
      if (response.status === 400) {
        message.error(t('Unable to login'));
      } else {
        message.error(t('Error occurred'));
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Layout style={{padding: '0 24px 24px'}}>
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <Form
            {...layout}
            name='basic'
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={t('Username')}
              name='username'
              rules={[{required: true, message: t('Please input your username!')}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label={t('Password')}
              name='password'
              rules={[{required: true, message: t('Please input your password!')}]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit'>
                <LoginOutlined/>
                {t('Log in')}
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  )
}

export {LoginPage};
