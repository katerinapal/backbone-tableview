import ext_backbone_Backbone from "backbone";
import ext_underscore__ from "underscore";
import ext_backbonekinview_KinView from "backbone-kinview";
import { theadThjs as theadTh_theadThjsjs } from "./theadTh.js";
import { thjs as modelsth_thjsjs } from "../models/th.js";

theadTrjs_theadTrjs = ext_backbonekinview_KinView.extend({
    tagName: 'tr',
    exclusiveState: true,
    Th: theadTh_theadThjsjs,
    initialize: function() {
        this.children.model = modelsth_thjsjs
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
                ext_underscore__.bind(this.clickState, this, model, opts.click)
            )
        }

        return view
    },
    clickState: function(model, done) {
        done.call(this, model)
    }
})
var theadTrjs_theadTrjs;
export { theadTrjs_theadTrjs as theadTrjs };
