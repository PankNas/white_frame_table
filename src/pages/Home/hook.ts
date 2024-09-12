import {useEffect, useState} from 'react';
import {fetchData} from './utils.ts';
import {TableDataType} from '@/shared';

export const useFetch = () => {
  const [data, setData] = useState<TableDataType[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchData();
        setData(data)
      } catch {
        setData([]);
      }
    }

    load();
  }, []);

  return {data}
}