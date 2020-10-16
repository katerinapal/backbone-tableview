"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _src = require("../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Th = _src.Table.models.th;

describe('Th Model', function () {
    beforeEach(function () {
        this.m = new Th();
    });

    it('toggleState() from null', function () {
        this.m.toggleState();

        this.m.get('state').should.eql('up');
    });

    it('toggleState() from up', function () {
        this.m.toggleState();
        this.m.toggleState();

        this.m.get('state').should.eql('down');
    });

    it('toggleState() from down', function () {
        this.m.toggleState();
        this.m.toggleState();
        this.m.toggleState();

        (0, _should2.default)(this.m.get('state')).be.null;
    });
});