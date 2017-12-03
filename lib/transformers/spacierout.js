module.exports = text => {
  var result = ''
  var index = 0
  var exploded = text.split('')

  exploded.forEach(w => {
    result += w + ' '.repeat(++index)
  })
  return result.trim()
}
