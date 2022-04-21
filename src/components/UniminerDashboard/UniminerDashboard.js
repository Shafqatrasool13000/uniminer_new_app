import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import logo from '../../assets/logo.svg';
import logotxt from '../../assets/logo-txt.png';
import setting from '../../assets/setting.svg';
import profile from '../../assets/profile.png';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import overview from '../../assets/overview.svg';
import hosting from '../../assets/hosting.svg';
import machine from '../../assets/machine.svg';
import stake from '../../assets/stake.svg';
import { UniminerDashboardMain } from './StyledUniminerDashboard';
import Overview from '../Overview/Overview';
import Hosting from '../Hosting/Hosting';
import HostingDetail from '../Hosting/HostingDetail';
import Machines from '../Machines/Machines';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import Stake from '../Stake/Stake';

const { Header, Sider, Content } = Layout;
const UniminerDashborad = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [component, setComponent] = useState(null);
    const components=[
        {title:'overview',component:Overview},
        {title:'hosting',component:Hosting},
        {title:'machines',component:Machines},
        {title:'stake',component:Stake},
    ]
    console.log(component,'component')
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };
    const getKey = (key) => {
        const filtered=components.find(({title})=>title===key);
        setComponent(filtered.title)       
    }
    const renderSettings = () => {
         setComponent('settings');       
    }
    return (
        <UniminerDashboardMain>
            <Layout>
                {
                    !collapsed &&
                    (<Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" />
                        <div className="logo-section d-flex align-items-center justify-content-center">
                            <span className='logo-img'><img src={logo} alt="logo" /> </span>
                            <span className='logo-text-img'><img src={logotxt} alt="logo-text" /> </span>
                        </div>
                        <div className="menu-items-section">
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['overview']} onClick={(event) => getKey(event.key)}>
                                <Menu.Item key="overview" icon={!collapsed && <img src={overview} alt="overview" />}>
                                    Overview
                                </Menu.Item>
                                <Menu.Item key="hosting" icon={<img src={hosting} alt="hosting" />}>
                                    Hosting
                                </Menu.Item>
                                <Menu.Item key="machines" icon={<img src={machine} alt="machine" />}>
                                    Machines
                                </Menu.Item>
                                <Menu.Item key="stake" icon={<img src={stake} alt="stake" />}>
                                    Stake
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="profile-section">
                            <div className='profile-inner'>
                                <div className="inner-div d-flex align-items-center flex-column">
                                    <div onClick={renderSettings}  className="d-flex" style={{cursor:'pointer'}}>
                                        <span><img src={setting} alt="setting" /></span>
                                        <span className=' ms-3 menu-title' >Settings</span>
                                    </div>

                                    <div className="profile-img">
                                        <img src={profile} alt="profile" />
                                    </div>
                                    <p className="menu-title name">
                                        Johnnie Noxville
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center px-2'>
                                    <button className="logout btn">
                                        Log out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Sider>)
                }
                <Layout className="site-layout">
                    <Header style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background "

                    >
                     {component==='overview'?<Overview/>:component==='hosting'?<Hosting/>:component==='machines'?<Machines/>:component==='stake'?<Stake/>:component==='settings'?<Settings/>:<Overview/>}
                    </Content>
                </Layout>
            </Layout>
        </UniminerDashboardMain>
    );
}

export default UniminerDashborad;