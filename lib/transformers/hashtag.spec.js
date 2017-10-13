const test = require('tape');
const hashtag = require('./hashtag');

test('hashtag should be a function', (assert) => {
  assert.equal(typeof hashtag, 'function');
  assert.end();
});

test('hashtag output test', (assert) => {
  assert.equal(hashtag('memes'), '#memes');
  assert.equal(hashtag('no filter'), '#no #filter');
  assert.end();
});
