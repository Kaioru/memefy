module.exports = text => {
  var result = ''
  var exploded = text.split(' ')

  exploded.forEach(w => {
    result += "#" + w + " "
  })
  return result.substring(0, result.length - 1)
}
