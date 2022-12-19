import {Outlet} from 'react-router-dom';
import React from 'react';
import {Layout, theme} from 'antd';
import '../i18n/config';
import {MainMenu} from "./MainMenu";

const { Content, Header } = Layout;
const { useToken } = theme;

const PageLayout = () => {
  const { token } = useToken();

  return (
    <Layout>
      <Header style={{ backgroundColor: token.colorBgBase }}>
        <MainMenu />
      </Header>
      <Layout>
        <Layout>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 800
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export {PageLayout};
