import Backbone from "backbone";
import * as table_theadjsjs from "./thead";
import * as table_tfootjsjs from "./tfoot";
import * as table_tbodyjsjs from "./tbody";

var tablejs = Backbone.View.extend({
    tagName: 'table',
    constructor: function() {
        this.head = new table_theadjsjs()
        this.body = new table_tbodyjsjs()

        Backbone.View.apply(this, arguments)
        this.superRemove = Backbone.View.prototype.remove
    },
    render: function() {
        this.el.appendChild(this.head.el)
        this.el.appendChild(this.body.el)

        return this
    },
    remove: function() {
        this.head.remove()
        if (this.foot) {
            this.foot.remove()
        }
        this.body.remove()

        this.superRemove()
    },
    addColumn: function() {
        return this.head.row.addCol.apply(this.head.row, arguments)
    },
    addRow: function() {
        return this.body.addRow.apply(this.body, arguments)
    },
    setFoot: function(data) {
        if (!this.foot) {
            this.foot = new table_tfootjsjs()
            this.$('thead')[0].parentNode.insertBefore(this.foot.el, this.$('thead')[0].nextSibling)
        }

        this.foot.tr.render(data)
    }
});

export { tablejs };
