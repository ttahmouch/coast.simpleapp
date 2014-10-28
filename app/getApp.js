var fs = require('fs'),
    app = fs.readFileSync(require.resolve('./app.html'), 'utf8');

module.exports = function (req, res, next) {
    res.status(200).set('content-type', 'text/html').body = app;
    next();
};
