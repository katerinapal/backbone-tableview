import should from "should";
import Backbone from "backbone";
import { Table as src_Tablejs } from "../src";

var Tr = src_Tablejs.tbodyTr

describe('tbodyTr', function(){
    it('td should render from model', function(){
        var v = new src_Tablejs({
            model: new Backbone.Model({foo: 'bar'})
        })

        v.$el.find('td').length.should.eql(1)
        v.$el.find('td').text().should.eql('bar')
    })
})
