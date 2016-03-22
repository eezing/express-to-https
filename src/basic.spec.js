
var basic = require('./basic')
var runMiddlewareMock = require('../test/mock/run-middleware.mock')

describe('basic module exports', function() {

    it('Should be a function', function() {

        // setup
        var subject = basic

        // result
        expect(subject).to.be.function
    })
})

describe('basic - http req', function() {

    it('Should only call redirect with new https url', function() {

        // setup
        var proto = 'http'
        var host = 'some.site.com'
        var url = '/books/123'
        var expected = 'https://' + host + url
        var subject = basic

        // action
        var result = runMiddlewareMock(subject, proto, host, url)

        // result
        expect(result.redirect).to.be.equal(expected)
        expect(result.next).to.be.undefined
    })
})

describe('basic - https req', function() {

    it('Should only call next', function() {

        // setup
        var proto = 'https'
        var host = 'some.site.com'
        var url = '/books/123'
        var subject = basic

        // action
        var result = runMiddlewareMock(subject, proto, host, url)

        // result
        expect(result.redirect).to.be.undefined
        expect(result.next).to.be.true
    })
})
