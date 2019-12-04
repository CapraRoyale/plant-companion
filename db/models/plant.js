module.exports = (sequelize, DataTypes) => {
    const plant = sequelize.define('plant', {
        name: DataTypes.STRING,
        desc: DataTypes.STRING,
        misc: DataTypes.STRING
    }, {});
    plant.associate = function (models) {
        // associations can be defined here
        plant.belongsToMany(plant, { as: 'Friend', through: 'good_comp', foreignKey: "helpee", otherkey: "helper" });
        plant.belongsToMany(plant, { as: 'Foe', through: 'bad_comp', foreignKey: "hinderee", otherKey: "hinderer" });
        plant.belongsToMany(models.Garden, { through: 'userPlants' });
    };
    return plant;
};