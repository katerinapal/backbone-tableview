import should from "should";
import { Table as src_Tablejs } from "../src";
var Th = src_Tablejs.models.th;

describe('Th Model', function(){
    beforeEach(function(){
        this.m = new Th()
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

        should(this.m.get('state')).be.null
    })
})
