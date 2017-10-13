#!/usr/bin/env node

const memefy = require('../lib/memefy')
const commander = require('commander')
const pkg = require('../package.json')

commander
  .version(pkg.version)

Object.keys(memefy.transformers).forEach(function(key) {
  commander.command(`${key} <text>`).action(text => console.log(memefy[key](text)))
})

Object.keys(memefy.maps).forEach(function(key) {
  commander.command(`${key} <text>`).action(text => console.log(memefy[key](text)))
})

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}

commander.parse(process.argv);
