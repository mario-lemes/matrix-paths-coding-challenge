require('../app');

// require('../bin/www');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);

// Run before performing all the test suites
before(async () => {
  console.log('\nRUNNING TESTS: \n');
});

after(done => {
  done();
});
