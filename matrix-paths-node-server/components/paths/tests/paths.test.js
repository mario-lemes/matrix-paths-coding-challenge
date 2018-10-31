const app = require('../../../app');
const chai = require('chai');
require('chai-http');

const axios = require('axios');
const https = require('https');

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

    xit('should get a specific path based on a specific matrix #3', async () => {
      try {
        /*const resPath = await axios.get(
          'https://coding-challenge.mariolemesmedina.me/api/v1/paths?file=map.txt',
          { rejectUnauthorized: false },
        );

        // At instance level
        const instance = axios.create({
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        });
        instance.get(
          'https://coding-challenge.mariolemesmedina.me/api/v1/paths?file=map.txt',
        );*/

        // At request level
        const agent = new https.Agent({
          rejectUnauthorized: false,
        });
        const resPath = await axios.get(
          'https://coding-challenge.mariolemesmedina.me/api/v1/paths?file=map.txt',
          {
            httpsAgent: agent,
            timeout: 180000, // Let's say you want to wait at least 180 seconds
          },
        );

        console.log(resPath);

        resPath.body.should.be.an('object');
        resPath.body.should.have.property('ok', true);
        resPath.body.should.have.property('result');
        resPath.body.result.should.have.property('path');
        resPath.body.result.should.have.property('pathLength');
        resPath.body.result.should.have.property('steepLength');
      } catch (err) {
        console.log(err.response);
        throw err;
      }
    });
  });
});
