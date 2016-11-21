var expect = require('expect.js');
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://localhost/mm_test_db', {logging: false });

describe('models/user', () => {
    var newUser = {
        email: 'new@user.com'
    }

    var newDeck = {
        
    }

    beforeEach(() => {
        return require('../../models').sequelize.sync({ force: true });
    });

    beforeEach(() => {
        this.User = require('../../models').User;
    });

    it('should find the user model', () => {
        expect(this.User).to.be.ok();
    });

    it('should create a user and find all users', (done) => {
        this.User.create(newUser).then(res => {
            this.User.findAll().then(res => {
                expect(res.length).to.equal(1);
                done();
            })
        })
        .catch(err => {
            console.log(err);
        });
    });

    it('should create a user and a deck and be able to find deck by user', () => {
        this.User.create(newUser).then(res => {
            this.Deck.create({})
        })
    })
});
