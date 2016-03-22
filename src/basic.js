
module.exports = function(req, res, next) {

    if (req.headers['x-forwarded-proto'] != 'https')
        res.redirect(301, 'https://' + req.headers.host + req.originalUrl)

    else
        next()
}
