const assert = require('chai').assert;
const checkForNameless = require('../index.js');

describe('bounding box', () => {
  it('does a basic test in Japan', (done) => {
    checkForNameless({
      north: 31.488407,
      south: 31.421925,
      east: -128.765221,
      west: -129.156609,
      targetLang:'en'
    }, (err, response) => {
      assert.equal(err, null);
      assert.notInclude(response, 'static error');
      console.log(response);
      done();
    });
  }).timeout(10000);
});