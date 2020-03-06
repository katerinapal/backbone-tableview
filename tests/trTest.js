"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _src = require("../src");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Tr = _src.tbodyTr.tbodyTr;

describe('tbodyTr', function () {
    it('td should render from model', function () {
        var v = new _src.tbodyTr({
            model: new _backbone2.default.Model({ foo: 'bar' })
        });

        v.$el.find('td').length.should.eql(1);
        v.$el.find('td').text().should.eql('bar');
    });
});
