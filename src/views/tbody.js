import ext_backbonecollectionview_CollectionView from "backbone-collectionview";
import { tbodyTrjs as tbodyTr_tbodyTrjsjs } from "./tbodyTr.js";
import { Sorter as sorter_Sorterjs } from "../sorter";

tbodyjs_tbodyjs = ext_backbonecollectionview_CollectionView.extend({
    childView: tbodyTr_tbodyTrjsjs,
    tagName: 'tbody',
    initialize: function(opts) {

    },
    addRow: function(model) {
        return this.addChild(model)
    },
    getSorter: function (attr, sorter) {
        var s = new sorter_Sorterjs(this.collection, attr, sorter)
        return s.getSorter()
    },
})
var tbodyjs_tbodyjs;
export { tbodyjs_tbodyjs as tbodyjs };
