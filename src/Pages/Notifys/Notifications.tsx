import { useState } from "react";
import { Button, Col, Row, Alert, Modal } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiBell } from "react-icons/hi";
import BreadCrumb from "../../component/BreadCrumb";

const Notifications = () => {
    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);

    return (
        <div className="w-full h-full">
            <BreadCrumb />

            <div className="px-[25px] py-[5px]">
                <Row gutter={[24, 24]}>
                    <Col lg={{ span: 16, offset: 4 }} xs={24}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-5 border-b border-slate-200">
                                <h3 className="m-0 text-lg font-semibold">
                                    Alerts
                                </h3>
                            </div>
                            <div className="w-full flex flex-wrap gap-4 items-center p-6">
                                <Alert
                                    className="!w-full !px-6 !py-4 !items-center !bg-success"
                                    message={
                                        <span className="text-white font-semibold leading-8">
                                            success alert
                                        </span>
                                    }
                                    type="success"
                                    icon={
                                        <AiFillCheckCircle
                                            size={14}
                                            color="#fff"
                                        />
                                    }
                                    showIcon
                                    closable
                                />
                                <Alert
                                    className="!w-full !px-6 !py-4 !items-center !bg-info"
                                    message={
                                        <span className="text-white font-semibold leading-8">
                                            info alert
                                        </span>
                                    }
                                    type="info"
                                    icon={
                                        <AiFillCheckCircle
                                            size={14}
                                            color="#fff"
                                        />
                                    }
                                    showIcon
                                    closable
                                />
                                <Alert
                                    className="!w-full !px-6 !py-4 !items-center !bg-warning"
                                    message={
                                        <span className="text-white font-semibold leading-8">
                                            warning alert
                                        </span>
                                    }
                                    type="warning"
                                    icon={
                                        <AiFillCheckCircle
                                            size={14}
                                            color="#fff"
                                        />
                                    }
                                    showIcon
                                    closable
                                />
                                <Alert
                                    className="!w-full !px-6 !py-4 !items-center !bg-danger"
                                    message={
                                        <span className="text-white font-semibold leading-8">
                                            error alert
                                        </span>
                                    }
                                    type="error"
                                    icon={
                                        <AiFillCheckCircle
                                            size={14}
                                            color="#fff"
                                        />
                                    }
                                    showIcon
                                    closable
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 16, offset: 4 }} xs={24}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-5 border-b border-slate-200">
                                <h3 className="m-0 text-lg font-semibold">
                                    Modals
                                </h3>
                            </div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6 p-6">
                                <div className="w-full">
                                    <Button
                                        className="!w-full !flex !items-center justify-center !py-2 !text-white !font-semibold !shadow-md"
                                        type="primary"
                                        onClick={() => setIsModalVisible1(true)}
                                    >
                                        Dafault
                                    </Button>
                                    <Modal
                                        title="Basic Modal"
                                        visible={isModalVisible1}
                                        onOk={() => setIsModalVisible1(true)}
                                        onCancel={() =>
                                            setIsModalVisible1(false)
                                        }
                                    >
                                        <p>
                                            A small river named Duden flows by
                                            their place and supplies it with the
                                            necessary regelialia. It is a
                                            paradisematic country, in which
                                            roasted parts of sentences fly into
                                            your mouth.
                                        </p>
                                        <br />
                                        <p>
                                            A small river named Duden flows by
                                            their place and supplies it with the
                                            necessary regelialia. It is a
                                            paradisematic country, in which
                                            roasted parts of sentences fly into
                                            your mouth.
                                        </p>
                                    </Modal>
                                </div>
                                <div className="w-full">
                                    <Button
                                        type="primary"
                                        className="!w-full !flex !items-center justify-center !py-2 !text-white !font-semibold !bg-warning !border-0 !shadow-md"
                                        onClick={() => setIsModalVisible2(true)}
                                    >
                                        Notification
                                    </Button>
                                    <Modal
                                        width={450}
                                        bodyStyle={{
                                            background:
                                                "linear-gradient(to right, #f5365c, #f56036",
                                            borderRadius: "5px 5px 0 0",
                                        }}
                                        footer={
                                            <div className="flex items-center rounded-b-[5px] justify-between p-6 mx-[-16px] my-[-11px] bg-gradient-to-r from-[#f5365c] to-[#f56036]">
                                                <Button
                                                    onClick={() =>
                                                        setIsModalVisible2(true)
                                                    }
                                                    className="!font-semibold"
                                                >
                                                    Ok, got it
                                                </Button>
                                                <Button
                                                    type="text"
                                                    className="!font-semibold !text-white"
                                                    onClick={() =>
                                                        setIsModalVisible2(
                                                            false
                                                        )
                                                    }
                                                >
                                                    Close
                                                </Button>
                                            </div>
                                        }
                                        visible={isModalVisible2}
                                        onOk={() => setIsModalVisible2(true)}
                                        onCancel={() =>
                                            setIsModalVisible2(false)
                                        }
                                    >
                                        <div className="text-white font-semibold text-lg">
                                            <span>
                                                Your attention is required
                                            </span>
                                        </div>
                                        <div className="flex flex-col pt-8 mb-4 items-center text-white">
                                            <HiBell size={48} color="#fff" />
                                            <span className="uppercase text-base font-semibold mt-6 mb-2">
                                                You should read this!
                                            </span>
                                            <p className="text-white break-normal text-base text-center">
                                                A small river named Duden flows
                                                by their place and supplies it
                                                with the necessary regelialia.
                                            </p>
                                        </div>
                                    </Modal>
                                </div>
                                <div className="w-full">
                                    <Button
                                        className="!w-full !flex !items-center justify-center !py-2 !text-white !font-semibold !bg-dark !border-0 !shadow-md"
                                        onClick={() => setIsModalVisible3(true)}
                                    >
                                        Form
                                    </Button>
                                    <Modal
                                        title="Modals Default"
                                        visible={isModalVisible3}
                                        onOk={() => setIsModalVisible3(true)}
                                        onCancel={() =>
                                            setIsModalVisible3(false)
                                        }
                                    ></Modal>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 16, offset: 4 }} xs={24}>
                        <div className="h-fit flex flex-col rounded-lg bg-white ">
                            <div className="px-6 py-5 border-b border-slate-200">
                                <h3 className="m-0 text-lg font-semibold">
                                    Notifications
                                </h3>
                            </div>
                            <div className="w-full flex flex-wrap gap-4 items-center p-6">
                                <Button
                                    className="!flex !items-center !text-white !py-2 !border-0 !shadow-md !text-sm !font-semibold !bg-dark"
                                    size="large"
                                >
                                    Default
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !border-0 !shadow-md !text-sm !font-semibold !bg-info"
                                    size="large"
                                >
                                    Info
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !border-0 !shadow-md !text-sm !font-semibold !bg-success"
                                    size="large"
                                >
                                    Success
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !border-0 !shadow-md !text-sm !font-semibold !bg-warning"
                                    size="large"
                                >
                                    Warning
                                </Button>
                                <Button
                                    className="!flex !items-center !text-white !py-2 !border-0 !shadow-md !text-sm !font-semibold !bg-danger"
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

export default Notifications;
