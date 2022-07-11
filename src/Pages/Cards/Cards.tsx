import { Badge, Button, Col, Row, Space, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Card from "antd/lib/card/Card";
import Meta from "antd/lib/card/Meta";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsFillBarChartFill, BsHandIndexThumbFill } from "react-icons/bs";
import { FaChartPie, FaCoins } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsFacebook, BsTwitter, BsDribbble } from "react-icons/bs";
import BreadCrumb from "../../component/BreadCrumb";

const data = [
    {
        title: "Complele documentation",
    },
    {
        title: "Working materials in Sketch",
    },
    {
        title: "2GB cloud storage",
    },
];

const Cards = () => {
    return (
        <div className="w-full h-full">
            <BreadCrumb />
            <div className="mx-6">
                <Row gutter={[24, 24]}>
                    <Col lg={6} md={12} xs={24}>
                        <div className="bg-white py-4 px-6 rounded-md">
                            <div className="flex flex-wrap justify-between">
                                <div>
                                    <div>
                                        <h5 className="text-xs text-slate-400 uppercase font-semibold">
                                            Total traffic
                                        </h5>
                                    </div>
                                    <h2 className="text-xl font-semibold text-black ">
                                        350,697
                                    </h2>
                                </div>
                                <div className="h-fit p-3.5 rounded-full text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]">
                                    <BsHandIndexThumbFill size={20} />
                                </div>
                            </div>
                            <p className="flex items-center m-0 flex-wrap">
                                <span className="inline-flex flex-nowrap mr-2 text-[#2fcf8a] whitespace-nowrap">
                                    <BiUpArrowAlt size={20} color="#2fcf8a" />
                                    <span>3.48%</span>
                                </span>
                                <span className="whitespace-nowrap font-normal text-slate-300">
                                    Since last month
                                </span>
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={24}>
                        <div className="bg-white py-4 px-6 rounded-md">
                            <div className="flex flex-wrap justify-between">
                                <div>
                                    <div>
                                        <h5 className="text-xs text-slate-400 uppercase font-semibold">
                                            Total traffic
                                        </h5>
                                    </div>
                                    <h2 className="text-xl font-semibold text-black ">
                                        350,697
                                    </h2>
                                </div>
                                <div className="h-fit p-3.5 rounded-full text-white bg-gradient-to-r from-[#fb6340] to-[#fbb140]">
                                    <FaChartPie size={20} />
                                </div>
                            </div>
                            <p className="flex items-center m-0 flex-wrap">
                                <span className="inline-flex items-center flex-nowrap mr-2 text-[#2fcf8a] whitespace-nowrap">
                                    <BiUpArrowAlt size={20} color="#2fcf8a" />
                                    <span>3.48%</span>
                                </span>
                                <span className="whitespace-nowrap font-normal text-slate-300">
                                    Since last month
                                </span>
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={24}>
                        <div className="bg-white py-4 px-6 rounded-md">
                            <div className="flex flex-wrap justify-between">
                                <div>
                                    <div>
                                        <h5 className="text-xs text-slate-400 uppercase font-semibold">
                                            Total traffic
                                        </h5>
                                    </div>
                                    <h2 className="text-xl font-semibold text-black ">
                                        350,697
                                    </h2>
                                </div>
                                <div className="h-fit p-3.5 rounded-full text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]">
                                    <FaCoins size={20} />
                                </div>
                            </div>
                            <p className="flex items-center m-0 flex-wrap">
                                <span className="inline-flex items-center flex-nowrap mr-2 text-[#2fcf8a] whitespace-nowrap">
                                    <BiUpArrowAlt size={20} color="#2fcf8a" />
                                    <span>3.48%</span>
                                </span>
                                <span className="whitespace-nowrap font-normal text-slate-300">
                                    Since last month
                                </span>
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={24}>
                        <div className="bg-white py-4 px-6 rounded-md">
                            <div className="flex flex-wrap justify-between">
                                <div>
                                    <div>
                                        <h5 className="text-xs text-slate-400 uppercase font-semibold">
                                            Total traffic
                                        </h5>
                                    </div>
                                    <h2 className="text-xl font-semibold text-black ">
                                        350,697
                                    </h2>
                                </div>
                                <div className="h-fit p-3.5 rounded-full text-white bg-gradient-to-r from-[#2dce89] to-[#2dcecc]">
                                    <BsFillBarChartFill size={20} />
                                </div>
                            </div>
                            <p className="flex items-center m-0 flex-wrap">
                                <span className="inline-flex items-center flex-nowrap mr-2 text-[#2fcf8a] whitespace-nowrap">
                                    <BiUpArrowAlt size={20} color="#2fcf8a" />
                                    <span>3.48%</span>
                                </span>
                                <span className="whitespace-nowrap font-normal text-slate-300">
                                    Since last month
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} className="mt-6">
                    <Col lg={8} md={24}>
                        <Space direction="vertical" size="large">
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
                                <div className="m-[-24px] mb-0">
                                    <div className="text-normal text-base font-normal p-4 border-b border-slate-200">
                                        Web Browser
                                    </div>
                                    <div className="text-normal text-base font-normal p-4 border-b border-slate-200">
                                        Web Browser
                                    </div>
                                    <div className="text-normal text-base font-normal p-4 border-b border-slate-200">
                                        Web Browser
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <div className="mb-4">
                                        <h3 className="!font-semibold text-base">
                                            Jobs Description
                                        </h3>
                                    </div>
                                    <p className="!text-base mb-6 text-slate-400">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facilis non dolore est
                                        fuga nobis ipsum illum eligendi nemo
                                        iure repellat, soluta, optio minus ut
                                        reiciendis voluptates enim impedit
                                        veritatis officiis.
                                    </p>

                                    <Button
                                        size="large"
                                        className="!text-white !text-sm !font-semibold"
                                        type="primary"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </Card>
                            <Card className="w-full !rounded-lg !shadow-md">
                                <div>
                                    <div className="mb-4">
                                        <h3 className="!font-semibold text-base">
                                            Jobs Description
                                        </h3>
                                    </div>
                                    <p className="!text-base mb-6 text-slate-400">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facilis non dolore est
                                        fuga nobis ipsum illum eligendi nemo
                                        iure repellat, soluta, optio minus ut
                                        reiciendis voluptates enim impedit
                                        veritatis officiis.
                                    </p>

                                    <Button
                                        size="large"
                                        className="!text-white !text-sm !font-semibold"
                                        type="primary"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </Card>
                            <Card
                                cover={
                                    <img
                                        className="!rounded-t-lg"
                                        alt="example"
                                        src="https://argon-dashboard-vue3.web.app/assets/throne.9467688c.jpg"
                                    />
                                }
                                className="w-full !rounded-lg !shadow-md"
                            >
                                <Meta
                                    className=" flex-col items-center"
                                    avatar={
                                        <Avatar
                                            className="!w-[132px] !h-[132px] !mt-[-90px] !ml-4 !border-[3px] !border-white"
                                            src="https://argon-dashboard-vue3.web.app/assets/tywin_lannister.08ed8cbf.jpg"
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
                        </Space>
                    </Col>
                    <Col lg={8} md={24}>
                        <Space
                            direction="vertical"
                            size="large"
                            style={{ display: "flex" }}
                        >
                            <Card
                                className="w-full !rounded-lg !shadow-md"
                                title={
                                    <h3 className="!font-semibold text-base !m-0">
                                        Jobs Description
                                    </h3>
                                }
                            >
                                <div>
                                    <p className="!text-base mb-6 text-slate-400">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facilis non dolore est
                                        fuga nobis ipsum illum eligendi nemo
                                        iure repellat, soluta, optio minus ut
                                        reiciendis voluptates enim impedit
                                        veritatis officiis.
                                    </p>

                                    <Button
                                        size="large"
                                        className="!text-white !text-sm !font-semibold"
                                        type="primary"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </Card>
                            <Card className="!rounded-lg !shadow-md">
                                <div className="flex items-center flex-wrap justify-between">
                                    <Avatar
                                        className="!w-[70px] !h-[70px]"
                                        src="https://argon-dashboard-vue3.web.app/assets/tywin_lannister.08ed8cbf.jpg"
                                    />
                                    <div className="py-2 ml-4 flex-grow">
                                        <h3 className="text-lg !m-0">
                                            Le Trung Kien
                                        </h3>
                                        <h5 className="text-xs !m-0 text-slate-400">
                                            The Castle of Trujillo, Spain
                                        </h5>
                                        <Badge status="success" text="Active" />
                                    </div>
                                    <Button
                                        size="small"
                                        className="!flex items-center !text-white !text-sm !font-semibold !py-3 !ml-2"
                                        type="primary"
                                    >
                                        Add
                                    </Button>
                                </div>
                            </Card>
                            <Card className="w-full !rounded-lg !shadow-md">
                                <Meta
                                    className=" flex-col items-center"
                                    avatar={
                                        <Avatar
                                            className="!w-[132px] !h-[132px] !ml-4 !border-[3px] !border-white"
                                            src="https://argon-dashboard-vue3.web.app/assets/tywin_lannister.08ed8cbf.jpg"
                                        />
                                    }
                                    title={
                                        <div className="flex flex-col items-center">
                                            <h3 className="text-lg py-2 !m-0">
                                                Le Trung Kien
                                            </h3>
                                            <h5 className="text-sm text-slate-400 !m-0">
                                                Hand of The King
                                            </h5>
                                        </div>
                                    }
                                    description={
                                        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                                            <span className="flex items-center justify-center w-[38px] h-[38px] text-white bg-[#1da1f2] rounded-full">
                                                <BsTwitter size={17} />
                                            </span>
                                            <span className="flex items-center justify-center w-[38px] h-[38px] text-white bg-[#3b5999] rounded-full">
                                                <BsFacebook size={17} />
                                            </span>
                                            <span className="flex items-center justify-center w-[38px] h-[38px] text-white bg-[#ae4c89] rounded-full">
                                                <BsDribbble size={17} />
                                            </span>
                                        </div>
                                    }
                                />
                            </Card>
                            <Card
                                cover={
                                    <img
                                        className="!rounded-t-lg"
                                        alt="example"
                                        src="https://argon-dashboard-vue3.web.app/assets/man_draw.91b39266.jpg"
                                    />
                                }
                                className="w-full !rounded-lg !shadow-md"
                            >
                                <div>
                                    <div className="mb-4">
                                        <h3 className="!font-semibold text-base">
                                            Jobs Description
                                        </h3>
                                    </div>
                                    <p className="!text-base mb-6 text-slate-400">
                                        Argon is a great free UI package based
                                        on Bootstrap 4 that includes the most
                                        important components and features.
                                    </p>

                                    <Button
                                        size="large"
                                        className="!text-white !text-sm !font-semibold"
                                        type="primary"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </Card>
                        </Space>
                    </Col>
                    <Col lg={8} md={24}>
                        <Space
                            size="large"
                            direction="vertical"
                            style={{ display: "flex" }}
                        >
                            <Card
                                title={
                                    <h3 className="!font-semibold text-lg text-white uppercase text-center !m-0">
                                        Bravo pack
                                    </h3>
                                }
                                headStyle={{
                                    padding: "24px",
                                    color: "#fff",
                                    borderColor: "#0000000d",
                                }}
                                actions={[
                                    <div className="text-base text-white font-semibold my-[-12px] rounded-b-lg py-5 !bg-gradient-to-r from-[#2dce89] to-[#2dcecc]">
                                        Request a demo
                                    </div>,
                                ]}
                                className="!rounded-lg !border-0 !shadow-md !bg-gradient-to-r from-[#2dce89] to-[#2dcecc]"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl text-white font-semibold">
                                        $49
                                    </div>

                                    <span className="text-white font-base font-semibold mt-2">
                                        per application
                                    </span>
                                    <List
                                        className="w-full"
                                        itemLayout="horizontal"
                                        dataSource={data}
                                        renderItem={(item) => (
                                            <List.Item className="!border-0">
                                                <List.Item.Meta
                                                    className="!items-center !justify-center"
                                                    description={
                                                        <div className="w-fit mx-auto text-white">
                                                            {item.title}
                                                        </div>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                    <Button
                                        size="large"
                                        className="!text-white !border-0 !text-sm !font-semibold !my-5"
                                        type="primary"
                                    >
                                        Start free trial
                                    </Button>
                                </div>
                            </Card>
                            <Card
                                className="w-full !rounded-lg !shadow-md"
                                title={
                                    <div className="flex items-center justify-between">
                                        <h3 className="!font-semibold text-base !m-0">
                                            Jobs Description
                                        </h3>
                                        <Button
                                            size="small"
                                            className="!shadow-md !border-0 !text-sm !font-semibold"
                                            style={{
                                                borderRadius: "5px",
                                            }}
                                        >
                                            Action
                                        </Button>
                                    </div>
                                }
                            >
                                <div>
                                    <p className="!text-base mb-6 text-slate-400">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facilis non dolore est
                                        fuga nobis ipsum illum eligendi nemo
                                        iure repellat, soluta, optio minus ut
                                        reiciendis voluptates enim impedit
                                        veritatis officiis.
                                    </p>

                                    <Button
                                        size="large"
                                        className="!text-white !text-sm !font-semibold"
                                        type="primary"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </Card>
                            <Card className="!bg-card-bg !bg-top !bg-cover !relative w-full !rounded-lg !shadow-md">
                                <div>
                                    <div className="mb-4">
                                        <h3 className="!font-bold text-white text-xl !m-0">
                                            Jobs Description
                                        </h3>
                                    </div>
                                    <p className="!text-base mb-6 text-white">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <p className="!font-semibold text-white text-xl !m-0">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </Card>
                            <Card
                                title={
                                    <h3 className="!font-semibold text-lg text-[#5e72e4] uppercase text-center !m-0">
                                        Bravo pack
                                    </h3>
                                }
                                headStyle={{
                                    padding: "24px",
                                    color: "#fff",
                                    borderColor: "#0000000d",
                                }}
                                actions={[
                                    <div className="text-base text-slate-600 font-semibold my-[-12px] rounded-b-lg py-5">
                                        Request a demo
                                    </div>,
                                ]}
                                className="!rounded-lg !border-0 !shadow-md"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl text-slate-600 font-semibold">
                                        $49
                                    </div>

                                    <span className="text-slate-500 font-base font-semibold mt-2">
                                        per application
                                    </span>
                                    <List
                                        className="w-full"
                                        itemLayout="horizontal"
                                        dataSource={data}
                                        renderItem={(item) => (
                                            <List.Item className="!border-0">
                                                <List.Item.Meta
                                                    className="!items-center !justify-center"
                                                    description={
                                                        <div className="w-fit mx-auto text-slate-500">
                                                            {item.title}
                                                        </div>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                    <Button
                                        size="large"
                                        className="!text-white !border-0 !text-sm !my-5 !font-semibold"
                                        type="primary"
                                    >
                                        Start free trial
                                    </Button>
                                </div>
                            </Card>
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Cards;
