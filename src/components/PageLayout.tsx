import {NavLink, Outlet} from 'react-router-dom';
import React from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import Icon, {AuditOutlined} from '@ant-design/icons';
import '../i18n/config';
import {useTranslation} from 'react-i18next';
import {MainMenu} from "./MainMenu";

const { Content, Header, Sider } = Layout;

const PageLayout = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <MainMenu />
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background' collapsible={true} defaultCollapsed={true}
               collapsedWidth={0}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['/portal/test-result-summary']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<AuditOutlined />} key='/portal/test-result-summary'>
              <NavLink to='/portal/test-result-summary'>
                <Icon type='home' />
                <span>{t('Test result summary')}</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{t('Portal')}</Breadcrumb.Item>
            <Breadcrumb.Item>{t('Test result summary')}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
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
