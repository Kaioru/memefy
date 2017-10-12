const test = require('tape');
const ccfy = require('./ccfy');

test('ccfy should be a function', (assert) => {
  assert.equal(typeof ccfy, 'function');
  assert.end();
});
