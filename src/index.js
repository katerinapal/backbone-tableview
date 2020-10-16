import { tablejs as viewstable_tablejsjs } from "./views/table.js";
import { tbodyjs as viewstbody_tbodyjsjs } from "./views/tbody";
import { tbodyTrjs as viewstbodyTr_tbodyTrjsjs } from "./views/tbodyTr";
import { theadjs as viewsthead_theadjsjs } from "./views/thead";
import { theadThjs as viewstheadTh_theadThjsjs } from "./views/theadTh";
import { theadTrjs as viewstheadTr_theadTrjsjs } from "./views/theadTr";
import { Sorter as sorter_Sorterjs } from "./sorter";
import { thjs as modelsth_thjsjs } from "./models/th";

viewstable_tablejsjs.tbody = viewstbody_tbodyjsjs
viewstable_tablejsjs.tbodyTr = viewstbodyTr_tbodyTrjsjs
viewstable_tablejsjs.thead = viewsthead_theadjsjs
viewstable_tablejsjs.theadTh = viewstheadTh_theadThjsjs
viewstable_tablejsjs.theadTr = viewstheadTr_theadTrjsjs
viewstable_tablejsjs.sorter = sorter_Sorterjs
viewstable_tablejsjs.models = {}
viewstable_tablejsjs.models.th = modelsth_thjsjs

var index_Table;

index_Table = viewstable_tablejsjs
export { index_Table as Table };
