"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _src = require("../src");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var TheadTr = _src.theadTr.theadTr;

describe('TheadTr', function () {
    beforeEach(function () {
        this.view = new _src.theadTr({});
    });

    it('tagName is tr', function () {
        this.view.tagName.should.eql('tr');
    });

    it('should have exclusive state', function () {
        this.view.exclusiveState.should.be.ok;
    });

    it('addCol() should add a th', function () {
        this.view.addCol({ text: 'foobar' });

        this.view.$el.children().eq(0).text().should.eql('foobar');
    });

    it('should not have state if a click callback isnt passed', function () {
        var view = this.view.addCol({ text: 'foo' });

        this.view.children.where({ view: view })[0].get('hasState').should.be.falsse;
    });

    it('should have state if a click callback is passed', function () {
        var view = this.view.addCol({ text: 'foo', click: function click() {} });

        this.view.children.where({ view: view })[0].get('hasState').should.be.falsse;
    });

    it('click should trigger the callback', function (done) {
        var view = this.view.addCol({ text: 'foo', click: function click() {
                done();
            } });

        view.$el.trigger('click');
    });

    it('remove() should remove all children', function () {
        this.view.remove();

        this.view.children.length.should.eql(0);
    });
});
