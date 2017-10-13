const test = require('tape');
const memefy = require('../memefy');

test('stoz should be a function', (assert) => {
  assert.equal(typeof memefy.stoz, 'function');
  assert.end();
});

test('stoz output test', (assert) => {
  assert.equal(memefy.stoz('memes'), 'memez');
  assert.end();
});
