import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import logo from '../../assets/logo.svg';
import logotxt from '../../assets/logo-txt.png';
import setting from '../../assets/setting.svg';
import profile from '../../assets/profile.png';
import overview from '../../assets/overview.svg';
import hosting from '../../assets/hosting.svg';
import machine from '../../assets/machine.svg';
import stake from '../../assets/stake.svg';
import { UniminerDashboardMain } from './StyledUniminerDashboard';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const { Header, Sider, Content } = Layout;
const UniminerDashborad = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const selectedMenu = location.pathname.split('/')[1];
    console.log(location.pathname.split('/')[1], 'path-name');

    const moveToOverview = () => {
        navigate('/overview');
    }
    const moveToHosting = () => {
        navigate('/hosting');
    }
    const moveToMachines = () => {
        navigate('/machines');
    }
    const moveToStake = () => {
        navigate('/stake');
    }
    const moveToSettings = () => {
        navigate('/settings');
    }
    const moveToLogin = () => {
        navigate('/');
    }


    return (
        <UniminerDashboardMain>
           
            <div className="d-block d-sm-none">
            <Navbar/>
            </div>
            <Layout>
            <div className="d-none d-sm-block">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <div className="logo-section d-flex align-items-center justify-content-center">
                        <span className='logo-img'><img src={logo} alt="logo" /> </span>
                        <span className='logo-text-img'><img src={logotxt} alt="logo-text" /> </span>
                    </div>
                    <div className="menu-items-section">
                        <Menu theme="dark" mode="inline" activeKey={selectedMenu} defaultSelectedKeys={['overview']} selected >

                            <Menu.Item key="overview" onClick={moveToOverview} icon={!collapsed && <img src={overview} alt="overview" />}>
                                Overview
                            </Menu.Item>
                            <Menu.Item key="hosting" onClick={moveToHosting} icon={<img src={hosting} alt="hosting" />}>
                                Hosting
                            </Menu.Item>
                            <Menu.Item key="machines" onClick={moveToMachines} icon={<img src={machine} alt="machine" />}>
                                Machines
                            </Menu.Item>
                            <Menu.Item key="stake" onClick={moveToStake} icon={<img src={stake} alt="stake" />}>
                                Stake
                            </Menu.Item>
                        </Menu>
                        <div className="profile-section">
                            <div className='profile-inner'>
                                <div className="inner-div d-flex align-items-center flex-column">

                                    <div className="setting-main">
                                        <div onClick={moveToSettings} className={`${selectedMenu === 'settings' ? 'd-flex settings hightlight-settings settings-bg' : 'd-flex settings'} `}   >
                                            <span><img src={setting} alt="setting" /></span>
                                            <span className='ms-3 menu-title' >Settings</span>
                                        </div>
                                    </div>

                                    <div className="profile-div">
                                        <div className="profile-img">
                                            <img src={profile} alt="profile" />
                                        </div>
                                        <p className="menu-title name">
                                            Johnnie Noxville
                                        </p>

                                    </div>
                                </div>
                                <div className='d-flex justify-content-center px-2'>
                                    <button onClick={moveToLogin} className="logout btn">
                                        Log out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Sider>
                </div>

                <Layout className="site-layout">
                    <Header style={{ padding: 0 }}>
                        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })} */}
                    </Header>
                    <Content
                        className="site-layout-background "

                    >
                        {children}

                    </Content>
                </Layout>
            </Layout>
        </UniminerDashboardMain>
    );
}

export default UniminerDashborad;