import {createStore} from 'effector';
import {TableDataType} from '@/app/types.ts';
import {STORE_TABLE_DATA} from './constants.ts';

export const $table = createStore<TableDataType[]>(STORE_TABLE_DATA)
