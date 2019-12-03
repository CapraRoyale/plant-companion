// Creating our Garden model
module.exports = function(sequelize, DataTypes) {
  var Garden = sequelize.define("Garden", {

  });
  // Creating a custom method for our Garden model. This will check if an unhashed password entered by the Garden can be compared to the hashed password stored in our database

  Garden.associate = function(models) {
    // When a Garden is deleted, delete any associated tasks
    Garden.belongsToMany(models.plant, {
      onDelete: "cascade",
      through: 'userPlants',
    });
    Garden.belongsTo(models.User);
  };

  return Garden;
};