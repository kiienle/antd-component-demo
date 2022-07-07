import { Button, Col, Input, Row } from "antd";
import {
    BsArrowUp,
    BsHandIndexThumbFill,
    BsFillBarChartFill,
} from "react-icons/bs";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaChartPie, FaCoins } from "react-icons/fa";
import Table, { ColumnsType } from "antd/lib/table";
import { useEffect, useRef } from "react";
import Scrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { NULL } from "sass";
import BreadCrumb from "../../component/BreadCrumb";

interface DataType {
    key: React.Key;
    pageName: string;
    visitors: string;
    uniqueUsers: string;
    rate: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: (
            <span className="uppercase text-xs text-slate-400">Page Name</span>
        ),
        dataIndex: "pageName",
        key: "pageName",
    },
    {
        title: (
            <span className="uppercase text-xs text-slate-400">Visitors</span>
        ),
        dataIndex: "visitors",
        key: "visitors",
    },
    {
        title: (
            <span className="uppercase text-xs text-slate-400">
                Unique Users
            </span>
        ),
        dataIndex: "uniqueUsers",
        key: "uniqueUsers",
    },
    {
        title: (
            <span className="uppercase text-xs text-slate-400">
                Bounce Rate
            </span>
        ),
        key: "rate",
        dataIndex: "rate",
        render: (rate) => (
            <div className="inline-flex items-center justify-around">
                <BsArrowUp size={16} color="#2fcf8a" />
                <span className="inline-block ml-1">{rate}</span>
            </div>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        pageName: "John Brown",
        visitors: "4,398",
        uniqueUsers: "New York No. 1 Lake Park",
        rate: "46,53%",
    },
    {
        key: "2",
        pageName: "John Brown",
        visitors: "4,398",
        uniqueUsers: "New York No. 1 Lake Park",
        rate: "46,53%",
    },
    {
        key: "3",
        pageName: "John Brown",
        visitors: "4,398",
        uniqueUsers: "New York No. 1 Lake Park",
        rate: "46,53%",
    },
    {
        key: "4",
        pageName: "John Brown",
        visitors: "4,398",
        uniqueUsers: "New York No. 1 Lake Park",
        rate: "46,53%",
    },
];

const Dasboard = () => {
    const comp = useRef<HTMLDivElement>(null);
    useEffect(() => {
        return () => {
            if (null !== comp.current) {
                let ps = new Scrollbar(comp.current);
                if (ps) {
                    ps.destroy();
                    // ps = null;
                }
            }
        };
    }, []);
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
                <Row gutter={[24, 24]} className="mt-5">
                    <Col lg={16} xs={24}>
                        <div className="w-full bg-white rounded-lg shadow-lg">
                            <div className="h-[67px] flex items-center py-2 px-6 ">
                                <div className="max-w-full basis-0 grow">
                                    <h3 className="mb-0 text-lg text-primary">
                                        Page visits
                                    </h3>
                                </div>
                                <div className="max-w-full basis-0 grow">
                                    <div className="flex justify-end">
                                        <Button
                                            type="primary"
                                            style={{
                                                backgroundColor: "#5e72e4",
                                                borderRadius: "8px",
                                            }}
                                        >
                                            See all
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} xs={24}>
                        <div className="w-full bg-white rounded-lg shadow-lg">
                            <div className="h-[67px] flex items-center py-2 px-6">
                                <div className="max-w-full basis-0 grow">
                                    <h3 className="mb-0 text-lg text-primary">
                                        Social traffic
                                    </h3>
                                </div>
                                <div className="max-w-full basis-0 grow">
                                    <div className="flex justify-end">
                                        <Button
                                            type="primary"
                                            style={{
                                                backgroundColor: "#5e72e4",
                                                borderRadius: "8px",
                                            }}
                                        >
                                            See all
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 scrollbar-hide">
                                <Table
                                    // style={{ scrollbarWidth: "none" }}
                                    ref={comp}
                                    className="!scrollbar-hide"
                                    columns={columns}
                                    dataSource={data}
                                    scroll={{ x: 800 }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dasboard;
