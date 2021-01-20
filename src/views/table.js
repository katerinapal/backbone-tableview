import ext_Backbone from "backbone";
import { theadjs as THead } from "./thead";
import { tfootjs as TFoot } from "./tfoot";
import { tbodyjs as TBody } from "./tbody";

mod_tablejs = ext_Backbone.View.extend({
    tagName: 'table',
    constructor: function() {
        this.head = new THead()
        this.body = new TBody()

        ext_Backbone.View.apply(this, arguments)
        this.superRemove = ext_Backbone.View.prototype.remove
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
            this.foot = new TFoot()
            this.$('thead')[0].parentNode.insertBefore(this.foot.el, this.$('thead')[0].nextSibling)
        }

        this.foot.tr.render(data)
    }
})
var mod_tablejs;
export { mod_tablejs as tablejs };
