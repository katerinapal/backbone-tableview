import ext_Backbone from "backbone";
import ext__ from "underscore";

mod_tfootTrjs = ext_Backbone.View.extend({
    tagName: 'tr',
    initialize: function() {
        this.render({})
    },
    render: function(data) {
        var tr = ext__.reduce(data, function(tr, attr){
            return tr += '<th>' + attr + '</th>'
        }, '')

        this.el.innerHTML = tr
    }
})
var mod_tfootTrjs;
export { mod_tfootTrjs as tfootTrjs };
