const test = require('tape');
const spaceout = require('./spaceout');

test('spaceout should be a function', (assert) => {
  assert.equal(typeof spaceout, 'function');
  assert.end();
});

test('spaceout output test', (assert) => {
  assert.equal(spaceout('memes'), 'm e m e s');
  assert.end();
});
