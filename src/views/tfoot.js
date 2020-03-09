import Backbone from "backbone";
import KinView from "backbone-kinview";
import { tfootTrjs as tfootTr_tfootTrjsjs } from "./tfootTr.js";

var tfootjs = KinView.extend({
    tagName: 'tfoot',
    initialize: function() {
        this.tr = new tfootTr_tfootTrjsjs()
        this.render()
    },
    render: function(data) {
        this.tr.render(data)
        this.el.appendChild(this.tr.el)
    },
    remove: function() {
        this.tr.remove()

        this.superRemove()
    }
});

export { tfootjs };
