import ext_should_should from "should";
import ext_Backbone from "backbone";
import { Table as src_Table } from "../src";

var Thead = src_Table.thead

describe('Thead', function(){
    beforeEach(function(){
        this.view = new Thead()
    })

    it('add() should add a th to the tr', function(){
        var view = ext_Backbone.View.extend({
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
