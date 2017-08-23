const getConfig = require('./index');

const config = getConfig({
    development: {
        bypass: false,
        secret: "realponto"
    },

    test: {
        bypass: true,
        secret: "realponto"
    },

    production: {
        bypass: false,
        secret: "realponto"
    }
});

module.exports = config;