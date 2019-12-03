'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const plant = sequelize.define('plant', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        misc: DataTypes.STRING
    }, {});
    plant.associate = function (models) {
        // associations can be defined here
        plant.belongsToMany(models.plant, { as: 'Friend', through: 'good_comp', foreignKey: "helpee", otherkey: "helper" });
        plant.belongsToMany(models.plant, { as: 'Foe', through: 'bad_comp', foreignKey: "hinderee", otherKey: "hinderer" });
        plant.belongsToMany(models.my_garden, {through: 'user'});
    };
    return plant;
};