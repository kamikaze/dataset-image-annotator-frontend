import {Menu, Popover} from "antd";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import config from "../config";
import Icon, {
  BulbOutlined,
  LoginOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  PictureOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
import {FlagIcon, FlagIconCode} from "react-flag-kit";
import React, {useState} from "react";
import {useAuth} from "../hook/useAuth";
import {useTranslation} from "react-i18next";

const MainMenu = () => {
  const {user, signout} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState<FlagIconCode>('US');
  const { t, i18n } = useTranslation();
  const rightAlignedMenuItem = {marginLeft: 'auto'};

  const onLangClick = (info: any) => {
    setLanguage(info.key.toUpperCase());
    i18n.changeLanguage(info.key);
  }

  return (
        <Menu mode='horizontal' defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
          <Icon component={() => (<img src="/favicon-32x32.png" alt={"Logo"} />)} />
          <Menu.Item key='/'>
            <NavLink to={config.PATH_ROOT + '/'}>
              <OrderedListOutlined />
              <span>{t('Scoreboard')}</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key='/play'>
            <NavLink to={config.PATH_ROOT + '/play'}>
              <PictureOutlined />
              <span>{t('Play')}!</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="spacer" style={rightAlignedMenuItem}></Menu.Item>
          { user &&
          <Menu.SubMenu key="AdminSubMenu" title={t('Admin')} icon={<SettingOutlined />}>
            <Menu.Item key='/admin/teams'>
              <NavLink to={config.PATH_ROOT + '/admin/teams'}>
                <TeamOutlined />
                <span>{t('Teams')}</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key='/admin/users'>
              <NavLink to={config.PATH_ROOT + '/admin/users'}>
                <UserOutlined />
                <span>{t('Users')}</span>
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          }
          { user &&
          <Menu.Item key="notifications" >
            <Popover placement="bottom" title={t('Notifications')} content="" trigger="click">
              <BulbOutlined />
            </Popover>
          </Menu.Item>
          }
          <Menu.SubMenu key="LangSubMenu" icon={<FlagIcon code={language} size={16} />}>
            <Menu.Item key="us" icon={<FlagIcon code="US" size={16} />} onClick={onLangClick}>
              English
            </Menu.Item>
            <Menu.Item key="lv" icon={<FlagIcon code="LV" size={16} />} onClick={onLangClick}>
              Latviešu
            </Menu.Item>
          </Menu.SubMenu>
          { !user &&
          <Menu.Item key='/login'>
            <NavLink to={config.PATH_ROOT + '/login'}>
              <LoginOutlined />
              <span>{t('Login')}</span>
            </NavLink>
          </Menu.Item>
          }
          { user &&
          <Menu.Item
            key='logout'
            onClick={() => signout(() => navigate('/', {replace: true}))}
          >
            <LogoutOutlined />
            <span>{t('Logout')}</span>
          </Menu.Item>
          }
        </Menu>
  )
}


export {MainMenu};
