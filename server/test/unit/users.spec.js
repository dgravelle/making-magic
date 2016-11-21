var expect = require('expect.js');
var Sequelize = require('sequelize')
var config = require('../../config/config').test;
var sequelize = new Sequelize(config.url, { logging: true });

describe('models/user', () => {
    var newUser = {
        email: 'new@user.com'
    }

    var testDeck = {
        title: 'testDeck',
        format: 'EDH',
        description: 'This here is a test deck ya know',
        colors: ['g ',' w']
    }
    //
    beforeEach(() => {
        return require('../../models').sequelize.sync({ force: true });
    });

    beforeEach(() => {
        this.User = require('../../models').User;
        this.Deck = require('../../models').Deck;
    });

    it('should find the user model', () => {
        // console.log(this.User);
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

    it('should create a user and a deck and be able to find deck by user', done => {
        this.User.create(newUser).then(res => {
            this.Deck.create(testDeck).then(deck => {
                expect(deck).to.be.ok();
                done();
            })
            .catch(err => {
                console.log(err);
                expect(!err).to.be.ok();
                done()
            })
        }).bind(this)
        .catch(error => {
            console.log(error);
            expect(!error).to.be.ok();
            done()
        })
    })
});
