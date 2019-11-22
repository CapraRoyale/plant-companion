'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'plants',
            'misc',
            Sequelize.STRING)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'plants',
            'misc')
    }
}