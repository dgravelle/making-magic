var expect = require('expect.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize("postgres://localhost/test_db", {logging: false});
var models = require('../models')
var User = models.User;

var userService = require('../db/userService')(sequelize);

describe('user service', () => {
    var mockResponse = callback => { return { send: callback }; }
    var newUser = {
        email: 'new@user.com'
    }

    beforeEach(done => {
        sequelize.sync({ force: true }).then(() => {
            done();
        });
    })

    it('should find created users', done => {
        User.create(newUser).then(res => {
            userService.getAll({}, mockResponse(data => {
                expect(data[1].email).to.eql(newUser.email)
                done();
            }))
        })
    })
})
