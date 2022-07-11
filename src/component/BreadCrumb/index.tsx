import { Row, Col, Breadcrumb, Space, Button } from "antd";
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/profile": "Profile",
    "/components": "Components",
    "/components/buttons": "Buttons",
    "/components/cards": "Cards",
    "/components/tables": "Tables",
    "/components/notifications": "Notifications",
};

const BreadCrumb = () => {
    const location = useLocation();
    const path = location.pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = path.map((_, index) => {
        const url = `/${path.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link className="!text-white" to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item className="items-center" key="home">
            <Link className="!text-white" to="/dashboard">
                Home
            </Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <div className="w-full mb-[-60px]">
            <Row className="m-0 px-7 py-5 !w-full !h-fit flex items-center !bg-indigo-410">
                <Col span={12}>
                    <div className="flex items-end !h-[29px]">
                        <div className="text-white text-xl font-semibold inline-block mr-8 cursor-pointer">
                            {breadcrumbNameMap[location.pathname]}
                        </div>
                        <Breadcrumb className="hidden text-base font-semibold md:block">
                            {breadcrumbItems}
                        </Breadcrumb>
                    </div>
                </Col>

                <Col span={12}>
                    <div className="flex justify-end !h-[29px]">
                        <Space size="large">
                            <Button className="!h-full !rounded-md !px-2 !text-indigo-410 !text-xs hover:!text-black !font-semibold">
                                New
                            </Button>
                            <Button className="!h-full !rounded-md !px-2 !text-indigo-410 !text-xs hover:!text-black !font-semibold">
                                Fillters
                            </Button>
                        </Space>
                    </div>
                </Col>
            </Row>
            <Row className="m-0 px-7 py-8 !w-full !bg-indigo-410"></Row>
        </div>
    );
};

export default BreadCrumb;
