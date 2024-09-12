import {useEffect, useState} from 'react';
import {getTableData} from './utils.ts';
import {TableDataType} from '@/shared';

export const useFetch = () => {
  const [data, setData] = useState<TableDataType[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getTableData();
        setData(data)
      } catch {
        setData([]);
      }
    }

    load();
  }, []);

  return {data}
}