'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const good_comp = sequelize.define('good_comp', {
        helper: DataTypes.INTEGER,
        helpee: DataTypes.INTEGER,
        desc: DataTypes.STRING
    }, {});

    good_comp.associate = function(models) {
        // associations can be defined here
        good_comp.belongsTo(models.plant);
    };
    return good_comp;
};