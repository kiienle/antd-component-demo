import { Row, Col, Breadcrumb, Space, Button } from "antd";

const BreadCrumb = () => {
    return (
        <div className="w-full mb-[-60px]">
            <Row className="m-0 px-7 py-5 !w-full !h-fit flex items-center !bg-indigo-500">
                <Col span={12}>
                    <div className="flex items-center !h-[29px]">
                        <div className="text-white text-xl font-semibold inline-block mr-8">
                            Tables
                        </div>
                        <Breadcrumb className="hidden text-base font-semibold md:block">
                            <Breadcrumb.Item
                                className="!text-white items-center"
                                href=""
                            >
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
                            <Button className="!h-full !rounded-lg !px-2 !text-indigo-500 !text-xs hover:!text-black !font-semibold">
                                New
                            </Button>
                            <Button className="!h-full !rounded-lg !px-2 !text-indigo-500 !text-xs hover:!text-black !font-semibold">
                                Fillters
                            </Button>
                        </Space>
                    </div>
                </Col>
            </Row>
            <Row className="m-0 px-7 py-8 !w-full !bg-indigo-500"></Row>
        </div>
    );
};

export default BreadCrumb;
