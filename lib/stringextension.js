var memefy = require('./memefy')

module.exports = () => {
  var addProperty = (name, func) => {
    String.prototype.__defineGetter__(name, func)
  }

  addProperty('alternating', () => memefy.alternating(this))
  addProperty('alternating2', () => memefy.alternating2(this))
  addProperty('stoz', () => memefy.stoz(this))

  addProperty('ccfy', () => memefy.ccfy(this))
  addProperty('escalate', () => memefy.escalate(this))
  addProperty('leet', () => memefy.leet(this))
  addProperty('spaceout', () => memefy.spaceout(this))
}
