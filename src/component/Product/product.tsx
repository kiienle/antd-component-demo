import React from "react";
import "antd/dist/antd.css";
// import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Space, Table, Tag, Row, Col, Breadcrumb, Button, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import ModelCustom from "./ModelCustom";
const { Column } = Table;
// const products = [
//     {
//         key: "1",
//         name: "Product 1",
//         quantity: 32,
//         supplier: "New York No. 1 Lake Park",
//         tags: ["nice", "developer"],
//     },
//     {
//         key: "2",
//         name: "Product 2",
//         quantity: 42,
//         supplier: "London No. 1 Lake Park",
//         tags: ["loser"],
//     },
//     {
//         key: "3",
//         name: "Product 3",
//         quantity: 32,
//         supplier: "Sidney No. 1 Lake Park",
//         tags: ["cool", "teacher"],
//     },
// ];

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Id",
        dataIndex: "id",
    },
    {
        title: "Title",
        dataIndex: "title",
    },
    {
        title: "Content",
        dataIndex: "body",
    },
];

const Product = () => {
    const onSearch = (value: any) => console.log(value);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [products, setProducts] = useState([
        {
            key: "1",
            name: "Product 1",
            quantity: 32,
            supplier: "New York No. 1 Lake Park",
            tags: ["nice", "developer"],
        },
        {
            key: "2",
            name: "Product 2",
            quantity: 42,
            supplier: "London No. 1 Lake Park",
            tags: ["loser"],
        },
        {
            key: "3",
            name: "Product 3",
            quantity: 32,
            supplier: "Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"],
        },
    ]);
    const [title, setTitle] = useState("");
    const [dataRepair, setDataRepair] = useState([]);
    const showModal = (title: any, data: any) => {
        setIsModalVisible(true);
        setTitle(title);
        setDataRepair(data);
    };

    const handleAddNewProduct = (product: any) => {
        setIsModalVisible(false);
        if (product && product.tags) {
            product.tags = product.tags.split(",");
            product.key = products.length + 1;
            setProducts([...products, product]);
        }
    };

    const handleUpdateProductById = (id: number, product: any) => {
        product.key = id;
        const copyProducts = products;
        copyProducts[id - 1] = product;
        setProducts([...copyProducts]);
        setIsModalVisible(false);
    };

    const handleDeleteProductById = (id: number) => {
        const copyProducts = products;
        copyProducts.splice(id, 1);
        setProducts([...copyProducts]);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Row className="w-[99%] mt-[1%] ml-[0.5%] bg-white">
            <ModelCustom
                isShowModal={isModalVisible}
                isHandleAddNewProduct={handleAddNewProduct}
                isHandleUpdateProductById={handleUpdateProductById}
                isHandleCancel={handleCancel}
                title={title}
                data={dataRepair}
            />
            <Col span={12} offset={2}>
                <Button
                    type="primary"
                    className="float-right mt-3 mr-3"
                    onClick={() =>
                        showModal("add", {
                            key: "",
                            name: "",
                            quantity: 0,
                            supplier: "",
                            tags: [],
                        })
                    }
                >
                    Add Product
                </Button>
                <Input
                    placeholder="Search..."
                    onChange={(e) => onSearch(e.target.value)}
                    style={{
                        width: 250,
                        height: 50,
                        marginRight: 12,
                        marginTop: 12,
                        float: "right",
                    }}
                />
            </Col>
            <Col span={23} className={`mt-3 ml-7`}>
                <Table dataSource={products}>
                    <Column title="Key" dataIndex="key" key="key"></Column>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column
                        title="Quantity"
                        dataIndex="quantity"
                        key="quantity"
                    />
                    <Column
                        title="Supplier"
                        dataIndex="supplier"
                        key="supplier"
                    />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={(tags) => (
                            <>
                                {tags.map((tag: any) => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record: any) => (
                            <Space size="middle">
                                <a onClick={() => showModal("update", record)}>
                                    Repair {record.name}
                                </a>
                                <a
                                    onClick={() =>
                                        handleDeleteProductById(record.key - 1)
                                    }
                                >
                                    Delete
                                </a>
                            </Space>
                        )}
                    />
                </Table>
            </Col>
        </Row>
    );
};

export default Product;
