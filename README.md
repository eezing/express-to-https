# express-to-https

Express middleware to redirect http requests to https using the x-forwarded-proto header.

[![Build Status](https://travis-ci.org/eezing/express-to-https.svg?branch=master)](https://travis-ci.org/eezing/express-to-https) [![npm version](https://badge.fury.io/js/express-to-https.svg)](https://badge.fury.io/js/express-to-https)

---

### Get Started

#### basic
This will simply redirect all http requests to https using the default redirect behavior in express. The redirect path will be identical to the original request. Currently the default redirect behavior in express uses the 302 status code for all request methods. See [status code definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) for more information.

```javascript
var express = require('express')
var app = express()
var toHttps = require('express-to-https').basic

app.use(toHttps)

```
