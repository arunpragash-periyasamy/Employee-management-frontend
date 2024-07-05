import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import UploadImage from "../UploadImage/UploadImage";
const { Option } = Select;
const AddEmployee = () => {
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
      // file.url or file.response will contain the URL of the uploaded file
    }
  };

    return (
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          className="grid grid-cols-1 md:grid-cols-2 "
        >
          <Form.Item
            label={
              <span className="dark:text-slate-100 text-[18px]">
                First Name
              </span>
            }
            name="firstName"
            className="focus:border-l-pink-600"
          >
            <Input
              type="text"
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="dark:text-slate-100 text-[18px]">Last Name</span>
            }
            name="lastName"
            className="focus:border-l-pink-600"
          >
            <Input
              type="text"
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label={
              <span className="dark:text-slate-100 text-[18px]">Gender</span>
            }
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
          >
            <Input
              type="text"
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="Password"
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
          >
            <Input
              type="text"
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="dark:text-slate-100 text-[18px]">
                Designation
              </span>
            }
            name="designation"
            className="focus:border-l-pink-600"
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
              <span className="dark:text-slate-100 text-[18px]">
                Department
              </span>
            }
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
            label={
              <span className="dark:text-slate-100 text-[18px]">Email</span>
            }
            name="email"
            className="focus:border-l-pink-600"
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
          >
            <DatePicker
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="Date of Birth"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="dark:text-slate-100 text-[18px] ">
                Address
              </span>
            }
            name="address"
            className="focus:border-l-pink-600 "
          >
            <Input.TextArea
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="Address"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="dark:text-slate-100 text-[18px] ">
                Education
              </span>
            }
            name="education"
            className="focus:border-l-pink-600 "
          >
            <Input.TextArea
              className="w-full rounded-md p-1 text-[18px] dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 focus:dark:bg-slate-600"
              placeholder="Education"
            />
          </Form.Item>
          <Form.Item
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
          </Form.Item>

          <Space className="flex justify-end min-w-full">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form>
      </div>
    );
}

export default AddEmployee;