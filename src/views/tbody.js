"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tbodyjs = undefined;

var _backboneCollectionview = require("backbone-collectionview");

var _backboneCollectionview2 = _interopRequireDefault(_backboneCollectionview);

var _tbodyTr = require("./tbodyTr.js");

var _sorter = require("../sorter");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.tbodyjs = mod_tbodyjs = _backboneCollectionview2.default.extend({
    childView: _tbodyTr.tbodyTrjs,
    tagName: 'tbody',
    initialize: function initialize(opts) {},
    addRow: function addRow(model) {
        return this.addChild(model);
    },
    getSorter: function getSorter(attr, sorter) {
        var s = new _sorter.Sorter(this.collection, attr, sorter);
        return s.getSorter();
    }
});
var mod_tbodyjs;
exports.tbodyjs = mod_tbodyjs;