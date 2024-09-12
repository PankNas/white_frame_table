import {TableDataType} from "../../shared";

export const STORE_TABLE_DATA: TableDataType[] = [...Array(8)].map((_, index) => {
  return {
    key: index,
    name: `Store Alex ${index}`,
    age: 32 + index,
    address: `${index + 1} Downing Street`,
  }
});
