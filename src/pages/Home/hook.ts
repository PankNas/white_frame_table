import {useEffect, useState} from "react";
import {getTableData} from "./utils.ts";

export const useFetch = <T extends {}>() => {
  const [data, setData] = useState<T>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTableData();
      setData(data)
    }

    load();
  }, []);

  return {data}
}