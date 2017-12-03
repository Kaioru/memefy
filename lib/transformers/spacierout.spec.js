const test = require('tape');
const spacierout = require('./spacierout');

test('spacierout should be a function', (assert) => {
  assert.equal(typeof spacierout, 'function');
  assert.end();
});

test('spacierout output test', (assert) => {
  assert.equal(spacierout('meme'), 'm e  m   e');
  assert.equal(spacierout('mania'), 'm a  n   i    a')
  assert.end();
});
