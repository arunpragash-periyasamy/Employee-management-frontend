import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Table from "../Table/Table"
import { toast } from "react-toastify";
import axios from 'axios';
import { Button, Space } from 'antd';


const Department = () => {
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);

    const handleEdit = (id) => {
      
    };

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/api/department/${id}`);
          setDataSource(dataSource.filter((employee) => employee.id !== id));
          toast.success("Department deleted successfully");
      } catch (error) {
          toast.error("There is no department to delete")
      }
    };

    const columns = [
      {
        title: "SNo",
        key: "serial",
        render: (text, record, index) => index + 1,
      },
      {
        title: "Department Name",
        dataIndex: "name",
        key: "name",
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
        const response = await axios.get("http://localhost:8080/api/department");
          const data = response.data;
          console.log(data)
          data.forEach((employee) => {
              employee.dateOfBirth = new Date(employee.dateOfBirth);
            });
            setDataSource(data);
            toast.success("data received successfully")
      } catch (error) {
        console.error("There was an error fetching the employees!", error);
      }
    };

    useEffect(() => {
      getData();
      return () => {};
    }, []);
    return (
        <Table dataSource={dataSource} columns={columns}/>
    )
}

export default Department;