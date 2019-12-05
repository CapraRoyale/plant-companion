'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            // look for table name 'plants' and add a column 'misc'
            'plants',
            'misc',
            Sequelize.STRING)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            // look for table name 'plants' and remove the column 'misc'
            'plants',
            'misc')
    }
}