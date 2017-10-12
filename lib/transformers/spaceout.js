module.exports = text => {
  var result = ''
  var text = text.split('')

  text.forEach(c => result += c + ' ')
  return result.substring(0, result.length - 1)
}
