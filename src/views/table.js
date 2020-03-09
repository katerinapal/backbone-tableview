"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tablejs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _thead = require("./thead");

var thead_theadjsjs = _interopRequireWildcard(_thead);

var _tfoot = require("./tfoot");

var tfoot_tfootjsjs = _interopRequireWildcard(_tfoot);

var _tbody = require("./tbody");

var tbody_tbodyjsjs = _interopRequireWildcard(_tbody);

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

var tablejs = _backbone2.default.View.extend({
    tagName: 'table',
    constructor: function constructor() {
        this.head = new thead_theadjsjs();
        this.body = new tbody_tbodyjsjs();

        _backbone2.default.View.apply(this, arguments);
        this.superRemove = _backbone2.default.View.prototype.remove;
    },
    render: function render() {
        this.el.appendChild(this.head.el);
        this.el.appendChild(this.body.el);

        return this;
    },
    remove: function remove() {
        this.head.remove();
        if (this.foot) {
            this.foot.remove();
        }
        this.body.remove();

        this.superRemove();
    },
    addColumn: function addColumn() {
        return this.head.row.addCol.apply(this.head.row, arguments);
    },
    addRow: function addRow() {
        return this.body.addRow.apply(this.body, arguments);
    },
    setFoot: function setFoot(data) {
        if (!this.foot) {
            this.foot = new tfoot_tfootjsjs();
            this.$('thead')[0].parentNode.insertBefore(this.foot.el, this.$('thead')[0].nextSibling);
        }

        this.foot.tr.render(data);
    }
});

exports.tablejs = tablejs;
