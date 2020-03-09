import backbonecollectionview_childView from "backbone-collectionview";
import _ from "underscore";
var ChildView = backbonecollectionview_childView.childView;

var tbodyTrjs = ChildView.extend({
    tagName: 'tr',
    render: function() {
        var tr = _.reduce(this.model.toJSON(), function(tr, attr){
            return tr += '<td>' + attr + '</td>'
        }, '')

        this.el.innerHTML = tr
    }
});

export { tbodyTrjs };
