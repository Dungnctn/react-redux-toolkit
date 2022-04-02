import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
// import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  SettingOutlined,
  LoginOutlined,
  ProfileOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Button, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminPage = () => {
    function handleMenuClick(e) {
        console.log('click', JSON.parse(localStorage.getItem("user")));
      }
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1"><NavLink to={'/'}>Trang chủ</NavLink></Menu.Item>
          <Menu.Item key="1">Cập nhật Admin</Menu.Item>
          <Menu.Item key="2"><Button onClick={() => localStorage.removeItem("userToken")}><NavLink to={'/'}>Dang xuat</NavLink></Button></Menu.Item>
        </Menu>
      );
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible >
        <div className="logo pt-1.5" ><span className='text-white uppercase pt-8 decoration-double'><u><i><b>Developer Dũng</b></i></u></span></div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <NavLink to={""} >Thống kê</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <NavLink to={'user'} >User</NavLink>
            </Menu.Item>
            <Menu.Item key="sub1" icon={<ProfileOutlined />}>
                <NavLink to={'category'}>Category</NavLink>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<ShopOutlined/>}>
                <NavLink to={'product'}>Product</NavLink>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShoppingCartOutlined />}>
                <NavLink to={'cart'}>Cart</NavLink>
            </Menu.Item>
        </Menu>
        </Sider>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
        <Dropdown overlay={menu}>
          <span className="avatar-item" style={{float: 'right', marginRight: '30px'}}>
            <Badge count={1}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </span>
        </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Outlet />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Dev: Nguyễn Chí Dũng</Footer>
        </Layout>
    </Layout>
  )
}

export default AdminPage