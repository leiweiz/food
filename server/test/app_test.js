const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {
    it('handles a GET requests to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'works');
                done();
            });
    });

});
