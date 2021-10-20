const monk = require('monk');
const db = monk('localhost/admin-dashboard');

module.exports = db;
