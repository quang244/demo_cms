"use client"
import React, {useEffect, useState} from 'react';
import {Divider, Radio, Table, Avatar} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useQuery} from "@tanstack/react-query";
import ApiUser from "@/api/apiUser";
import "./user.scss"

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    avatar: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Stt',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string, record) => (
            <div className="flex items-center">
                <Avatar className="mr-5" src={record.avatar} size={45}/> {text}
            </div>),
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'gender',
        dataIndex: 'gender',
    },
    {
        title: 'createdAt',
        dataIndex: 'createdAt',
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const App: React.FC = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    const {isLoading, error, data: listUsers} = useQuery({
            queryKey: ['userList'],
            queryFn: () => ApiUser.getUser(),
        }
    )
    // useEffect(() => {
    //     axios.get("/some-endpoint").then((res) => res?.payload);
    //
    // }, []);
    // console.log(listUsers)
    return (
        // <div className="container">
        <Table
            className="table-user"
            rowKey="id"
            loading={isLoading}
            rowSelection={{
                type: selectionType,
                ...rowSelection,
            }}
            columns={columns}

            dataSource={listUsers?.data}
        />
        // </div>
    );
};

export default App;