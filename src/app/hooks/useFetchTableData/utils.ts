import {TableDataType} from '@/app/types.ts';

const DATA_SOURCE: TableDataType[] = [
  {
    key: 3,
    name: 'Питер Квилл',
    age: 30,
    movie: 'Стражи галактики',
    source: 'Сервер'
  },
  {
    key: 4,
    name: 'Пол Атрейдес',
    age: 16,
    movie: 'Дюна',
    source: 'Сервер'
  },
];

export const fetchData = (): Promise<TableDataType[]> => {
  return Promise.resolve(DATA_SOURCE);
}