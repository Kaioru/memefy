module.exports = text => {
  var result = ''
  var exploded = text.split('')
  var min = text.length < 5 ? 1 : 3 + (text.length - text.replace(' ', '').length)
  var escalate = [min, min + 1][
    [Math.floor(Math.random() * 2)]
  ]

  for (i in text) {
    result += i < escalate ? text[i].toLowerCase() : text[i].toUpperCase()
  }
  return result
}
