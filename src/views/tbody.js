import CollectionView from "backbone-collectionview";
import * as tbodyTr_tbodyTrjsjs from "./tbodyTr.js";
import { Sorter as sorter_Sorterjs } from "../sorter";

var tbodyjs = CollectionView.extend({
    childView: tbodyTr_tbodyTrjsjs,
    tagName: 'tbody',
    initialize: function(opts) {

    },
    addRow: function(model) {
        return this.addChild(model)
    },
    getSorter: function (attr, sorter) {
        var s = new Sorter(this.collection, attr, sorter)
        return s.getSorter()
    },
});

export { tbodyjs };
