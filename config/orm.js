const connection = require('./connection.js');

var orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(table, burger, value) {
      var queryString = "INSERT INTO ?? burgers WHERE burger-name ? devoured ?";
      console.log(queryString);
      connection.query(queryString, [table, burger, value], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(table, devoured, value) {
      var queryString = "UPDATE ?? SET devoured ?? WHERE burger ?"
      connection.query(
        queryString,
        [table, devoured, value],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;