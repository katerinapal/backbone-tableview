"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tfootjs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _backboneKinview = require("backbone-kinview");

var _backboneKinview2 = _interopRequireDefault(_backboneKinview);

var _tfootTr = require("./tfootTr.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var tfootjs_tfootjs;

exports.tfootjs = tfootjs_tfootjs = _backboneKinview2.default.extend({
    tagName: 'tfoot',
    initialize: function initialize() {
        this.tr = new _tfootTr.tfootTrjs();
        this.render();
    },
    render: function render(data) {
        this.tr.render(data);
        this.el.appendChild(this.tr.el);
    },
    remove: function remove() {
        this.tr.remove();

        this.superRemove();
    }
});
exports.tfootjs = tfootjs_tfootjs;