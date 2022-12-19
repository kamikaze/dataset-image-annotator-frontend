import {PlusOutlined} from "@ant-design/icons";
import {Button, Space, Table} from "antd";
import {useState} from "react";
import {ColumnsType} from "antd/lib/table";
import Title from "antd/lib/typography/Title";
import {useTranslation} from "react-i18next";

const TeamListPage = () => {
  const {t} = useTranslation();
  const [dataSource, setDataSource] = useState([]);
  const [rowCount, setRowCount] = useState<number>(100);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchState, setSearchState] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  interface DataType {
    key: React.Key;
    name: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: t('ID'),
      dataIndex: 'id',
      key: 'id',
      sorter: true,
      // ...ColumnSearchProps('id', searchState, setSearchState)
    },
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      defaultSortOrder: 'ascend' as const,
      // ...ColumnSearchProps('name', searchState, setSearchState)
    },
  ];

  const onTableChange = () => {

  };

  return (
    <div>
      <Title level={2}>{t('Teams')}</Title>
      <Space size='middle' direction='vertical' style={{ width: '100%' }}>
        <Button>
          <PlusOutlined/>{t('Create')}
        </Button>
        <Table dataSource={dataSource} columns={columns} loading={loading} onChange={onTableChange}
               showSorterTooltip={false}
               pagination={{ defaultPageSize: 20, position: ['bottomRight'], total: rowCount, current: currentPage }}
               sortDirections={['descend', 'ascend']}
        />
      </Space>
    </div>
  )
}

export {TeamListPage};
