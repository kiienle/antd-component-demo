import React, { useEffect } from "react";
import { Layout, Row } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/SideBar";
const { Content, Footer } = Layout;

const Home2 = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleSetCollapsed = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };
    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sidebar collapsed={collapsed} setCollapsed={handleSetCollapsed} />
            <Layout className="site-layout !w-full">
                <Navigation
                    collapsed={collapsed}
                    setCollapsed={handleSetCollapsed}
                />

                <Content>
                    <Row className="!w-full site-layout-background">
                        <Outlet />
                    </Row>
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Home2;
