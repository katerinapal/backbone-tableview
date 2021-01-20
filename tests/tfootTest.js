import ext_should_should from "should";
import ext_Backbone from "backbone";
import { Table as src_Table } from "../src";

describe('Table', function(){
    beforeEach(function(){
        this.view = new src_Table().render()
    })

    it('setFoot() should add tfoot', function() {
        this.view.setFoot({text: 'foo'})

        this.view.$el[0].outerHTML.should.eql(
            '<table><thead><tr></tr></thead><tfoot><tr><th>foo</th></tr></tfoot><tbody></tbody></table>'
        )
    })

    it('setFoot() should only add a single tr', function() {
        this.view.setFoot({text: 'bar'})
        this.view.setFoot({text: 'foo'})

        this.view.$el[0].outerHTML.should.eql(
            '<table><thead><tr></tr></thead><tfoot><tr><th>foo</th></tr></tfoot><tbody></tbody></table>'
        )
    })

    it('remove()', function() {
        this.view.setFoot({text: 'bar'})
        this.view.foot.remove()

        this.view.$el[0].outerHTML.should.eql('<table><thead><tr></tr></thead><tbody></tbody></table>')
    })

    it('table remove()', function(){
        this.view.setFoot({text: 'bar'})
        this.view.remove()

        this.view.$el[0].outerHTML.should.eql('<table></table>')
    })
})
