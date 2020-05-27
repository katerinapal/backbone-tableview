import ext_backbonekinview_backbonekinview from "backbone-kinview";
var Model = ext_backbonekinview_backbonekinview.models.model

var thjs_thjs;

thjs_thjs = Model.extend({
    toggleState: function() {
        switch (this.get('state')) {
            default:
            case false:
                this.set('state', 'up')
                break;
            case 'up':
                this.set('state', 'down')
                break;
            case 'down':
                this.set('state', null)
                break;
        }
    }
})
export { thjs_thjs as thjs };
