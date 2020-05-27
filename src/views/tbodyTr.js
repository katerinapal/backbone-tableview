import ext_backbonecollectionview_ChildView from "backbone-collectionview";
import ext_underscore__ from "underscore";
var ChildView = ext_backbonecollectionview_ChildView.childView;

var tbodyTrjs_tbodyTrjs;

tbodyTrjs_tbodyTrjs = ChildView.extend({
    tagName: 'tr',
    render: function() {
        var tr = ext_underscore__.reduce(this.model.toJSON(), function(tr, attr){
            return tr += '<td>' + attr + '</td>'
        }, '')

        this.el.innerHTML = tr
    }
})
export { tbodyTrjs_tbodyTrjs as tbodyTrjs };
