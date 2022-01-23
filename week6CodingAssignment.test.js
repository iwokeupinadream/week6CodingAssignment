var expect = chai.expect

describe('myFunctions', function() {
    describe('#generatePlayer', function() {
        it('should generate a new player object', function() {
            var x = new Player().generatePlayer(0, 1)
            console.log(x)
            expect(x).to.be.a(typeof new Player(0, 1))
        })
    })
})