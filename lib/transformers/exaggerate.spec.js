const test = require('tape');
const exaggerate = require('./exaggerate');

test('exaggerate should be a function', (assert) => {
  assert.equal(typeof exaggerate, 'function');
  assert.end();
});

test('exaggerate output test', (assert) => {
  assert.equal(exaggerate('best'), 'bestest');
  assert.equal(exaggerate('better'), 'betterer');
  assert.end();
});
