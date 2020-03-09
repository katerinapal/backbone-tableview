"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theadjs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _backboneKinview = require("backbone-kinview");

var _backboneKinview2 = _interopRequireDefault(_backboneKinview);

var _theadTr = require("./theadTr.js");

var theadTr_theadTrjsjs = _interopRequireWildcard(_theadTr);

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

var theadjs = _backboneKinview2.default.extend({
    tagName: 'thead',
    initialize: function initialize() {
        this.row = new theadTr_theadTrjsjs();
        this.render();
    },
    render: function render() {
        this.el.appendChild(this.row.el);
    },
    // raw add, you should probably be using this.row.addCol()
    add: function add() {
        return this.row.add.apply(this.row, arguments);
    },
    remove: function remove() {
        this.row.remove();

        this.superRemove();
    }
});

exports.theadjs = theadjs;
