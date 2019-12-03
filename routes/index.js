// Require models
var db = require("../db/models");
// Routes

module.exports = function (app) {

  // app.post("/api/createPlant", function (req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(function () {
  //     res.redirect(307, "/api/login");
  //   }).catch(function (err) {
  //     console.log(err);
  //     res.json(err);
  //     // res.status(422).json(err.errors[0].message);
  //   });
  // });

  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Route for getting some data about user to be used client side
  app.get("/plants/:name", (req, res) => {
    db.plant.findAll({ where: { name: req.params.name } })
      .then(results => res.json(results))
      .catch(err => res.json(err))
  });

  app.post("/garden/:id", (req, res) => {
    console.log(req.body)
    db.Garden.findOrCreate({ where: { UserId: req.params.id } })
      .then((dbGarden) => {
      // .then(garden => {
        console.log(dbGarden)
      //   console.log('ADDING PLANT')
        dbGarden.addPlants([1, 2])
          .then((result) => console.log('ADD PLANT RESULT: ', result))
          .catch(err => console.log('ERROR: ', err))
      // })
      })
      // .catch(err => res.json(err))
  });
};