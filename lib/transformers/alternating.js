module.exports = text => {
  var changedLast = true
  return text.split("").map(letter => {
    if (letter === ' ') {
      return letter
    }
    changedLast = !changedLast
    return changedLast ? letter.toUpperCase() : letter.toLowerCase()
  }).join("")
}
