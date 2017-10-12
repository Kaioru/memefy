module.exports = text => {
  var result = ''
  var exploded = text.split(' ')

  exploded.forEach(w => {
    if (w.length > 1 && !w.endsWith('h')) {
      var m = 2
      if (w.endsWith('est')) m = 5
      if (w.endsWith('en') || w.endsWith('er')) m = 4
      var c = w[w.length - m]
      if (c === 'c') {
        result += w.substring(0, (w.length - m) + 1) + 'c' + w.substring((w.length - m) + 2, w.length) + ' '
        result += result.endsWith('c') ? 'c' : result.endsWith('C') ? 'C' : ''
        return
      }
    }
    result += w.endsWith('c') ? w + "c " : w.endsWith('C') ? w + "C " : w + " "
  })
  return result.substring(0, result.length - 1)
}
