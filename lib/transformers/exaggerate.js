module.exports = text => {
  var result = ''
  var exploded = text.split(' ')
  var suffix = [
    'ed',
    'er',
    'est'
  ]
  exploded.forEach(w => {
    for (var i in suffix) {
      var s = suffix[i]
      if (w.endsWith(s)) w += s
    }
    result += w + ' '
  })
  return result.substring(0, result.length - 1)
}
