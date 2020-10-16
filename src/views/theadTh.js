import ext_backbone_Backbone from "backbone";
import ext_underscore__ from "underscore";

ext_underscore__.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
}

theadThjs_theadThjs = ext_backbone_Backbone.View.extend({
    tagName: 'th',
    template: ext_underscore__.template('{{text}}<i class="fa fa-caret-up"></i>'),
    initialize: function(opts) {
        this.text = opts.text || ''

        this.render()
    },
    render: function() {
        this.el.innerHTML = this.template({text: this.text})
    },
    renderState: function(foo, order) {
        var i = this.$('i')[0]

        switch (order) {
            case 'up':
                this.el.classList.add('active')
                i.classList.remove('fa-caret-down')
                i.classList.add('fa-caret-up')
                i.style.visibility = 'visible'
                break
            case 'down':
                this.el.classList.add('active')
                i.classList.remove('fa-caret-up')
                i.classList.add('fa-caret-down')
                i.style.visibility = 'visible'
                break;
            default:
                this.el.classList.remove('active')
                i.style.visibility = 'hidden'
                break
        }
    }
})
var theadThjs_theadThjs;
export { theadThjs_theadThjs as theadThjs };
