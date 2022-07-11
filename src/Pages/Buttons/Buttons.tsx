import { Button, Col, Row } from "antd";
import { FaStore } from "react-icons/fa";
import BreadCrumb from "../../component/BreadCrumb";

const Buttons = () => {
    return (
        <div className="w-full h-full">
            <BreadCrumb />

            <div className="px-[25px] py-[5px]">
                <Row gutter={24}>
                    <Col lg={{ span: 16, offset: 4 }} xs={24}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-5">
                                <h3 className="m-0 text-lg font-semibold">
                                    Styles
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center p-6 border-t border-slate-200">
                                <Button
                                    className="!flex !items-center !py-2 !text-sm !font-semibold"
                                    size="large"
                                    type="primary"
                                >
                                    Button
                                </Button>
                                <Button
                                    className="!flex gap-3 !items-center !py-2 !text-sm !font-semibold "
                                    size="large"
                                    type="primary"
                                    icon={<FaStore size={14} />}
                                >
                                    With icon
                                </Button>
                                <Button
                                    className="!flex !items-center !px-3 !py-2 !text-sm !font-semibold "
                                    size="large"
                                    type="primary"
                                    icon={<FaStore size={14} />}
                                ></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} className="mt-7">
                    <Col lg={{ span: 16, offset: 4 }} xs={24}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-5">
                                <h3 className="m-0 text-lg font-semibold">
                                    Color
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center p-6 border-t border-slate-200">
                                <Button
                                    className="!flex !items-center !text-white !py-2 !shadow-md !border-0 !text-sm !font-semibold !bg-dark"
                                    size="large"
                                >
                                    Default
                                </Button>
                                <Button
                                    className="!flex gap-3 !items-center !py-2 !shadow-md !border-0 !text-sm !font-semibold"
                                    size="large"
                                    type="primary"
                                >
                                    Primary
                                </Button>
                                <Button
                                    className="btn btn-secondary !flex !items-center !border-0 !px-3 !py-2 !shadow-md !text-sm !font-semibold !bg-secondary"
                                    size="large"
                                >
                                    Secondary
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !shadow-md !border-0 !text-sm !font-semibold !bg-info"
                                    size="large"
                                >
                                    Info
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !shadow-md !border-0 !text-sm !font-semibold !bg-success"
                                    size="large"
                                >
                                    Success
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !shadow-md !border-0 !text-sm !font-semibold !bg-warning"
                                    size="large"
                                >
                                    Warning
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !shadow-md !border-0 !text-sm !font-semibold !bg-danger"
                                    size="large"
                                >
                                    Danger
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 16, offset: 4 }} xs={24}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-5">
                                <h3 className="m-0 text-lg font-semibold">
                                    Outline
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center p-6 border-t border-slate-200">
                                <Button
                                    className="!flex !items-center !text-dark !py-2 !text-sm !font-semibold hover:!text-white hover:!bg-dark !border-dark"
                                    size="large"
                                >
                                    Default
                                </Button>
                                <Button
                                    className="!flex gap-3 !items-center !text-primary !py-2 !text-sm !font-semibold hover:!text-white hover:!bg-primary !border-primary"
                                    size="large"
                                >
                                    Primary
                                </Button>
                                <Button
                                    className="btn btn-secondary !flex !items-center !px-3 !py-2 !text-sm !font-semibold hover:!text-black hover:!shadow-md hover:!bg-secondary !border-secondary"
                                    size="large"
                                >
                                    Secondary
                                </Button>
                                <Button
                                    className="!flex !items-center !text-info !py-2 !text-sm !font-semibold hover:!text-white hover:!bg-info !border-info"
                                    size="large"
                                >
                                    Info
                                </Button>
                                <Button
                                    className="!flex !items-center !text-success !py-2 !text-sm !font-semibold hover:!text-white hover:!bg-success !border-success"
                                    size="large"
                                >
                                    Success
                                </Button>
                                <Button
                                    className="!flex !items-center !text-warning !py-2 !text-sm !font-semibold hover:!text-white hover:!bg-warning !border-warning"
                                    size="large"
                                >
                                    Warning
                                </Button>
                                <Button
                                    className="!flex !items-center !text-danger !py-2 !text-sm !font-semibold hover:!text-white hover:!bg-danger !border-danger"
                                    size="large"
                                >
                                    Danger
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Buttons;
