'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_garden = sequelize.define('my_garden', {
    userID: DataTypes.STRING,
    plantID: DataTypes.STRING
  }, {});
  my_garden.associate = function(models) {
    // associations can be defined here
  };
  return my_garden;
};