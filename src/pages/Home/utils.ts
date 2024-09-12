import {TableDataType} from "../../shared";

const dataSource: TableDataType[] = [
  {
    key: 9,
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: 10,
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

export const getTableData = () => {
  return Promise.resolve(dataSource);
}