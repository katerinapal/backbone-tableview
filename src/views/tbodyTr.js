import ext_backbonecollectionview from "backbone-collectionview";
import ext__ from "underscore";
var ChildView = ext_backbonecollectionview.childView;

mod_tbodyTrjs = ChildView.extend({
    tagName: 'tr',
    render: function() {
        var tr = ext__.reduce(this.model.toJSON(), function(tr, attr){
            return tr += '<td>' + attr + '</td>'
        }, '')

        this.el.innerHTML = tr
    }
})
var mod_tbodyTrjs;
export { mod_tbodyTrjs as tbodyTrjs };
