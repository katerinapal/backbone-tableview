import ext_should_should from "should";
import { Table as index_Tablejs } from "../src";
var Th = index_Tablejs.models.th;

describe('Th Model', function(){
    beforeEach(function(){
        this.m = new index_Tablejs()
    })

    it('toggleState() from null', function(){
        this.m.toggleState()

        this.m.get('state').should.eql('up')
    })
    
    it('toggleState() from up', function(){
        this.m.toggleState()
        this.m.toggleState()

        this.m.get('state').should.eql('down')
    })

    it('toggleState() from down', function(){
        this.m.toggleState()
        this.m.toggleState()
        this.m.toggleState()

        ext_should_should(this.m.get('state')).be.null
    })
})
