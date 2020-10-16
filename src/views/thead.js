import ext_backbone_Backbone from "backbone";
import ext_backbonekinview_KinView from "backbone-kinview";
import { theadTrjs as theadTr_theadTrjsjs } from "./theadTr.js";

theadjs_theadjs = ext_backbonekinview_KinView.extend({
    tagName: 'thead',
    initialize: function() {
        this.row = new theadTr_theadTrjsjs()
        this.render()
    },
    render: function() {
        this.el.appendChild(this.row.el)
    },
    // raw add, you should probably be using this.row.addCol()
    add: function() {
        return this.row.add.apply(this.row, arguments)
    },
    remove: function() {
        this.row.remove()

        this.superRemove()
    }
})
var theadjs_theadjs;
export { theadjs_theadjs as theadjs };
