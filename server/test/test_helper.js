const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect('mongodb://localhost/food_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', error);
        });
});

beforeEach(done => {
    const { users } = mongoose.connection.collections;
    //users.drop().then(() => done());
    done();
});
