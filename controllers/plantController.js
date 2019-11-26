const db = require("../db/models");

// Defining methods for the plantController
module.exports = {
    findAll: function (req, res) {
        db.plant.find(req.query)
            .then(dbPlant => res.json(dbPlant))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.plant.findById(req.params.id)
            .then(dbPlant => res.json(dbPlant))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.plant.create(req.body)
            .then(dbPlant => res.json(dbPlant))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.plant.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbPlant => res.json(dbPlant))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.plant.findById(req.params.id)
            .then(dbPlant => dbPlant.remove())
            .then(dbPlant => res.json(dbPlant))
            .catch(err => res.status(422).json(err));
    }
};
