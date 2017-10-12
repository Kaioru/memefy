module.exports = (letter, i, exploded) => {
  return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
};
