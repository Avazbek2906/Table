import { useState } from "react";

import { Button, Form, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import {
  tableoptions1,
  tableoptions3,
  tableoptions4,
  tableoptions5,
  tableoptions6,
} from "../static/data";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [form] = Form.useForm();
  const { Option } = Select;
  const [options2, setOptions2] = useState<any>([]);

  const handleChange = (key: any, value: any) => {
    handleMakeParams(key, value);
  };

  const handleMakeParams = (key: any, value: any) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const handleClearParams = () => {
    searchParams.delete("region");
    searchParams.delete("district");
    searchParams.delete("type");
    searchParams.delete("collej");
    searchParams.delete("year");
    searchParams.delete("course");
    searchParams.delete("graduated");
    searchParams.delete("gender");
    form.resetFields();
    setSearchParams(searchParams);
  };

  const changeRegion = (val: any) => {
    console.log(val);
    let arr = tableoptions1.find((el) => el.name === val)?.regions;
    setOptions2(arr);
  };

  return (
    <>
      <Form
        form={form}
        className="table-filter"
        layout="vertical"
        initialValues={[{ id_full_name: "sds" }]}
      >
        <Form.Item name="region" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => {
              handleChange("region", e);
              changeRegion(e);
            }}
            size="large"
            placeholder="Viloyat"
          >
            {tableoptions1.map((item: any) => (
              <Option key={item?.name}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="district" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("district", e)}
            size="large"
            placeholder="Tuman"
          >
            {options2.map((item: any) => (
              <Option key={item?.name}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="type" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("type", e)}
            size="large"
            placeholder="Kollej turi"
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string).includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare(
                  (optionB!.children as unknown as string).toLowerCase()
                )
            }
          >
            {tableoptions3.map((item: any) => (
              <Option key={item?.name}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="collej" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("collej", e)}
            size="large"
            placeholder="Kollej"
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string).includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare(
                  (optionB!.children as unknown as string).toLowerCase()
                )
            }
          >
            {tableoptions4.map((item: any) => (
              <Option key={item?.name}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="year" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("year", e)}
            size="large"
            placeholder="Yil"
          >
            {tableoptions5.map((item: any) => (
              <Option key={item?.name}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="course" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("course", e)}
            size="large"
            placeholder="Kurs"
          >
            {tableoptions6.map((item: any) => (
              <Option key={item?.name}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="graduated" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("graduated", e)}
            size="large"
            placeholder="O'qishni tamomlagan"
          >
            <Option key="Ha">Ha</Option>
            <Option key="Yo'q">Yo'q</Option>
          </Select>
        </Form.Item>

        <Form.Item name="gender" style={{ flexGrow: 1 }}>
          <Select
            style={{ width: "100%", minWidth: 300 }}
            onChange={(e) => handleChange("gender", e)}
            size="large"
            placeholder="Jinsi"
          >
            <Option key="Erkak">Erkak</Option>
            <Option key="Ayol">Ayol</Option>
          </Select>
        </Form.Item>

        <div className="filter-button">
          <Button
            size="large"
            type="primary"
            onClick={handleClearParams}
            icon={<DeleteOutlined />}
          >
            Filterni tozalash
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Filter;
