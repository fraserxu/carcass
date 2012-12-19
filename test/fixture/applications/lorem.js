var carcass = require('carcass');

module.exports = carcass.factories.Express(function(app, options) {

    app.get('/dolor', function(req, res, next) {
        res.send('Lorem ipsum dolor sit amet');
    });

    app.get('/options', function(req, res, next) {
        res.json(options);
    });

});