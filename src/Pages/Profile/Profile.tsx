import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Divider,
    Progress,
    Row,
    Space,
    Upload,
    UploadProps,
} from "antd";
import { Avatar, Card, List, Form, Input } from "antd";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaChartPie } from "react-icons/fa";

const { Meta } = Card;

const data = [
    {
        title: "Bootstrap Design System",
        description: (
            <Progress
                percent={70}
                status="exception"
                showInfo={false}
                strokeWidth={3}
            />
        ),
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        title: "Angular Now UI kit Pro",
        description: (
            <Progress
                percent={50}
                status="exception"
                showInfo={false}
                strokeWidth={3}
            />
        ),
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        title: "Ant Design",
        description: (
            <Progress
                percent={100}
                status="success"
                showInfo={false}
                strokeWidth={3}
            />
        ),
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        title: "Ant Design Theme Pro",
        description: (
            <Progress
                percent={70}
                status="active"
                showInfo={false}
                strokeWidth={3}
            />
        ),
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        title: "React Ant Design Pro",
        description: (
            <Progress
                percent={100}
                status="success"
                showInfo={false}
                strokeWidth={3}
            />
        ),
        avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
];

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
};

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const props: UploadProps = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile(file) {
        console.log("Your upload file:", file);
        // Your process logic. Here we just mock to the same file
        return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
            method: "POST",
            body: file,
        })
            .then((res) => res.json())
            .then(({ thumbnail }) => thumbnail);
    },
};

