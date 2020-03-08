import should from "should";
import Backbone from "backbone";
import { Table as src_Tablejs } from "../src";

var Thead = src_Tablejs.thead

describe('Thead', function(){
    beforeEach(function(){
        this.view = new src_Tablejs()
    })

    it('add() should add a th to the tr', function(){
        var view = Backbone.View.extend({
            className: 'foobar',
            tagName: 'th'
        })
        this.view.add({view: new view() })

        this.view.row.children.length.should.eql(1)
        this.view.$el.find('tr').find('th').hasClass('foobar').should.be.true
    })

    it('remove() should remove the view', function(){
        this.view.row.addCol({text: 'foo'})

        this.view.remove()

        this.view.row.children.length.should.eql(0)
    })
})
