const express = require('express');
var burgers = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/burgers');
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/burger/insertOne", function (req, res) {
  burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/updateOne/:id", function (req, res) {
  //var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burgers.update({
    devoured: req.body.devoured
  },
    condition,
    function () {
      res.redirect("/burgers");
      // if (result.changedRows === 0) {
      //   // If no rows were changed, then the ID must not exist, so 404
      //   return res.status(404).end();
      // }
      // res.status(200).end();

    }
  );
});

router.delete("/burgers/delete/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function () {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;