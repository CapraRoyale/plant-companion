const db = require("../db/models");

module.exports = function (app) {

  // Route for creating a user
  app.post("/api/user", function (req, res) {
    db.User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(401).json(err))
  });

  // Route for searching for a plant
  app.get("/api/plant/:name", (req, res) => {
    db.plant.findAll({ where: { name: req.params.name } })
      .then(results => res.json(results))
      .catch(err => res.status(401).json(err))
  });

  // Route for fetching a users garden
  app.get("/api/garden/:id", (req, res) => {
    db.Garden.findOne({
      where: { id: req.params.id },
      include: {
        model: db.plant,
        through: 'userPlants'
      }
    })
      .then(results => res.json(results))
      .catch(err => res.status(401).json(err))
  });

  // Route for adding a plant to a garden
  app.post("/api/garden", (req, res) => {
    console.log(req.body)
    db.Garden.findById(3)
      .then(dbGarden => dbGarden.addPlant(req.body.plantId))
      .then((result) => res.json(result))
      .catch(err => res.status(401).json(err))
  });

  app.delete('/api/garden', (req, res) => {
    console.log(req.body)
    db.Garden.findById(3)
      .then(dbGarden => dbGarden.deletePlant(req.body.plantId))
      .then((result) => res.json(result))
      .catch(err => res.status(401).json(err))
  });
  
  app.post("/garden", (req, res) => {
    console.log(req.body)
    db.Garden.create({ UserId: 1})
      .then((dbGarden) => res.json(dbGarden))
      .catch(err => console.log(err))
  });

  // route for getting all plants
  app.get('/api/plant', (req, res) => {
    db.plant.findAll({})
      .then(results => res.json(results))
      .catch(err => res.status(401).json(err))
  });
};

