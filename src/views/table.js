"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tablejs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _thead = require("./thead");

var _tfoot = require("./tfoot");

var _tbody = require("./tbody");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.tablejs = mod_tablejs = _backbone2.default.View.extend({
    tagName: 'table',
    constructor: function constructor() {
        this.head = new _thead.theadjs();
        this.body = new _tbody.tbodyjs();

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
            this.foot = new _tfoot.tfootjs();
            this.$('thead')[0].parentNode.insertBefore(this.foot.el, this.$('thead')[0].nextSibling);
        }

        this.foot.tr.render(data);
    }
});
var mod_tablejs;
exports.tablejs = mod_tablejs;