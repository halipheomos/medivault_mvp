const records_routes = require('./records');
module.exports = function(app, db) {

  records_routes(app, db);
  // Other route groups could go here, in the future

};