import { tablejs as table_tablejsjs } from "./views/table.js";
import { tbodyjs as tbody_tbodyjsjs } from "./views/tbody";
import { tbodyTrjs as tbodyTr_tbodyTrjsjs } from "./views/tbodyTr";
import { theadjs as thead_theadjsjs } from "./views/thead";
import { theadThjs as theadTh_theadThjsjs } from "./views/theadTh";
import { theadTrjs as theadTr_theadTrjsjs } from "./views/theadTr";
import { Sorter as sorter_Sorterjs } from "./sorter";
import { thjs as th_thjsjs } from "./models/th";

table_tablejsjs.tbody = tbody_tbodyjsjs
table_tablejsjs.tbodyTr = tbodyTr_tbodyTrjsjs
table_tablejsjs.thead = thead_theadjsjs
table_tablejsjs.theadTh = theadTh_theadThjsjs
table_tablejsjs.theadTr = theadTr_theadTrjsjs
table_tablejsjs.sorter = sorter_Sorterjs
table_tablejsjs.models = {}
table_tablejsjs.models.th = th_thjsjs

export { table_tablejsjs as Table };
