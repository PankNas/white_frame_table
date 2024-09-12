import {Select, Table} from 'antd';
import styles from './styles.module.css';
import {useState} from "react";
import {$table} from "../../app";
import {useUnit} from "effector-react";
import {useFetch} from './hook.ts';
import {COLUMNS_TABLE_NAME, SELECT_OPTIONS} from "./constants.tsx";

export function Home() {
  const storeTable = useUnit($table); // хранилище
  const backTable = useFetch(); // данные с бэка
  const [selectedItem, setSelectedItem] = useState(SELECT_OPTIONS[0].value);
  const commonData = [...storeTable, ...backTable.data];

  const visibleData = selectedItem === 'store' ? storeTable : commonData

  const handleChangeSelect = (value: string) => {
    setSelectedItem(value)
  }

  return (
    <main className={styles.mainPage}>
      <Select
        defaultValue={selectedItem}
        options={SELECT_OPTIONS}
        onChange={handleChangeSelect}
        className={styles.mainPage__select}
      />

      <Table
        dataSource={visibleData}
        columns={COLUMNS_TABLE_NAME}
        pagination={false}
      />
    </main>
  )
}
