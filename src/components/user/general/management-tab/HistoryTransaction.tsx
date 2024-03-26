"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Button,
    Checkbox,
    CheckboxOptionType,
    DatePicker,
    Input,
    Popover,
    Select,
    Table,
    TableProps,
    TableColumnsType,
} from "antd";

interface DataType {
    key: React.Key;
    idTransaction: any;
    content: any;
    payment: any;
    date: any;
    status: any;
}

const columns: TableColumnsType<DataType> = [
    {
        key: "1",
        title: "Mã giao dịch",
        dataIndex: "idTransaction",
    },
    {
        key: "2",
        title: "Nội dung",
        dataIndex: "content",
    },
    {
        key: "3",
        title: "Thanh toán",
        dataIndex: "payment",
    },
    {
        key: "4",
        title: "Ngày giao dịch",
        dataIndex: "date",
    },
    {
        key: "5",
        title: "Trạng thái",
        dataIndex: "status",
    },
];

const data: DataType[] = [
    // {
    //     key: "1",
    //     idTransaction: "any",
    //     content: "any",
    //     payment: "any",
    //     date: "any",
    //     status: "any",
    // },
];

const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
) => {
    console.log("params", pagination, filters, sorter, extra);
};

const dateFormat = "DD/MM/YYYY";
const defaultChecklist = columns.map((item) => item.key as string);

function HistoryTransaction() {
    const [checkedList, setCheckedList] = useState(defaultChecklist);

    const newColumns = columns.map((item) => ({
        ...item,
        hidden: !checkedList.includes(item.key as string),
    }));

    const { RangePicker } = DatePicker;

    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <Table
                title={() => (
                    <div className="flex items-center justify-between ">
                        <div>
                            <span className="mr-4">Hiển thị</span>
                            <Select
                                defaultValue={10}
                                labelInValue
                                style={{ width: 80 }}
                                options={[
                                    {
                                        value: 10,
                                    },
                                    {
                                        value: 25,
                                    },
                                    {
                                        value: 100,
                                    },
                                ]}
                            />
                        </div>
                        <Popover
                            placement="bottomRight"
                            arrow={false}
                            trigger="click"
                            content={
                                <Checkbox.Group
                                    value={checkedList}
                                    options={
                                        columns.map(({ key, title }) => ({
                                            label: title,
                                            value: key,
                                        })) as CheckboxOptionType[]
                                    }
                                    onChange={(value) => {
                                        setCheckedList(value as string[]);
                                    }}
                                />
                            }
                        >
                            <Image
                                src="/images/icons/eye-slash.png"
                                alt="Hide"
                                width={20}
                                height={20}
                                style={{ cursor: "pointer" }}
                            />
                        </Popover>

                        <RangePicker
                            // defaultValue={}
                            format={dateFormat}
                        />

                        <Button>In</Button>

                        <Input.Search
                            placeholder="Tìm kiếm"
                            style={{ width: "20%" }}
                        />
                    </div>
                )}
                columns={newColumns}
                dataSource={data}
                onChange={onChange}
            />
        </div>
    );
}

export default HistoryTransaction;
