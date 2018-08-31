const recordsRoutes = require('./records')
module.exports = function (app, db) {
  recordsRoutes(app, db)
  // Other route groups could go here, in the future
}
