import {createStore} from "effector";
import {TableDataType} from "@/shared";
import {STORE_TABLE_DATA} from "./constants.ts";

export const $table = createStore<TableDataType[]>(STORE_TABLE_DATA)
