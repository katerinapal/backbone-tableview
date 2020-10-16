import ext_should_should from "should";
import ext_backbone_Backbone from "backbone";
import { Table as src_Table } from "../src";

var Tr = src_Table.tbodyTr

describe('tbodyTr', function(){
    it('td should render from model', function(){
        var v = new Tr({
            model: new ext_backbone_Backbone.Model({foo: 'bar'})
        })

        v.$el.find('td').length.should.eql(1)
        v.$el.find('td').text().should.eql('bar')
    })
})
