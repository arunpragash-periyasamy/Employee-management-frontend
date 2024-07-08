import { Table as AntTable } from "antd";
const Table = ({ dataSource, columns }) => {
  return (
    <div className="table-container max-h-full md:max-h-none md:overflow-hidden overflow-y-scroll">
      <AntTable
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        className="ant-table-wrapper rounded-xl"
        pagination={false}
      />
    </div>
  );
};

export default Table;
