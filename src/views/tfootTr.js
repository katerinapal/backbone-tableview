import ext_backbone_Backbone from "backbone";
import ext_underscore__ from "underscore";

tfootTrjs_tfootTrjs = ext_backbone_Backbone.View.extend({
    tagName: 'tr',
    initialize: function() {
        this.render({})
    },
    render: function(data) {
        var tr = ext_underscore__.reduce(data, function(tr, attr){
            return tr += '<th>' + attr + '</th>'
        }, '')

        this.el.innerHTML = tr
    }
})
var tfootTrjs_tfootTrjs;
export { tfootTrjs_tfootTrjs as tfootTrjs };
