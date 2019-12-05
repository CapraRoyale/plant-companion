module.exports = (sequelize, DataTypes) => {
    const plant = sequelize.define('plant', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        misc: DataTypes.STRING
    }, {});
    plant.associate = function (models) {
        // associations can be defined here
<<<<<<< HEAD
        plant.belongsToMany(models.plant, { as: 'Friend', through: 'good_comp', foreignKey: "helpee", otherkey: "helper" });
        plant.belongsToMany(models.plant, { as: 'Foe', through: 'bad_comp', foreignKey: "hinderee", otherKey: "hinderer" });
        plant.belongsToMany(models.my_garden, {through: 'user'});
=======
        plant.belongsToMany(plant, { as: 'Friend', through: 'good_comp', foreignKey: "helpee", otherkey: "helper" });
        plant.belongsToMany(plant, { as: 'Foe', through: 'bad_comp', foreignKey: "hinderee", otherKey: "hinderer" });
        plant.belongsToMany(models.Garden, { through: 'userPlants' });
>>>>>>> 5696fd778d99d75436cb55b778be86b59d9a44ac
    };
    return plant;
};