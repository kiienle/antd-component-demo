import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Button, Col, Layout, Row, Space } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
    AndroidOutlined,
    UserOutlined,
    BellOutlined,
    SearchOutlined,
    SettingOutlined,
    HomeFilled,
} from "@ant-design/icons";
import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { Avatar, Menu, Badge, Input, Drawer, Switch } from "antd";
import { useState } from "react";
import Product from "../Product/product";
import Dasboard from "../../Pages/Dashboard/dashboard";
import User from "../Product/User";
const { Header, Sider, Content } = Layout;

function getItem(
    label?: any,
    key?: any,
    icon?: any,
    children?: any,
    type?: any
) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Submenu", "sub3", null, [
            getItem("Option 11", "11"),
            getItem("Option 12", "12"),
        ]),
    ]),
];

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onSearch = (value: any) => console.log(value);
    const [visible, setVisible] = useState(false);
    const [theme, setTheme] = useState(true);
    const [current, setCurrent] = useState("1");
    const [breakpoint, setBreakpoint] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const changeTheme = (value: any) => {
        setTheme(value ? true : false);
    };
    const onClick = (e: any) => {
        console.log("click ", e);
        setCurrent(e.key);
        setCollapsed(true);
    };

    const onBreakpoint = (broken: any) => {
        setBreakpoint(broken);
    };

    return (
        <Layout className="w-full">
            <Sider
                breakpoint="lg"
                collapsedWidth="80"
                className="h-screen bg-white"
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                onBreakpoint={onBreakpoint}
                style={
                    breakpoint
                        ? {
                              overflow: "auto",
                              height: "100vh",
                              position: "fixed",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              zIndex: 11,
                          }
                        : {}
                }
            >
                <div className="text-center w-full mt-3 mb-3">
                    {breakpoint && (
                        <Button onClick={() => setCollapsed(!collapsed)}>
                            <AiOutlineMenuFold />
                        </Button>
                    )}
                    {breakpoint === false && (
                        <Button onClick={() => setCollapsed(!collapsed)}>
                            <AiOutlineMenu />
                        </Button>
                    )}
                </div>
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header className="!w-full !h-fit !bg-indigo-500 !p-0">
                    <Row
                        className="text-white px-5 py-2 items-center"
                        gutter={[16, 16]}
                    >
                        <Col span={20}>
                            <div className="relative w-full">
                                <div className="absolute flex left-0 pl-4 h-full z-10 items-center">
                                    <BiSearch
                                        style={{
                                            fontSize: 20,
                                            color: "#6e7583",
                                        }}
                                    />
                                </div>
                                <Input
                                    style={{
                                        paddingLeft: 41,
                                        width: 291,
                                        color: "#000",
                                        borderRadius: 999,
                                        zIndex: 1,
                                    }}
                                    bordered
                                    placeholder="Search..."
                                    onChange={onSearch}
                                />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Space size="middle">
                                <SettingOutlined
                                    style={
                                        theme
                                            ? {
                                                  fontSize: "20px",
                                                  color: `#FFFFFF`,
                                              }
                                            : {
                                                  fontSize: "20px",
                                                  color: `#000000`,
                                              }
                                    }
                                />

                                <Badge count={5}>
                                    <BellOutlined
                                        style={
                                            theme
                                                ? {
                                                      fontSize: "20px",
                                                      color: `#FFFFFF`,
                                                  }
                                                : {
                                                      fontSize: "20px",
                                                      color: `#000000`,
                                                  }
                                        }
                                    />
                                </Badge>
                                <FaUserCircle size={30} />
                                <span className="hidden lg:block">User</span>
                            </Space>
                        </Col>
                    </Row>
                    <Row className="m-0 px-7 py-5 !w-full !h-fit flex border-t-[1px] border-slate-400 items-center !bg-indigo-500">
                        <Col span={12}>
                            <div className="flex items-center !h-[29px]">
                                <div className="text-white text-xl font-semibold inline-block mr-8">
                                    Tables
                                </div>
                                <Breadcrumb className="text-base font-semibold">
                                    <Breadcrumb.Item
                                        className="!text-white items-center"
                                        href=""
                                    >
                                        {/* <HomeFilled className="inline" /> */}
                                        Home
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="!text-white ">
                                        Product
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="flex justify-end !h-[29px]">
                                <Space size="large">
                                    <Button className="!h-full !text-indigo-500 hover:!text-black !font-semibold">
                                        New
                                    </Button>
                                    <Button className="!h-full !text-indigo-500 hover:!text-black !font-semibold">
                                        Fillters
                                    </Button>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 px-7 py-7 !w-full !bg-indigo-500"></Row>
                </Header>
                {/* <Content
                    style={
                        breakpoint
                            ? { marginLeft: 80, marginTop: -53 }
                            : {
                                  marginLeft: 30,
                                  marginRight: 30,
                                  marginTop: -53,
                              }
                    }
                >
                    <Drawer
                        title="Setting"
                        placement="right"
                        onClose={onClose}
                        visible={visible}
                    >
                        <p>Menu color</p>
                        <p>
                            <Switch
                                checked={theme === true}
                                onChange={changeTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                        </p>
                    </Drawer>
                    {current === `1` && <Dasboard />}
                    {current === `2` && <Product />}
                    {current === `3` && <User />}
                </Content> */}
            </Layout>
        </Layout>
    );
};

export default Home;
