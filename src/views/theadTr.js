import Backbone from "backbone";
import _ from "underscore";
import KinView from "backbone-kinview";
import * as theadTr_theadThjsjs from "./theadTh.js";
import * as theadTr_thjsjs from "../models/th.js";

var theadTrjs = KinView.extend({
    tagName: 'tr',
    exclusiveState: true,
    theadTr_theadThjsjs: theadTr_theadThjsjs,
    initialize: function() {
        this.children.model = theadTr_thjsjs
        this.render()
    },
    addCol: function(opts) {
        var model = this.add({
            view: new this.Th({
                text: opts.text || '',
                className: opts.click ? 'sortable' : ''
            }),
            hasState: opts.click ? true : false,
            data: opts.data || {}
        })

        var view = model.get('view')
	    view.listenTo(model, 'change:state', view.renderState)

        if (opts.click) {
            view.delegate(
                'click',
                _.bind(this.clickState, this, model, opts.click)
            )
        }

        return view
    },
    clickState: function(model, done) {
        done.call(this, model)
    }
});

export { theadTrjs };
