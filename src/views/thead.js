import ext_Backbone from "backbone";
import ext_KinView from "backbone-kinview";
import { theadTrjs as Row } from "./theadTr.js";

mod_theadjs = ext_KinView.extend({
    tagName: 'thead',
    initialize: function() {
        this.row = new Row()
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
var mod_theadjs;
export { mod_theadjs as theadjs };
