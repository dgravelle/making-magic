var expect = require('expect.js');
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://localhost/mm_test_db', {logging: false });

describe('models/user', () => {
    var newUser = {
        email: 'new@user.com'
    }

    beforeEach(() => {
        return require('../models').sequelize.sync({ force: true });
    });

    beforeEach(() => {
        this.User = require('../models').User;
    });

    it('should find the user model', () => {
        expect(this.User).to.be.ok();
    });

    it('should create a user and find all users', (done) => {
        this.User.create(newUser).then(res => {
            this.User.findAll().then(res => {
                console.log('findall res: ', res);
                expect(res.length).to.equal(1);
                done();
            })
        })
        .catch(err => {
            console.log(err);
        });
    });
});
