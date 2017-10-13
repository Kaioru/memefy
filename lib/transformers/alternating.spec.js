const test = require('tape');
const alternating = require('./alternating');

test('alternating should be a function', (assert) => {
  assert.equal(typeof alternating, 'function');
  assert.end();
});

test('alternating output test', (assert) => {
  assert.equal(alternating('memes'), 'mEmEs');
  assert.equal(alternating('m e m e s'), 'm E m E s');
  assert.end();
});
