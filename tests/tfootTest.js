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

    it('setFoot() should add tfoot', function () {
        this.view.setFoot({ text: 'foo' });

        this.view.$el[0].outerHTML.should.eql('<table><thead><tr></tr></thead><tfoot><tr><th>foo</th></tr></tfoot><tbody></tbody></table>');
    });

    it('setFoot() should only add a single tr', function () {
        this.view.setFoot({ text: 'bar' });
        this.view.setFoot({ text: 'foo' });

        this.view.$el[0].outerHTML.should.eql('<table><thead><tr></tr></thead><tfoot><tr><th>foo</th></tr></tfoot><tbody></tbody></table>');
    });

    it('remove()', function () {
        this.view.setFoot({ text: 'bar' });
        this.view.foot.remove();

        this.view.$el[0].outerHTML.should.eql('<table><thead><tr></tr></thead><tbody></tbody></table>');
    });

    it('table remove()', function () {
        this.view.setFoot({ text: 'bar' });
        this.view.remove();

        this.view.$el[0].outerHTML.should.eql('<table></table>');
    });
});
