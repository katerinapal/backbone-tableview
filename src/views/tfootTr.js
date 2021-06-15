"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tfootTrjs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.tfootTrjs = mod_tfootTrjs = _backbone2.default.View.extend({
    tagName: 'tr',
    initialize: function initialize() {
        this.render({});
    },
    render: function render(data) {
        var tr = _underscore2.default.reduce(data, function (tr, attr) {
            return tr += '<th>' + attr + '</th>';
        }, '');

        this.el.innerHTML = tr;
    }
});
var mod_tfootTrjs;
exports.tfootTrjs = mod_tfootTrjs;