const Profile = () => {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        form.validateFields(["nickname"]);
    }, [checkNick, form]);

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log("Success:", values);
        } catch (errorInfo) {
            console.log("Failed:", errorInfo);
        }
    };

    return (
        <div className="w-full h-full">
            <div className="w-full h-[150px] relative bg-transparent border-none !mb-[220px]">
                <div className="bg-header-bg bg-top bg-cover pt-[100px] pb-[330px] md:pb-[250px] lg:pt-[155px] lg:pb-[272px] relative">
                    <span className="absolute block w-full inset-0 opacity-90 bg-gradient-to-r from-sky-500 to-indigo-500"></span>
                    <div className="w-full px-4 lg:px-[30px] lg:max-w-[42%] absolute top-[15%] lg:top-1/3 break-normal">
                        <h1 className="text-white text-[2.75rem] mb-2 md:whitespace-nowrap">
                            Hello Le Trung Kien
                        </h1>
                        <p className="text-white text-base mb-12 leading-[1.7]">
                            This is your profile page. You can see the progress
                            you've made with your work and manage your projects
                            or assigned tasks
                        </p>
                    </div>
                </div>
            </div>
            <Row gutter={[24, 24]} className="!mx-6">
                <Col xl={{ span: 8, order: 2 }} xs={24}>
                    <Space size="large" direction="vertical">
                        <Card
                            cover={
                                <img
                                    className="!rounded-t-lg"
                                    alt="example"
                                    src="https://argon-dashboard-vue3.web.app/assets/window-purple-image.a85ca6fd.jpg"
                                />
                            }
                            className="w-full !rounded-lg !shadow-md"
                        >
                            <Meta
                                className=" flex-col items-center"
                                avatar={
                                    <Avatar
                                        className="!w-[132px] !h-[132px] !mt-[-90px] !ml-4 !border-[3px] !border-white"
                                        src="https://argon-dashboard-vue3.web.app/assets/team-3.bf8b791b.jpg"
                                    />
                                }
                                title={
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-lg pb-2 !m-0">
                                            Le Trung Kien
                                        </h3>
                                        <h5 className="text-xs">
                                            <GoLocation
                                                size={12}
                                                className="!inline"
                                            />
                                            The Castle of Trujillo, Spain
                                        </h5>
                                    </div>
                                }
                                description="This is the description"
                            />
                        </Card>

                        <Card
                            title={<span>Progress track</span>}
                            className="!w-full !rounded-lg !shadow-md"
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                className="bg-white rounded-lg"
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                            }
                                            title={
                                                <a href="https://ant.design">
                                                    {item.title}
                                                </a>
                                            }
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Space>
                </Col>
                <Col xl={{ span: 16, order: 1 }} xs={24}>
                    <Space direction="vertical" size="large" className="w-full">
                        <Row gutter={[24, 24]}>
                            <Col lg={12} xs={24}>
                                <div className="bg-white py-4 px-6 rounded-md bg-gradient-to-r from-[#2dce89] to-[#2dcecc]">
                                    <div className="flex flex-wrap justify-between">
                                        <div>
                                            <div>
                                                <h5 className="text-xs text-white uppercase font-semibold">
                                                    Total traffic
                                                </h5>
                                            </div>
                                            <h2 className="text-xl font-semibold text-white ">
                                                350,697
                                            </h2>
                                        </div>
                                        <div className="h-fit p-3.5 rounded-full text-black bg-white ">
                                            <BsHandIndexThumbFill size={20} />
                                        </div>
                                    </div>
                                    <p className="flex items-center m-0 flex-wrap">
                                        <span className="inline-flex flex-nowrap mr-2 text-white whitespace-nowrap">
                                            <BiUpArrowAlt
                                                size={20}
                                                color="#fff"
                                            />
                                            <span>3.48%</span>
                                        </span>
                                        <span className="whitespace-nowrap font-normal text-slate-300">
                                            Since last month
                                        </span>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={12} xs={24}>
                                <div className="bg-white py-4 px-6 rounded-md bg-gradient-to-r from-[#fb6340] to-[#fbb140]">
                                    <div className="flex flex-wrap justify-between">
                                        <div>
                                            <div>
                                                <h5 className="text-xs text-white uppercase font-semibold">
                                                    Total traffic
                                                </h5>
                                            </div>
                                            <h2 className="text-xl font-semibold text-white">
                                                350,697
                                            </h2>
                                        </div>
                                        <div className="h-fit p-3.5 rounded-full text-black bg-white">
                                            <FaChartPie size={20} />
                                        </div>
                                    </div>
                                    <p className="flex items-center m-0 flex-wrap">
                                        <span className="inline-flex items-center flex-nowrap mr-2 text-white whitespace-nowrap">
                                            <BiUpArrowAlt
                                                size={20}
                                                color="#fff"
                                            />
                                            <span>3.48%</span>
                                        </span>
                                        <span className="whitespace-nowrap font-normal text-slate-300">
                                            Since last month
                                        </span>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Card
                            title={
                                <div className="flex items-center justify-between py-2 ">
                                    <h3 className="!m-0 ">Edit Profile</h3>
                                    <Button
                                        type="primary"
                                        style={{
                                            backgroundColor: "#5e72e4",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        Settings
                                    </Button>
                                </div>
                            }
                            className="!w-full !rounded-lg !shadow-md"
                        >
                            <div>
                                <h6 className="uppercase text-xs mb-6 leading-6 text-slate-400">
                                    User Information
                                </h6>
                                <div className="pl-6">
                                    <Form form={form} name="dynamic_rule">
                                        <Form.Item
                                            colon={false}
                                            className="flex !flex-col"
                                            labelAlign="left"
                                            {...formItemLayout}
                                            name="username"
                                            label={
                                                <span className="text-sm text-slate-500 font-semibold">
                                                    Name
                                                </span>
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your name",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="!px-2 !py-3 !rounded-lg"
                                                placeholder="Please input your name"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            colon={false}
                                            className="flex !flex-col"
                                            labelAlign="left"
                                            {...formItemLayout}
                                            name="nickname"
                                            label={<span>Email</span>}
                                            rules={[
                                                {
                                                    required: checkNick,
                                                    message:
                                                        "Please input your nickname",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="!px-2 !py-3 !rounded-lg"
                                                placeholder="Please input your nickname"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            colon={false}
                                            className="flex !flex-col"
                                            labelAlign="left"
                                            {...formItemLayout}
                                            name="nickname"
                                            label={<span>Profile photo</span>}
                                            rules={[
                                                {
                                                    required: checkNick,
                                                    message:
                                                        "Please input your nickname",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="!px-2 !py-3 !rounded-lg !outline-none"
                                                placeholder="Please input your nickname"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            {...formTailLayout}
                                            className="!flex justify-center !flex-col !items-center"
                                        >
                                            <Button
                                                className="!h-fit !rounded-md !shadow-md !font-semibold !bg-[#2dce89] !border-none !px-4 !py-2"
                                                type="primary"
                                            >
                                                Save
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                                <Divider />
                                <h6 className="uppercase text-xs mb-6 leading-6 text-slate-400">
                                    Password
                                </h6>
                                <div className="pl-6">
                                    <Form form={form} name="dynamic_rule">
                                        <Form.Item
                                            colon={false}
                                            className="flex !flex-col"
                                            labelAlign="left"
                                            {...formItemLayout}
                                            name="username"
                                            label={
                                                <span className="text-sm text-slate-500 font-semibold">
                                                    Name
                                                </span>
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your name",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="!px-2 !py-3 !rounded-lg"
                                                placeholder="Please input your name"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            colon={false}
                                            className="flex !flex-col"
                                            labelAlign="left"
                                            {...formItemLayout}
                                            name="nickname"
                                            label={<span>Email</span>}
                                            rules={[
                                                {
                                                    required: checkNick,
                                                    message:
                                                        "Please input your nickname",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="!px-2 !py-3 !rounded-lg"
                                                placeholder="Please input your nickname"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            colon={false}
                                            className="flex !flex-col"
                                            labelAlign="left"
                                            {...formItemLayout}
                                            name="nickname"
                                            label={<span>Profile photo</span>}
                                            rules={[
                                                {
                                                    required: checkNick,
                                                    message:
                                                        "Please input your nickname",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="!px-2 !py-3 !rounded-lg !outline-none"
                                                placeholder="Please input your nickname"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            {...formTailLayout}
                                            className="!flex justify-center !flex-col !items-center"
                                        >
                                            <Button
                                                className="!h-fit !rounded-md !font-semibold !shadow-md  !bg-[#2dce89] !border-none !px-4 !py-2"
                                                type="primary"
                                            >
                                                Change Password
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </Card>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Profile;
