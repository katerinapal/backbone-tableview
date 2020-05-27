"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _table = require("./views/table.js");

var _tbody = require("./views/tbody");

var _tbodyTr = require("./views/tbodyTr");

var _thead = require("./views/thead");

var _theadTh = require("./views/theadTh");

var _theadTr = require("./views/theadTr");

var _sorter = require("./sorter");

var _th = require("./models/th");

_table.tablejs.tbody = _tbody.tbodyjs;
_table.tablejs.tbodyTr = _tbodyTr.tbodyTrjs;
_table.tablejs.thead = _thead.theadjs;
_table.tablejs.theadTh = _theadTh.theadThjs;
_table.tablejs.theadTr = _theadTr.theadTrjs;
_table.tablejs.sorter = _sorter.Sorter;
_table.tablejs.models = {};
_table.tablejs.models.th = _th.thjs;

var index_Table;

exports.Table = index_Table = _table.tablejs;
exports.Table = index_Table;