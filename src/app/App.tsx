import {Select, SelectProps, Table} from 'antd';
import {useUnit} from 'effector-react';
import styles from './styles.module.css';
import {useState} from 'react';
import {COLUMNS_TABLE_NAME, SELECT_OPTIONS, STORE} from './constants.tsx';
import {$table, useFetchTableData} from "@/app";

export function App() {
  const storeTable = useUnit($table); // хранилище
  const backTable = useFetchTableData(); // данные с бэка
  const [selectedItem, setSelectedItem] = useState(SELECT_OPTIONS[0].value);

  const commonData = [...storeTable, ...backTable.data];
  const visibleData = selectedItem === STORE ? storeTable : commonData

  const handleChangeSelect: SelectProps['onChange'] = (value: string) => {
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
