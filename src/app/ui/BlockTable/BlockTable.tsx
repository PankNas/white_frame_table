import {useUnit} from "effector-react";
import {$table} from "@/app/store";
import {useFetchTableData} from "@/app/hooks";
import {useState} from "react";
import {COLUMNS_TABLE_NAME, SELECT_OPTIONS, STORE} from "./constants.tsx";
import {Select, SelectProps, Table} from "antd";
import styles from "./styles.module.css";

export const BlockTable = () => {
  const [selectedItem, setSelectedItem] = useState(SELECT_OPTIONS[0].value);
  const isStore = selectedItem === STORE;

  const storeTable = useUnit($table); // хранилище
  const backTable = useFetchTableData(!isStore); // данные с бэка

  const displayedData = isStore ? storeTable : [...storeTable, ...backTable.data];

  const handleChangeSelect: SelectProps['onChange'] = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <>
      <label>
        <p className={styles.labelSelect}>Источник данных для таблицы</p>
        <Select
          defaultValue={selectedItem}
          options={SELECT_OPTIONS}
          onChange={handleChangeSelect}
          className={styles.select}
        />
      </label>

      <Table
        dataSource={displayedData}
        columns={COLUMNS_TABLE_NAME}
        pagination={false}
      />
    </>
  )
}