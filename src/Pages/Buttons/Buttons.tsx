import { Button, Col, Row } from "antd";
import { FaStore } from "react-icons/fa";
import BreadCrumb from "../../component/BreadCrumb";

const Buttons = () => {
    return (
        <div className="w-full h-full">
            <BreadCrumb />

            <div className="px-[25px] py-[5px]">
                <Row gutter={24}>
                    <Col span={16} offset={4}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-3">
                                <h3 className="m-0 text-lg font-semibold">
                                    Styles
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3 items-center p-6 border-t border-slate-200">
                                <Button
                                    className="!flex !items-center !py-2 !text-sm !font-semibold !bg-[@primary-color]"
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
                <Row gutter={24} className="mt-7">
                    <Col span={16} offset={4}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-3">
                                <h3 className="m-0 text-lg font-semibold">
                                    Color
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3 items-center p-6 border-t border-slate-200">
                                <Button
                                    className="!flex !items-center !py-2 !text-sm !font-semibold"
                                    size="large"
                                    type="default"
                                >
                                    Default
                                </Button>
                                <Button
                                    className="!flex gap-3 !items-center !py-2 !text-sm !font-semibold "
                                    size="large"
                                    type="primary"
                                >
                                    Primary
                                </Button>
                                <Button
                                    className="btn btn-secondary!flex !items-center !px-3 !py-2 !text-sm !font-semibold "
                                    size="large"
                                >
                                    Secondary
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
