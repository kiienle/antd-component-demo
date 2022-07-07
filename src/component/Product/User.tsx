import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/lib/table";
import type { FilterValue, SorterResult } from "antd/lib/table/interface";
import qs from "qs";
import React, { useEffect, useState } from "react";

interface DataType {
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    login: {
        uuid: string;
    };
}

interface Params {
    pagination?: TablePaginationConfig;
    sorter?: SorterResult<any> | SorterResult<any>[];
    total?: number;
    sortField?: string;
    sortOrder?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: "20%",
    },
    {
        title: "Gender",
        dataIndex: "gender",
        filters: [
            { text: "Male", value: "male" },
            { text: "Female", value: "female" },
        ],
        width: "20%",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Operation",
        dataIndex: "operation",
    },
];

const getRandomuserParams = (params: Params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const User: React.FC = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 10,
    });

    const fetchData = (params: Params = {}) => {
        setLoading(true);
        fetch(
            `https://randomuser.me/api?${qs.stringify(
                getRandomuserParams(params)
            )}`
        )
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setData(results);
                setLoading(false);
                setPagination({
                    ...params.pagination,
                    total: 200,
                });
            });
    };

    const handleTableChange = (
        newPagination: any,
        filters: any,
        sorter: any
    ) => {
        fetchData({
            sortField: sorter.field as string,
            sortOrder: sorter.order as string,
            pagination: newPagination,
            ...filters,
        });
    };

    useEffect(() => {
        fetchData({ pagination });
    }, []);

    return (
        <Table
            rowKey={(record) => record.login.uuid}
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={pagination}
            onChange={handleTableChange}
            scroll={{ x: 400 }}
        />
    );
};

export default User;
