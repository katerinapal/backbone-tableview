"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tbodyjs = undefined;

var _backboneCollectionview = require("backbone-collectionview");

var _backboneCollectionview2 = _interopRequireDefault(_backboneCollectionview);

var _tbodyTr = require("./tbodyTr.js");

var tbodyTr_tbodyTrjsjs = _interopRequireWildcard(_tbodyTr);

var _sorter = require("../sorter");

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var tbodyjs = _backboneCollectionview2.default.extend({
    childView: tbodyTr_tbodyTrjsjs,
    tagName: 'tbody',
    initialize: function initialize(opts) {},
    addRow: function addRow(model) {
        return this.addChild(model);
    },
    getSorter: function getSorter(attr, sorter) {
        var s = new Sorter(this.collection, attr, sorter);
        return s.getSorter();
    }
});

exports.tbodyjs = tbodyjs;
