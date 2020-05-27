'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thjs = undefined;

var _backboneKinview = require('backbone-kinview');

var _backboneKinview2 = _interopRequireDefault(_backboneKinview);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Model = _backboneKinview2.default.models.model;

var thjs_thjs;

exports.thjs = thjs_thjs = Model.extend({
    toggleState: function toggleState() {
        switch (this.get('state')) {
            default:
            case false:
                this.set('state', 'up');
                break;
            case 'up':
                this.set('state', 'down');
                break;
            case 'down':
                this.set('state', null);
                break;
        }
    }
});
exports.thjs = thjs_thjs;