import {useEffect, useState} from 'react';
import {fetchData} from './utils.ts';
import {TableDataType} from '@/app/types.ts';

export const useFetchTableData = (update: boolean) => {
  const [data, setData] = useState<TableDataType[]>([]);

  useEffect(() => {
    /* имитация резапросов на сервер,
    * значение update=true эквивалентно запросу на сервер за актуальными данными
    */
    if (update) {
      const load = async () => {
        try {
          const currentData: TableDataType[] = await fetchData();
          setData(currentData);
        } catch {
          setData([]);
        }
      }

      load();
    }
  }, [update]);

  return {data}
}