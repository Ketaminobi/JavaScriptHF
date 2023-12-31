const requireOption = require('../requireOption');

module.exports = function(objectRepository) {
    return function(req, res, next) {
        if (typeof res.locals.keszito === 'undefined') {
            return next();
        }

        res.locals.keszito.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/raidebere');
        });
    };
};