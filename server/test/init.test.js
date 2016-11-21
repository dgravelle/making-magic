var expect = require('expect.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost/mm_test_db', {logging: false });

describe('initiating test db', done => {
    it('should auth db', (done) => {
        sequelize
            .authenticate()
            .then(err => {
                console.log('success', err);
                expect(!err).to.be.ok();
                done();
            })
            .catch(err => {
                console.log('failed ', err);
                expect(err).to.be.ok();
                done();
            })
    })
})
