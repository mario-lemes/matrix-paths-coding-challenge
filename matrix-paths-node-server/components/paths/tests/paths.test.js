const app = require('../../../app');
const chai = require('chai');
require('chai-http');

chai.should();

// ==================================
// PATHS TEST =======================
// ==================================

describe('/paths', () => {
  // Global
  before(async () => {});

  describe('GET:', () => {
    it('should get a specific path based on a specific matrix', async () => {
      try {
        const resPath = await chai
          .request(app)
          .get('/api/v1/paths?file=4x4.txt');

        resPath.body.should.be.an('object');
        resPath.body.should.have.property('ok', true);
        resPath.body.should.have.property('result');
        resPath.body.result.should.have.property('path');
        resPath.body.result.should.have.property('pathLength');
        resPath.body.result.should.have.property('steepLength');
      } catch (err) {
        throw err;
      }
    });

    xit('should get a specific path based on a specific matrix #2', async () => {
      try {
        const resPath = await chai
          .request(app)
          .get('/api/v1/paths?file=map.txt');

        resPath.body.should.be.an('object');
        resPath.body.should.have.property('ok', true);
        resPath.body.should.have.property('result');
        resPath.body.result.should.have.property('path');
        resPath.body.result.should.have.property('pathLength');
        resPath.body.result.should.have.property('steepLength');
      } catch (err) {
        throw err;
      }
    });
  });
});
