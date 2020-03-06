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

var tfoot_tfootTrjsjs = _interopRequireWildcard(_tfootTr);

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

var tfootjs = _backboneKinview2.default.extend({
    tagName: 'tfoot',
    initialize: function initialize() {
        this.tr = new tfoot_tfootTrjsjs();
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

exports.tfootjs = tfootjs;
