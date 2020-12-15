// http://localhost:3000/contact?key=abcd

// wrapping, closure
function apiKey(key) {
    return (req, res, next) => {
        if (!req.query.key || req.query.key !== key) {
            res.status(401).send('<h1>Unauthorized</h1>');
            return;
        }
        next();
    }
}

module.exports = apiKey;
