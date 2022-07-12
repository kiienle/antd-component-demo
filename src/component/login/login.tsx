import React from "react";
import "antd/dist/antd.css";
import { AndroidOutlined } from "@ant-design/icons";
import { Col, Row, Button, Checkbox, Form, Input } from "antd";

const Login = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="w-full h-screen bg-slate-700">
            <Row>
                <Col
                    span={6}
                    offset={9}
                    className="flex flex-col rounded-md text-center m-[8%] shadow-2xl bg-white"
                >
                    <AndroidOutlined
                        style={{ fontSize: "70px" }}
                        className="mt-[50px]"
                    />
                    <div className="text-[24px] font-bold mt-[30px]">
                        Log In to Dashboard Kit
                    </div>
                    <div className="mt-[30px] mb-[50px]">
                        <Form
                            name="basic"
                            layout="vertical"
                            labelCol={{
                                span: 16,
                                offset: 4,
                            }}
                            wrapperCol={{
                                span: 16,
                                offset: 4,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            requiredMark="optional"
                        >
                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Email Address"
                                    className="text-xl border-0 rounded-md"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Pasword" />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{ offset: 4, span: 16 }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                <Button type="primary" htmlType="submit" block>
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
