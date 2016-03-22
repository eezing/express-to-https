
var toHttps = require('./index')
var basic = require('./basic')

describe('index module exports', function() {

    it('Should have "basic" property equal to "basic" module', function() {

        // setup
        var subject = toHttps.basic

        // result
        expect(subject).to.be.equal(basic)
    })
})
