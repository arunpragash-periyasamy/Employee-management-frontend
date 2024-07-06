import {useState, useEffect} from "react";
import { Table, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeTable = () => {
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);
//   const dataSource = [
//     {
//       id: 203,
//       firstName: "John",
//       lastName: "Doe updated",
//       email: "johndoe@example.com",
//       gender: "Male",
//       mobileNumber: 1234567890,
//       password: "password123",
//       confirmPassword: "password123",
//       designation: "Software Engineer",
//       department: "Engineering",
//       address: "123 Main St, Anytown, USA",
//       education: "Bachelor of Science in Computer Science",
//       dateOfBirth: "1990-01-01T00:00:00.000+00:00",
//     },
//     {
//       id: 204,
//       firstName: "John",
//       lastName: "Doe",
//       email: "johndoe@example.com",
//       gender: "Male",
//       mobileNumber: 1234567890,
//       password: "password123",
//       confirmPassword: "password123",
//       designation: "Software Engineer",
//       department: "Engineering",
//       address: "123 Main St, Anytown, USA",
//       education: "Bachelor of Science in Computer Science",
//       dateOfBirth: "1990-01-01T00:00:00.000+00:00",
//     },
//   ];

  const handleEdit = (id) => {
    // Navigate to the edit page with the selected employee id
    navigate(`/employee/${id}`);
  };

  const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/employee/${id}`);
        setDataSource(dataSource.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("There was an error deleting the employee!", error);
    }
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Education",
      dataIndex: "education",
      key: "education",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500"
            onClick={() => handleEdit(record.id)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            className="bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-500"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
    
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/employee/employees");
            const data = response.data;
            data.forEach((employee) => {
                employee.dateOfBirth = new Date(employee.dateOfBirth);
            });
            console.log(data);
            setDataSource(data);
        } catch (error) {
            console.error("There was an error fetching the employees!", error);
        }
    }
    
    useEffect(() => {
        getData();
        return () => {
            
        };
    }, []);

  return (
    <div className="table-container max-h-full md:max-h-none md:overflow-hidden overflow-y-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        className="ant-table-wrapper rounded-xl"
        pagination={false}
      />
    </div>
  );
};

export default EmployeeTable;
