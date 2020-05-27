"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _src = require("../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Thead = _src.Table.thead;

describe('Thead', function () {
    beforeEach(function () {
        this.view = new Thead();
    });

    it('add() should add a th to the tr', function () {
        var view = _backbone2.default.View.extend({
            className: 'foobar',
            tagName: 'th'
        });
        this.view.add({ view: new view() });

        this.view.row.children.length.should.eql(1);
        this.view.$el.find('tr').find('th').hasClass('foobar').should.be.true;
    });

    it('remove() should remove the view', function () {
        this.view.row.addCol({ text: 'foo' });

        this.view.remove();

        this.view.row.children.length.should.eql(0);
    });
});