import {Table} from 'antd';
import styles from './styles.module.css';
import {useEffect, useState} from "react";
import {getTableData} from "./utils.ts";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {
  const [tableData, setTableData] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getTableData();
      setTableData(data)
    }

    load();
  }, []);

  return (
    <main className={styles.mainPage}>
      <Table dataSource={tableData} columns={columns}/>
    </main>
  )
}

export default App
