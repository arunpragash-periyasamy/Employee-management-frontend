import { useEffect } from "react";
import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import UploadImage from "../UploadImage/UploadImage";
import { useParams } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import axios from "axios";
import moment from "moment";

const { Option } = Select;

const AddEmployee = () => {
  const { id } = useParams();
  console.log("id " + id);

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    if (values.profile && values.profile.length > 0) {
      const file = values.profile[0];
      console.log("Uploaded file:", file);
    }
    if (id) {
      axios.put(`http://localhost:8080/api/employee/${id}`, values);
    } else {
      axios.post("http://localhost:8080/api/employee", values);
    }
  };

  const getData = async (id) => {
    console.log("Inside the getData");
    const response = await axios.get(
      `http://localhost:8080/api/employee/${id}`
    );
    const data = response.data;
    data.dateOfBirth = moment(data.dateOfBirth); // Convert dateOfBirth to moment object
    form.setFieldsValue(data);
    console.log(data);
  };

  useEffect(() => {
    if (id) {
      getData(id);
    } 
  }, [id, form]);

  const handleEmployeeName = () => {
    let name = capitalizeFirstLetter(form.getFieldValue("name")).replace(
      /[^a-zA-Z]\s/g,
      ""
    );
    form.setFieldValue("name",name);
  }

  const capitalizeFirstLetter = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  const handleMobileNumber = () => {
    let number = form
      .getFieldValue("mobileNumber")
      .replace(/\D+/g, "")
      .slice(0, 10);
    form.setFieldValue("mobileNumber",number);
  }


  return (
    <div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <Form.Item
          label={
            <span className="hidden dark:text-slate-100 text-[18px]">Id</span>
          }
          name="id"
          className="hidden focus:border-l-pink-600"
        >
          <Input
            type="text"
            className="hidden w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Id"
            value={0}
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">
              Employee Name
            </span>
          }
          name="name"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter employee name!",
            },
            {
              pattern: /^[a-zA-Z\s]*$/, // Alphabetic characters and spaces only
              message: "Please enter valid employee name!",
            },
          ]}
          onChange={handleEmployeeName}
        >
          <Input
            type="text"
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Employee Name"
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">Employee Id</span>
          }
          name="empId"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter employee id!",
            },
            {
              pattern: /^[a-zA-Z0-9]*$/,
              message: "Please enter valid employee id!",
            },
          ]}
        >
          <Input
            type="text"
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Employee Id"
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label={
            <span className="dark:text-slate-100 text-[18px]">Gender</span>
          }
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select
            placeholder="Select a option and change Input text above"
            allowClear
            className="w-full text-[18px] ant-select-custom"
            popupClassName="bg-white dark:bg-slate-600 rounded-md"
          >
            <Option value="male">
              <p className="text-slate-300 font-bold">Male</p>
            </Option>
            <Option value="female">
              <p className="text-slate-300 font-bold">Female</p>
            </Option>
            <Option value="other">
              <p className="text-slate-300 font-bold">Other</p>
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">
              Mobile Number
            </span>
          }
          name="mobileNumber"
          className="focus:border-l-pink-600"
          onChange={handleMobileNumber}
          rules={[
            {
              required: true,
              message: "Please enter mobile number!",
            },
            {
              pattern: /^[6-9]\d*/,
              message: "Please enter valid mobile number!",
            },
            {
              min: 10,
              max: 10,
              message: "Please enter valid mobile number!",
            },
          ]}
        >
          <Input
            type="text"
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Mobile Number"
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">Password</span>
          }
          name="password"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter password!",
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message:
                "Password must contain at least one uppercase, one lowercase and one digit!",
            },
          ]}
        >
          <Input.Password
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">
              Confirm Password
            </span>
          }
          name="confirmPassword"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter confirm password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">Designation</span>
          }
          name="designation"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter designation!",
            },
          ]}
        >
          <Input
            type="text"
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Designation"
          />
        </Form.Item>
        <Form.Item
          name="department"
          label={
            <span className="dark:text-slate-100 text-[18px]">Department</span>
          }
          rules={[
            {
              required: true,
              message: "Please select department!",
            },
          ]}
        >
          <Select
            placeholder="Department"
            allowClear
            className="w-full text-[18px] ant-select-custom"
            popupClassName="bg-white dark:bg-slate-600 rounded-md"
          >
            <Option value="hr">
              <p className="text-slate-300 font-bold">HR Department</p>
            </Option>
            <Option value="sales" className="dark:text-white">
              <p className="text-slate-300 font-bold">Sales</p>
            </Option>
            <Option value="developer">
              <p className="text-slate-300 font-bold">Developer</p>
            </Option>
            <Option value="mentor">
              <p className="text-slate-300 font-bold">Mentor</p>
            </Option>
            <Option value="uiux">
              <p className="text-slate-300 font-bold">UI/UX Designer</p>
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<span className="dark:text-slate-100 text-[18px]">Email</span>}
          name="email"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter email!",
            },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input
            type="text"
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px]">
              Date of Birth
            </span>
          }
          name="dateOfBirth"
          className="focus:border-l-pink-600"
          rules={[
            {
              required: true,
              message: "Please enter date of birth!",
            },
          ]}
        >
          <DatePicker
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Date of Birth"
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px] ">Address</span>
          }
          name="address"
          className="focus:border-l-pink-600 "
          rules={[
            {
              required: true,
              message: "Please enter address!",
            },
          ]}
        >
          <Input.TextArea
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Address"
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px] ">Education</span>
          }
          name="education"
          className="focus:border-l-pink-600 "
          rules={[
            {
              required: true,
              message: "Please enter education!",
            },
          ]}
        >
          <Input.TextArea
            className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
            placeholder="Education"
          />
        </Form.Item>
        {/* <Form.Item
          label={
            <span className="dark:text-slate-100 text-[18px] md:col-span-2">
              Profile
            </span>
          }
          name="profile"
          className="focus:border-l-pink-600"
          valuePropName="value"
        >
          <UploadImage count={1} />
        </Form.Item> */}

        <Space className="flex justify-end min-w-full">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default AddEmployee;
