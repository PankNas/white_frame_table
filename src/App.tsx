import {Select, Table} from 'antd';
import styles from './styles.module.css';
import {useEffect, useState} from "react";
import {getTableData} from "./utils.ts";
import {$table, fetchTableDataFx} from "./app/store";
import {useUnit} from "effector-react";
import './reset.css';

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
  const storeTable = useUnit($table)

  useEffect(() => {
    const load = async () => {
      const data = await getTableData();
      setTableData(data)
    }

    load();
  }, []);

  useEffect(() => {
    fetchTableDataFx(undefined);
  }, []);

  return (
    <main className={styles.mainPage}>
      <Select
        defaultValue="store"
        options={[
          {value: 'store', label: <span>Данные из хранилища</span>},
          {value: 'all', label: <span>Данные из бэка</span>}]
        }
        className={styles.mainPage__select}
      />

      <Table dataSource={storeTable} columns={columns}/>
    </main>
  )
}

export default App
