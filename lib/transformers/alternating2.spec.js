const test = require('tape');
const alternating2 = require('./alternating2');

test('alternating2 should be a function', (assert) => {
  assert.equal(typeof alternating2, 'function');
  assert.end();
});

test('alternating2 output test', (assert) => {
  assert.equal(alternating2('memes'), 'MeMeS');
  assert.equal(alternating2('m e m e s'), 'M e M e S');
  assert.end();
});
