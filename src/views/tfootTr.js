import Backbone from "backbone";
import _ from "underscore";

var tfootTrjs = Backbone.View.extend({
    tagName: 'tr',
    initialize: function() {
        this.render({})
    },
    render: function(data) {
        var tr = _.reduce(data, function(tr, attr){
            return tr += '<th>' + attr + '</th>'
        }, '')

        this.el.innerHTML = tr
    }
});

export { tfootTrjs };
