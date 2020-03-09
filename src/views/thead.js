import Backbone from "backbone";
import KinView from "backbone-kinview";
import * as theadTr_theadTrjsjs from "./theadTr.js";

var theadjs = KinView.extend({
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
});

export { theadjs };
