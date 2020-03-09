"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _src = require("../src");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

describe('Table', function () {
    beforeEach(function () {
        this.view = new Table().render();
    });

    it('creates a table', function () {
        this.view.$el[0].outerHTML.should.eql('<table><thead><tr></tr></thead><tbody></tbody></table>');
    });

    it('remove()', function () {
        this.view.remove();

        this.view.$el[0].outerHTML.should.eql('<table></table>');
    });

    it('addColumn()', function () {
        var view = this.view.addColumn({ text: 'foo' });

        view.should.be.instanceof(_backbone2.default.View);
        view.$el.text().should.eql('foo');
    });

    it('addRow()', function () {
        var m = new _backbone2.default.Model({ foo: 'bar' });
        var view = this.view.addRow(m);

        view.get('view').$el.text().should.eql('bar');
    });
});
