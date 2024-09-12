import {createEffect, createStore} from "effector";
import {TableDataType} from "../../types.ts";
import {getTableData} from "../../utils.ts";

export const fetchTableDataFx = createEffect(getTableData);

export const $table = createStore([])
  .on(fetchTableDataFx.doneData, (_, data) => data);