var orm = require('../config/orm.js');

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, value, cb) {
    orm.create("burgers", burger, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(devoured, value, cb) {
    orm.update("burgers", devoured, value, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;