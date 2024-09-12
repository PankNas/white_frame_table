export const COLUMNS_TABLE_NAME = [
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

export const SELECT_OPTIONS = [
  {value: 'store', label: <span>Данные из хранилища</span>},
  {value: 'common', label: <span>Всего данных(хранилище + бэк)</span>}
]