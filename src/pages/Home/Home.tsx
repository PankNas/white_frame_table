import {Select, Table} from 'antd';
import styles from './styles.module.css';
import {useState} from "react";
import {$table} from "../../app";
import {useUnit} from "effector-react";
import {useFetch} from './hook.ts';
import {TableDataType} from "../../shared";

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

export function Home() {
  const [selectItem, setSelectItem] = useState('store');
  const storeTable = useUnit($table); // хранилище
  const table = useFetch<TableDataType[]>(); // запрос на бэк
  const commonData = [...storeTable, ...table.data];

  const handleChangeSelect = (value) => {
    setSelectItem(value)
  }

  return (
    <main className={styles.mainPage}>
      <Select
        defaultValue="store"
        options={[
          {value: 'store', label: <span>Данные из хранилища</span>},
          {value: 'all', label: <span>Всего данных (хранилище + бэк)</span>}]
        }
        onChange={handleChangeSelect}
        className={styles.mainPage__select}
      />

      <Table dataSource={selectItem === 'store' ? storeTable : commonData} columns={columns} pagination={false}/>
    </main>
  )
}
