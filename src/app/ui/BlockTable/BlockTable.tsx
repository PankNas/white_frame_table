import {useUnit} from "effector-react";
import {$table} from "@/app/store";
import {useFetchTableData} from "@/app/hooks";
import {useState} from "react";
import {COLUMNS_TABLE_NAME, SELECT_OPTIONS, STORE} from "./constants.tsx";
import {Select, SelectProps, Table} from "antd";
import styles from "./styles.module.css";

export const BlockTable = () => {
  const storeTable = useUnit($table); // хранилище
  const backTable = useFetchTableData(); // данные с бэка
  const [selectedItem, setSelectedItem] = useState(SELECT_OPTIONS[0].value);

  const commonData = [...storeTable, ...backTable.data];
  const visibleData = selectedItem === STORE ? storeTable : commonData

  const handleChangeSelect: SelectProps['onChange'] = (value: string) => {
    setSelectedItem(value)
  }

  return (
    <>
      <Select
        defaultValue={selectedItem}
        options={SELECT_OPTIONS}
        onChange={handleChangeSelect}
        className={styles.select}
      />

      <Table
        dataSource={visibleData}
        columns={COLUMNS_TABLE_NAME}
        pagination={false}
      />
    </>
  )
}