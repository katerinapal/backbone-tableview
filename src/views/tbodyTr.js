"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tbodyTrjs = undefined;

var _backboneCollectionview = require("backbone-collectionview");

var _backboneCollectionview2 = _interopRequireDefault(_backboneCollectionview);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var ChildView = _backboneCollectionview2.default.childView;

exports.tbodyTrjs = tbodyTrjs_tbodyTrjs = ChildView.extend({
    tagName: 'tr',
    render: function render() {
        var tr = _underscore2.default.reduce(this.model.toJSON(), function (tr, attr) {
            return tr += '<td>' + attr + '</td>';
        }, '');

        this.el.innerHTML = tr;
    }
});
var tbodyTrjs_tbodyTrjs;
exports.tbodyTrjs = tbodyTrjs_tbodyTrjs;