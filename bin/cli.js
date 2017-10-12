#!/usr/bin/env node

const memefy = require('../lib/memefy')
const commander = require('commander')
const pkg = require('../package.json')

commander
  .version(pkg.version)

for (var transformer in memefy.transformers) {
  commander.command(`${transformer} <text>`).action(text => console.log(memefy[transformer](text)))
}
for (var map in memefy.maps) {
  commander.command(`${map} <text>`).action(text => console.log(memefy[map](text)))
}

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}

commander.parse(process.argv);
