import models from "backbone-kinview";
var Model = backbonekinview_models.models.model

var thjs = Model.extend({
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
});

export { thjs };
