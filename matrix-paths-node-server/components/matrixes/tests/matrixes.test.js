const app = require('../../../app');
const chai = require('chai');
require('chai-http');

chai.should();

// =====================================
// MATRIXES TEST =======================
// =====================================

describe('/matrixes', () => {
  // Global
  before(async () => {});

  describe('POST:', () => {
    it('should upload a file', async () => {
      try {
        const resMatrix = await chai
          .request(app)
          .post('/api/v1/matrixes')
          .attach('file', 'tests/filesForTesting/4x4.txt', '4x4.txt');

        resMatrix.body.should.be.an('object');
        resMatrix.body.should.have.property('ok', true);
        resMatrix.body.should.have.property('file');
        resMatrix.body.file.should.have.property('originalname', '4x4.txt');
      } catch (err) {
        throw err;
      }
    });
  });
});
