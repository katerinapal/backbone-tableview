"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theadThjs = undefined;

var _backbone = require("backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

_underscore2.default.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var theadThjs_theadThjs;

exports.theadThjs = theadThjs_theadThjs = _backbone2.default.View.extend({
    tagName: 'th',
    template: _underscore2.default.template('{{text}}<i class="fa fa-caret-up"></i>'),
    initialize: function initialize(opts) {
        this.text = opts.text || '';

        this.render();
    },
    render: function render() {
        this.el.innerHTML = this.template({ text: this.text });
    },
    renderState: function renderState(foo, order) {
        var i = this.$('i')[0];

        switch (order) {
            case 'up':
                this.el.classList.add('active');
                i.classList.remove('fa-caret-down');
                i.classList.add('fa-caret-up');
                i.style.visibility = 'visible';
                break;
            case 'down':
                this.el.classList.add('active');
                i.classList.remove('fa-caret-up');
                i.classList.add('fa-caret-down');
                i.style.visibility = 'visible';
                break;
            default:
                this.el.classList.remove('active');
                i.style.visibility = 'hidden';
                break;
        }
    }
});
exports.theadThjs = theadThjs_theadThjs;