
var basic = require('./basic')

describe('basic module exports', function() {

    it('Should be a function', function() {

        // setup
        var subject = basic

        // result
        expect(subject).to.be.function
    })

})
