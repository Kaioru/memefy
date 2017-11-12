(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.memefy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const memefy = require('./memefy')
module.exports = memefy;

},{"./memefy":3}],2:[function(require,module,exports){
module.exports = (letter, i, exploded) => {
  return letter === 's' ? 'z' : letter
};

},{}],3:[function(require,module,exports){
const memefy = {}

memefy.transformers = {}
memefy.transformers.ccfy = require('./transformers/ccfy')
memefy.transformers.spaceout = require('./transformers/spaceout')
memefy.transformers.escalate = require('./transformers/escalate')
memefy.transformers.exaggerate = require('./transformers/exaggerate')
memefy.transformers.leet = require('./transformers/leet')
memefy.transformers.hashtag = require('./transformers/hashtag')
memefy.transformers.alternating = require('./transformers/alternating')
memefy.transformers.alternating2 = require('./transformers/alternating2')

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

},{"./maps/stoz":2,"./transformers/alternating":4,"./transformers/alternating2":5,"./transformers/ccfy":6,"./transformers/escalate":7,"./transformers/exaggerate":8,"./transformers/hashtag":9,"./transformers/leet":10,"./transformers/spaceout":11}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
module.exports = text => {
  var changedLast = false
  return text.split("").map(letter => {
    if (letter === ' ') {
      return letter
    }
    changedLast = !changedLast
    return changedLast ? letter.toUpperCase() : letter.toLowerCase()
  }).join("")
}

},{}],6:[function(require,module,exports){
module.exports = text => {
  var result = ''
  var exploded = text.split(' ')

  exploded.forEach(w => {
    if (w.length > 1 && !w.endsWith('h')) {
      var m = 2
      if (w.endsWith('s')) m = 3
      if (w.endsWith('est')) m = 5
      if (w.endsWith('en') || w.endsWith('er')) m = 4
      var c = w[w.length - m]
      if (c === 'c') {
        result += w.substring(0, (w.length - m) + 1) + 'c' + w.substring((w.length - m) + 2, w.length) + ' '
        return
      }
    }
    result += w + (w.endsWith('c') ? 'c ' : ' ')
  })
  return result.substring(0, result.length - 1)
}

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
module.exports = text => {
  var result = ''
  var exploded = text.split(' ')

  exploded.forEach(w => {
    result += "#" + w + " "
  })
  return result.substring(0, result.length - 1)
}

},{}],10:[function(require,module,exports){
const leet = require('leet')

module.exports = text => {
  return leet.convert(text)
}

},{"leet":12}],11:[function(require,module,exports){
module.exports = text => {
  return text.split('').join(' ')
}

},{}],12:[function(require,module,exports){
(function (process){


(function () {

    "use strict";

    /**
     * Convert regular and boring text into 1337 text.
     *
     * @author Mathias Novas <novasism@gmail.com>, Michael Enger <mike@thelonelycoder.com>
     * @license IDGAF
     */
    var leet = {

        /**
         * Map of conversions.
         *
         * @var object
         */
        characterMap: {
            'a': '4',
            'b': '8',
            'e': '3',
            'g': '6',
            'l': '1',
            'o': '0',
            's': '5',
            't': '7',
            'æ': '43',
            'ø': '03',
            'å': '44'
        },

        /**
         * Convert a string to 1337 based on the character map.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        convert: function (string) {
            var letter;
            string = string || '';
            string = string.replace(/cks/g, 'x');

            for (letter in leet.characterMap) {
                if (leet.characterMap.hasOwnProperty(letter)) {
                    string = string.replace(new RegExp(letter, 'g'), leet.characterMap[letter]);
                }
            }

            return string.toUpperCase();
        },

        /**
         * Test character to see if it's a vovel or special (or neither).
         *
         * @param string character Character to test
         * @return mixed
         */
        test: function (character) {
            var vowel = /^[4I30U]$/i,
                special = /^[!?.,\-]$/i,
                type = false;

            if (vowel.test(character)) {
                type = 'vowel';
            } else if (special.test(character)) {
                type = 'special';
            }

            return type;
        },

        /**
         * Converts the string to 1337 along with special rules.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        output: function (string) {
            string = leet.convert(string);
            if ('' === string) {
                return string;
            }

            var last = string[string.length - 1],
                type = leet.test(last),
                result;

            if (type === 'special') {
                result = string.substr(0, string.length - 1) + 'ZORZ' + last;
            } else if (type === 'vowel') {
                result = string + 'XOR';
            } else {
                result = string + 'ZORZ';
            }

            return result;
        }
    };

    if (/(^|\/)leet(\.js)?$/.test(process.argv[1])) {
        if (undefined !== process.argv[2]) {
            console.log(leet.output(process.argv[2]));
        } else {
            console.error('Usage: leet.js <string>');
        }
    } else if (undefined !== exports) {
        exports.convert = leet.output;
    } else {
        console.error('I don\'t know what to do');
    }

}());

}).call(this,require('_process'))

},{"_process":13}],13:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1])(1)
});

//# sourceMappingURL=memefy.js.map
