const memefy = {}

memefy.transformers = {}
memefy.transformers.ccfy = require('./transformers/ccfy')
memefy.transformers.spaceout = require('./transformers/spaceout')
memefy.transformers.spacierout = require('./transformers/spacierout')
memefy.transformers.escalate = require('./transformers/escalate')
memefy.transformers.exaggerate = require('./transformers/exaggerate')
memefy.transformers.leet = require('./transformers/leet')
memefy.transformers.hashtag = require('./transformers/hashtag')
memefy.transformers.alternating = require('./transformers/alternating')
memefy.transformers.alternating2 = require('./transformers/alternating2')
memefy.transformers.typoglycemia = require('./transformers/typoglycemia')

for (var transformer in memefy.transformers) {
  memefy[transformer] = memefy.transformers[transformer]
}

memefy.maps = {}
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
