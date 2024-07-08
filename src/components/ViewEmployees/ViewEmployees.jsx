import {useState, useEffect} from "react";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "../Table/Table";

const EmployeeTable = () => {
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);

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
      title: "SNo",
      key: "serial",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Employee Id",
      dataIndex: "empId",
      key: "empId",
    },
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
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
            const response = await axios.get("http://localhost:8080/api/employee");
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
    <Table dataSource={dataSource} columns={columns}/>
  );
};

export default EmployeeTable;
