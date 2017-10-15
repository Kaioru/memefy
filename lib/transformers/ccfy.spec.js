const test = require('tape');
const ccfy = require('./ccfy');

test('ccfy should be a function', (assert) => {
  assert.equal(typeof ccfy, 'function');
  assert.end();
});

test('ccfy output test', (assert) => {
  assert.equal(ccfy('thick'), 'thicc');
  assert.equal(ccfy('aesthetic'), 'aestheticc');
  assert.end();
});
