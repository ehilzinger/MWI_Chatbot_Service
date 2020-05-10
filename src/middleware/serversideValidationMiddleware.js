require('dotenv').config();

module.exports = function serversideValidationMiddleware(req, res, next) {
    if (!process.env.MONGODB_CONN_STRING) res.status(501).json({ error: "Database Credentials Not Set, No Query Possible" });
}