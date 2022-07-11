import {
    Row,
    Col,
    Space,
    Popover,
    Badge,
    List,
    Avatar,
    Divider,
    Input,
    Layout,
} from "antd";
import { SettingOutlined, BellOutlined } from "@ant-design/icons";
import {
    AiFillAppstore,
    AiOutlineMenu,
    AiOutlineMenuFold,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaCalendarAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const { Header } = Layout;

const apps = (
    <div className="bg-[#182c4e] w-[320px]">
        <Row className="py-3" gutter={16}>
            <Col span={8}>
                <div className="flex items-center flex-col">
                    <div className="p-3 rounded-full text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]">
                        <FaCalendarAlt size={22} />
                    </div>
                    <span className="inline-block mt-2.5 text-base font-medium text-white">
                        Calendar
                    </span>
                </div>
            </Col>
            <Col span={8}>
                <div className="flex items-center flex-col">
                    <div className="p-3 rounded-full text-white bg-gradient-to-r from-[#fb6340] to-[#fbb140]">
                        <FaCalendarAlt size={22} />
                    </div>
                    <span className="inline-block mt-2.5 text-base font-medium text-white">
                        Email
                    </span>
                </div>
            </Col>
            <Col span={8}>
                <div className="flex items-center flex-col">
                    <div className="p-3 rounded-full text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]">
                        <FaCalendarAlt size={22} />
                    </div>
                    <span className="inline-block mt-2.5 text-base font-medium text-white">
                        Payments
                    </span>
                </div>
            </Col>
        </Row>
        <Row className="py-3" gutter={16}>
            <Col span={8}>
                <div className="flex items-center flex-col">
                    <div className="p-3 rounded-full text-white bg-gradient-to-r from-[#2dce89] to-[#2dcecc]">
                        <FaCalendarAlt size={22} />
                    </div>
                    <span className="inline-block mt-2.5 text-base font-medium text-white">
                        Reports
                    </span>
                </div>
            </Col>
            <Col span={8}>
                <div className="flex items-center flex-col">
                    <div className="p-3 rounded-full text-white bg-gradient-to-r from-[#8965e0] to-[#bc65e0]">
                        <FaCalendarAlt size={22} />
                    </div>
                    <span className="inline-block mt-2.5 text-base font-medium text-white">
                        Maps
                    </span>
                </div>
            </Col>
            <Col span={8}>
                <div className="flex items-center flex-col">
                    <div className="p-3 rounded-full text-white bg-gradient-to-r from-[#ffd600] to-[#beff00]">
                        <FaCalendarAlt size={22} />
                    </div>
                    <span className="inline-block mt-2.5 text-base font-medium text-white">
                        Shop
                    </span>
                </div>
            </Col>
        </Row>
    </div>
);

const data = [
    {
        title: "Ant Design Title 1",
    },
    {
        title: "Ant Design Title 2",
    },
    {
        title: "Ant Design Title 3",
    },
    {
        title: "Ant Design Title 4",
    },
];

const titleNotify = (
    <span className="text-sm font-medium">You have 6 notifications</span>
);

const notifications = (
    <List
        className="w-[414px]"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </List.Item>
        )}
    />
);

const adminMenu = (
    <Row gutter={[24, 8]} className="flex !flex-col w-[190px]">
        <Col>
            <div className="w-full flex items-center uppercase">
                <h3 className="m-0 text-xs">Welcome!</h3>
            </div>
        </Col>
        <Col className="hover:bg-sky-50 py-1 cursor-pointer">
            <div className="w-full flex items-center">
                <Link
                    to="/profile"
                    className="flex items-center text-black hover:text-black"
                >
                    <div className="flex items-center w-auto">
                        <span>
                            <FaUser size={20} />
                        </span>
                    </div>
                    <div className="basic-0 grow w-full ml-4">
                        <span className="m-0 text-sm font-normal">
                            My profile
                        </span>
                    </div>
                </Link>
            </div>
        </Col>
        <Divider className="!m-0" />
        <Col className="hover:bg-sky-50 py-1 cursor-pointer">
            <div className="w-ful flex items-center">
                <Link
                    to="/login"
                    className="flex items-center text-black hover:text-black"
                >
                    <div className="flex items-center w-auto">
                        <span>
                            <IoCloseCircleOutline size={20} />
                        </span>
                    </div>
                    <div className="basic-0 grow w-full ml-4">
                        <span className="m-0 text-sm font-normal">Logout</span>
                    </div>
                </Link>
            </div>
        </Col>
    </Row>
);

interface NavigationProps {
    collapsed: any;
    setCollapsed: any;
}

const Navigation = (props: NavigationProps) => {
    const { collapsed, setCollapsed } = props;
    return (
        <Header
            className="!bg-indigo-410 !m-0 !h-fit !w-full"
            style={{
                padding: 0,
            }}
        >
            <Row
                className="text-white !m-0 px-7 items-center border-b-[1px] border-slate-400"
                gutter={[16, 16]}
            >
                <Col span={14} style={{ padding: 0, display: "flex" }}>
                    <div className="flex items-center sm:hidden mt-2">
                        <BiSearch size={20} color="white" />
                    </div>
                    <div className="hidden items-center sm:flex">
                        <Input
                            size="large"
                            placeholder="large size"
                            prefix={<BiSearch size={20} color="gray" />}
                            style={{ borderRadius: 99 }}
                        />
                    </div>
                </Col>
                <Col
                    span={10}
                    style={{
                        padding: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Space size="large" align="center">
                        {collapsed && (
                            <span
                                className="lg:hidden mt-2 block cursor-pointer"
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                <AiOutlineMenu size={20} />
                            </span>
                        )}
                        {collapsed === false && (
                            <span
                                className="lg:hidden mt-2 block cursor-pointer"
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                <AiOutlineMenuFold size={20} />
                            </span>
                        )}
                        <Popover
                            placement="bottomRight"
                            content={apps}
                            trigger="click"
                            color="#182c4e"
                            arrowPointAtCenter
                            overlayInnerStyle={{ borderRadius: 8 }}
                            getPopupContainer={(trigger) => {
                                console.log(trigger);
                                return trigger;
                            }}
                        >
                            <span className="block mt-2 cursor-pointer">
                                <AiFillAppstore size={20} />
                            </span>
                        </Popover>

                        <SettingOutlined
                            style={{
                                fontSize: "20px",
                            }}
                        />

                        <Popover
                            placement="bottomRight"
                            title={titleNotify}
                            content={notifications}
                            trigger="click"
                            arrowPointAtCenter
                            overlayInnerStyle={{ borderRadius: 8 }}
                            getPopupContainer={(trigger) => {
                                console.log(trigger);
                                return trigger;
                            }}
                        >
                            <Badge count={6} className="cursor-pointer">
                                <BellOutlined
                                    style={{
                                        fontSize: "20px",
                                        color: "#fff",
                                    }}
                                />
                            </Badge>
                        </Popover>

                        <Popover
                            placement="bottomRight"
                            content={adminMenu}
                            trigger="click"
                            overlayInnerStyle={{ borderRadius: 8 }}
                        >
                            <div className="flex items-center cursor-pointer">
                                <FaUserCircle size={40} />
                                <span className="hidden w-fit lg:block ml-1.5 text-base font-medium">
                                    Le Trung Kien
                                </span>
                            </div>
                        </Popover>
                    </Space>
                </Col>
            </Row>
        </Header>
    );
};

export default Navigation;
