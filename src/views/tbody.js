import CollectionView from "backbone-collectionview";
import * as tbody_tbodyTrjsjs from "./tbodyTr.js";
import { Sorter as tbody_Sorterjs } from "../sorter";

var tbodyjs = CollectionView.extend({
    childView: tbody_tbodyTrjsjs,
    tagName: 'tbody',
    initialize: function(opts) {

    },
    addRow: function(model) {
        return this.addChild(model)
    },
    getSorter: function (attr, sorter) {
        var s = new tbody_Sorterjs(this.collection, attr, sorter)
        return s.getSorter()
    },
});

export { tbodyjs };
