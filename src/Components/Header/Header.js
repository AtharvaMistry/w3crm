import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faBell } from '@fortawesome/free-solid-svg-icons';
import myImage from './Images/photo_2023-05-01_11-08-16.jpg';
import {
    ContainerOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
    MailOutlined,
    RadarChartOutlined,
    MenuUnfoldOutlined,
    // FundProjectionScreenOutlined,
    // DatabaseOutlined,
    // EditOutlined

} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
// ant design
import { Input, Space } from 'antd';
import Employees from '../Sidebar/Employees';
import CoreHr from '../Sidebar/CoreHR';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Finance from '../Sidebar/Finance';
import Task from '../Sidebar/Task';
import Performance from '../Sidebar/Performance';
import Project from '../Sidebar/Project';
import Report from '../Sidebar/Report';
import Client from '../Sidebar/Client';
import Blog from '../Sidebar/Blog';



const { Search } = Input;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<span className='sideName'>Employees</span>, '1', <Link to='/' ><DesktopOutlined /></Link>),
    // getItem(<span className='sideName'>Core Hr</span>, '2', <Link to='/corehr'><RadarChartOutlined /></Link>),
    // getItem(<span className='sideName'>Finance</span>, '3', <Link to='/finance'><ContainerOutlined /></Link>),
    getItem(<span className='sideName'>Task</span>, 'sub1', <Link to='/task'><MailOutlined /></Link>,
        // [
        //     getItem('Task', '5'),
        //     getItem('Task Summary', '6')
        // ]
    ),
    // getItem(<span className='sideName'>Performance</span>, '7', <Link to='/performance'><MenuUnfoldOutlined /></Link>),
    // getItem(<span className='sideName'>Projects</span>, '8', <Link to='/project'><FundProjectionScreenOutlined /></Link>),
    // getItem(<span className='sideName'>Reports</span>, '9', <Link to='/report'><ContainerOutlined /></Link>),
    // getItem(<span className='sideName'>Manage Client</span>, '10', <Link to='/client'><DatabaseOutlined /></Link>),
    // getItem(<span className='sideName'>Blog</span>, '7', <Link to='/blog'><EditOutlined /></Link>),
];

const onSearch = (value) => console.log(value);

function Header() {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
                

                {/* todo */}
                




            <div className="container-fluid">
                {/* todo: header */}
                <div className="row header p-2">
                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-3 col-7 d-flex justify-content-start align-items-center text-light">
                        <p className='logo'>W3</p>
                        <div
                            style={{
                                marginTop: "14px"
                            }}
                        >
                            <Button
                                type="primary"
                                onClick={toggleCollapsed}
                                style={{
                                    marginBottom: 16,
                                }}
                            >
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </Button>

                        </div>



                        <Space direction="vertical">
                            <Search
                                placeholder="Search"
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                }}
                            />
                        </Space>

                    </div>


                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-9 col-5 d-flex justify-content-between align-items-center text-light">
                        <FontAwesomeIcon icon={faGear} className='fs-3' />
                        <FontAwesomeIcon icon={faEnvelope} className='fs-3' />
                        <FontAwesomeIcon icon={faBell} className='fs-3' />
                        <button type="button" class="btn btn-primary logoutBtn">Logout</button>
                        <div className='d-flex'>
                            <img src={myImage} alt="imag" className='myImage' />
                            <div className='ms-2 userInfo'>
                                <p className='m-0 '>Jaimeen makwana</p>
                                <p className='m-0'>info@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* todo: sidebar */}
                <div className="row mainContent ">
                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-12 p-0 sidebarScroll">
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}

                        />
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 textArea">
                        <Routes>
                            <Route path='/' element={<Employees />} />
                            <Route path='/corehr' element={<CoreHr />} />
                            <Route path='/finance' element={<Finance />} />
                            <Route path='/task' element={<Task />} />
                            <Route path='/performance' element={<Performance />} />
                            <Route path='/project' element={<Project />} />
                            <Route path='/report' element={<Report />} />
                            <Route path='/client' element={<Client />} />
                            <Route path='/blog' element={<Blog />} />
                        </Routes>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;