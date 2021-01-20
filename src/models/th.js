import ext_backbonekinview from "backbone-kinview";
var Model = ext_backbonekinview.models.model

mod_thjs = Model.extend({
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
var mod_thjs;
export { mod_thjs as thjs };
