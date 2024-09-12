import {TableDataType} from "@/shared";

const dataSource: TableDataType[] = [
  {
    key: 3,
    name: 'Гарри Поттер',
    age: 11,
    movie: 'Гарри Поттер и философский камень',
    source: 'Сервер'
  },
  {
    key: 4,
    name: '',
    age: 11,
    movie: '',
    source: 'Сервер'
  },
];

export const getTableData = () => {
  return Promise.resolve(dataSource);
}