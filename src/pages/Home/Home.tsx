import {Select, Table} from 'antd';
import styles from './styles.module.css';
import {useEffect, useState} from "react";
import {getTableData} from "../../utils.ts";
import {$table, fetchTableDataFx} from "../../app";
import {useUnit} from "effector-react";
import {useFetch} from './hook.ts';
import {TableDataType} from "../../types.ts";

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
  const storeTable = useUnit($table) // хранилище
  const table = useFetch<TableDataType>() // запрос на бэк

  useEffect(() => {
    fetchTableDataFx(undefined);
  }, []);

  const handleChangeSelect = (value) => {

  }

  return (
    <main className={styles.mainPage}>
      <Select
        defaultValue="store"
        options={[
          {value: 'store', label: <span>Данные из хранилища</span>},
          {value: 'all', label: <span>Данные из бэка</span>}]
        }
        onChange={handleChangeSelect}
        className={styles.mainPage__select}
      />

      <Table dataSource={storeTable} columns={columns} pagination={false}/>
    </main>
  )
}
