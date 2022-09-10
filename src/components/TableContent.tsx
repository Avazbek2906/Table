import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GetFunc } from "../server/config";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    fixed: "left",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function TableContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getUrlFunctions = () => {
    let url = "?page=1";
    for (let key of Array.from(searchParams.keys())) {
      let value = searchParams.get(key);
      url = url + `&${key}=${value}`;
    }
    GetFunc(url).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    getUrlFunctions();
  }, [searchParams]);
  return (
    <div>
      <h2>Ma'lumotlar</h2>
      <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
    </div>
  );
}

export default TableContent;
