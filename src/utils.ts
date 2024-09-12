import {TableDataType} from "./types.ts";

const dataSource: TableDataType[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

export const getTableData = () => {
  return Promise.resolve(dataSource);
}