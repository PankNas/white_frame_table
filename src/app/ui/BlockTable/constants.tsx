import {SelectProps} from 'antd';
import {TableDataType} from '@/app/types.ts';

type ColumnsType = {
  title: string;
  dataIndex: string;
  key: keyof TableDataType;
}

export const COLUMNS_TABLE_NAME: ColumnsType[] = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Фильм',
    dataIndex: 'movie',
    key: 'movie',
  },
  {
    title: 'Источник данных',
    dataIndex: 'source',
    key: 'source',
  },
];

export const STORE = 'store';

export const SELECT_OPTIONS: SelectProps['options'] = [
  {value: STORE, label: <span>Данные из хранилища</span>},
  {value: 'common', label: <span>Всего данных (хранилище + сервер)</span>}
]