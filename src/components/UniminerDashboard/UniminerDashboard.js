import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import logo from '../../assets/logo.svg';
import logotxt from '../../assets/logo-txt.png';
import setting from '../../assets/setting.svg';
import profile from '../../assets/profile.png';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import overview from '../../assets/overview.svg';
import hosting from '../../assets/hosting.svg';
import machine from '../../assets/machine.svg';
import stake from '../../assets/stake.svg';
import { UniminerDashboardMain } from './StyledUniminerDashboard';
import { Container } from 'react-bootstrap';

const { Header, Sider, Content } = Layout;

const UniminerDashborad = () => {
    const [collapsed, setCollapsed] = useState(false);


    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <UniminerDashboardMain>
            
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <div className="logo-section d-flex align-items-center justify-content-center">
                        <span className='logo-img'><img src={logo} alt="logo" /> </span>
                        <span className='logo-text-img'><img src={logotxt} alt="logo-text" /> </span>
                    </div>
                    <div className="menu-items-section">
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<img src={overview} alt="overview" />}>
                            Overview
                        </Menu.Item>
                        <Menu.Item key="2" icon={<img src={hosting} alt="hosting" />}>
                            Hosting
                        </Menu.Item>
                        <Menu.Item key="3" icon={<img src={machine} alt="machine" />}>
                            Machines
                        </Menu.Item>
                        <Menu.Item key="4" icon={<img src={stake} alt="stake" />}>
                            Stake
                        </Menu.Item>
                    </Menu>
                    </div>
                    <div className="profile-section">
                    <div className='profile-inner'>
                        <div className="inner-div d-flex align-items-center flex-column">
                         <div className="d-flex">
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
                        <div className='d-flex justify-content-center'>
                        <button className="logout btn">
                        Log out
                        </button>
                        </div>
                    </div>
                    </div>
                    
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </UniminerDashboardMain>
    );
}


export default UniminerDashborad;