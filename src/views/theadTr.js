"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theadTrjs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _backboneKinview = require("backbone-kinview");

var _backboneKinview2 = _interopRequireDefault(_backboneKinview);

var _theadTh = require("./theadTh.js");

var _th = require("../models/th.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theadTrjs = _backboneKinview2.default.extend({
    tagName: 'tr',
    exclusiveState: true,
    theadTh_theadThjsjs: _theadTh.theadThjs,
    initialize: function initialize() {
        this.children.model = _th.thjs;
        this.render();
    },
    addCol: function addCol(opts) {
        var model = this.add({
            view: new this.Th({
                text: opts.text || '',
                className: opts.click ? 'sortable' : ''
            }),
            hasState: opts.click ? true : false,
            data: opts.data || {}
        });

        var view = model.get('view');
        view.listenTo(model, 'change:state', view.renderState);

        if (opts.click) {
            view.delegate('click', _underscore2.default.bind(this.clickState, this, model, opts.click));
        }

        return view;
    },
    clickState: function clickState(model, done) {
        done.call(this, model);
    }
});

exports.theadTrjs = theadTrjs;
