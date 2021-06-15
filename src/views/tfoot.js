import ext_Backbone from "backbone";
import ext_KinView from "backbone-kinview";
import { tfootTrjs as Tr } from "./tfootTr.js";

mod_tfootjs = ext_KinView.extend({
    tagName: 'tfoot',
    initialize: function() {
        this.tr = new Tr()
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
})
var mod_tfootjs;
export { mod_tfootjs as tfootjs };
