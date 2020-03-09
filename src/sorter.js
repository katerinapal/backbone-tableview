'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sorter = undefined;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Sorter = function Sorter(collection, attr, sorter) {
    this.collection = collection;
    this.attr = attr;
    this.isReverse = null;

    this.sorter = typeof this[sorter] == 'function' ? _underscore2.default.bind(this[sorter], this) : _underscore2.default.bind(sorter, this);
};

var exported_Sorter = Sorter;

Sorter.prototype.getSorter = function (model) {
    var that = this;
    return function (model) {
        var state = model.get('state');

        if (state !== null) {
            that.isReverse = state == 'up' ? false : true;
        }

        if (that.isReverse !== null) {
            that.collection.comparator = that.sorter;
            that.collection.sort();
        } else {
            that.reset();
        }
    };
};
Sorter.prototype.string = function (a, b) {

    if (this.isReverse) {
        return -getAttr(a, this.attr).localeCompare(getAttr(b, this.attr));
    }
    return getAttr(a, this.attr).localeCompare(getAttr(b, this.attr));
};

Sorter.prototype.int = function (a, b) {
    var rep = /[^0-9]/g;

    var i = getAttr(a, this.attr),
        j = getAttr(b, this.attr);

    i = _underscore2.default.isNumber(i) ? i : Number(i.replace(rep, ''));
    j = _underscore2.default.isNumber(j) ? j : Number(j.replace(rep, ''));

    if (this.isReverse) {
        return j <= i ? -1 : 1;
    }
    return i <= j ? -1 : 1;
};

Sorter.prototype.reset = function () {
    var origAttr = this.attr;
    var origSorter = this.sorter;

    this.attr = 'cid';
    this.isReverse = null;
    this.collection.comparator = _underscore2.default.bind(this.int, this);
    this.collection.sort();

    this.attr = origAttr;
    this.collection.comparator = origSorter;

    return this;
};

var getAttr = function getAttr(model, name) {
    if (name in model) {
        return model[name];
    }

    return model.get(name);
};
exports.Sorter = exported_Sorter;
