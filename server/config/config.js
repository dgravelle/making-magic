var path = require('path');

module.exports = {
    development : {
        url : 'postgres://dgravelle:password@localhost:5432/making_magic',
        dialect: 'postgrest'
        // seedPath: path.resolve(__dirname, './seeders')
    },
    production : {
        url : process.env.DATABASE_URL,
        dialect: 'postgrest'
    },
    staging : {
        url : process.env.DATABASE_URL,
        dialect: 'postgrest'
    },
    test : {
        url : process.env.DATABASE_URL || 'postgres://dgravelle:password@localhost:5432/mm_test_db',
        dialect: 'postgrest'
    }
}
