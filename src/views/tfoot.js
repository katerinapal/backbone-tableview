import ext_backbone_Backbone from "backbone";
import ext_backbonekinview_KinView from "backbone-kinview";
import { tfootTrjs as tfootTr_tfootTrjsjs } from "./tfootTr.js";
var tfootjs_tfootjs;

tfootjs_tfootjs = ext_backbonekinview_KinView.extend({
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
})
export { tfootjs_tfootjs as tfootjs };
