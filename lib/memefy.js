const memefy = {}

memefy.transformers = {}
memefy.transformers.ccfy = require('./transformers/ccfy')
memefy.transformers.spaceout = require('./transformers/spaceout')
memefy.transformers.escalate = require('./transformers/escalate')
memefy.transformers.leet = require('./transformers/leet')

for (var transformer in memefy.transformers) {
  memefy[transformer] = memefy.transformers[transformer]
}

memefy.maps = {}
memefy.maps.alternating = require('./maps/alternating')
memefy.maps.alternating2 = require('./maps/alternating2')
memefy.maps.stoz = require('./maps/stoz')

var sequencer = function sequencer(map, str) {
  var exploded = str.split(""),
    i = 0
  exploded = exploded.map(map)
  return exploded.join("")
}

for (var map in memefy.maps) {
  (function(map) {
    memefy[map] = function(str) {
      return sequencer(memefy.maps[map], str)
    }
  })(map)
}

module.exports = memefy
