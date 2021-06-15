import ext_CollectionView from "backbone-collectionview";
import { tbodyTrjs as Tr } from "./tbodyTr.js";
import { Sorter as sorter_Sorter } from "../sorter";

mod_tbodyjs = ext_CollectionView.extend({
    childView: Tr,
    tagName: 'tbody',
    initialize: function(opts) {

    },
    addRow: function(model) {
        return this.addChild(model)
    },
    getSorter: function (attr, sorter) {
        var s = new sorter_Sorter(this.collection, attr, sorter)
        return s.getSorter()
    },
})
var mod_tbodyjs;
export { mod_tbodyjs as tbodyjs };
