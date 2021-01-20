import { tablejs as Table } from "./views/table.js";
import { tbodyjs } from "./views/tbody";
import { tbodyTrjs } from "./views/tbodyTr";
import { theadjs } from "./views/thead";
import { theadThjs } from "./views/theadTh";
import { theadTrjs } from "./views/theadTr";
import { Sorter as sorterjs } from "./sorter";
import { thjs } from "./models/th";

Table.tbody = tbodyjs
Table.tbodyTr = tbodyTrjs
Table.thead = theadjs
Table.theadTh = theadThjs
Table.theadTr = theadTrjs
Table.sorter = sorterjs
Table.models = {}
Table.models.th = thjs

var mod_Table;

mod_Table = Table
export { mod_Table as Table };
