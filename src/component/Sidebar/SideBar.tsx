import { useEffect, useState } from "react";
import {
    AiFillCreditCard,
    AiOutlineFolderOpen,
    AiOutlineHome,
    AiOutlineMenu,
    AiOutlineMenuFold,
    AiOutlineTable,
    AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineCursorClick } from "react-icons/hi";
import { Button, Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;

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
    getItem(
        <Link to="/dashboard">
            <span>Dashboard</span>
        </Link>,
        "/dashboard",
        <AiOutlineHome size={20} color="#5f73e3" />
    ),
    getItem(
        "Components",
        "sub1",
        <AiOutlineFolderOpen size={20} color="#46d7f2" />,
        [
            getItem(
                <Link to="/components/buttons">
                    <span>Buttons</span>
                </Link>,
                "/components/buttons",
                <HiOutlineCursorClick
                    size={20}
                    color="#f85676"
                    style={{ display: "inline" }}
                />
            ),
            getItem(
                <Link to="/components/tables">
                    <span>Tables</span>
                </Link>,
                "/component/tables",
                <AiOutlineTable
                    size={20}
                    color="#5f73e3"
                    style={{ display: "inline" }}
                />
            ),
            getItem(
                <Link to="/components/cards">
                    <span>Cards</span>
                </Link>,
                "location.key",
                <AiFillCreditCard
                    size={20}
                    color="#fc7b5f"
                    style={{ display: "inline" }}
                />
            ),
        ]
    ),
    getItem(
        <Link to="/profile">
            <span>Profile</span>
        </Link>,
        "/profile",
        <AiOutlineUser size={20} color="#50d69c" />
    ),
];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

interface SidebarProps {
    collapsed: any;
    setCollapsed: any;
}
const Sidebar = (props: SidebarProps) => {
    const { collapsed, setCollapsed } = props;
    let location = useLocation();

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    const [currentkey, setCurrentKey] = useState([""]);
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        handleSetCurrentMenu(location.pathname);
    }, [location]);

    const handleSetCurrentMenu = (key: string) => {
        setCurrentKey([key]);
        if (windowDimensions.width <= 1024) {
            setCollapsed(true);
        }
    };
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth={windowDimensions.width >= 1024 ? 80 : 0}
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className="!bg-white"
            style={
                windowDimensions.width <= 1024
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
            <div className="lg:hidden flex items-center px-4 h-[78px] uppercase text-indigo-500 text-xl font-extrabold">
                Techup
            </div>
            <div className="hidden lg:flex items-center justify-between px-4 h-[78px]">
                {collapsed ? (
                    <Button
                        style={{ border: "none" }}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <AiOutlineMenu size={20} />
                    </Button>
                ) : (
                    <>
                        <div className="uppercase text-indigo-500 text-xl font-extrabold">
                            Techup
                        </div>
                        <Button
                            style={{ border: "none" }}
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            <AiOutlineMenuFold size={20} />
                        </Button>
                    </>
                )}
            </div>
            <Menu
                onClick={(e) => handleSetCurrentMenu(e.key)}
                selectedKeys={currentkey}
                mode="inline"
                items={items}
            />
        </Sider>
    );
};

export default Sidebar;
