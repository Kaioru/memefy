#!/usr/bin/env node

const memefy = require('../lib/memefy')
const commander = require('commander')
const pkg = require('../package.json')

commander
  .version(pkg.version)

commander.command('alternating <text>').action(text => console.log(memefy.alternating(text)))
commander.command('alternating2 <text>').action(text => console.log(memefy.alternating2(text)))
commander.command('stoz <text>').action(text => console.log(memefy.stoz(text)))

commander.command('ccfy <text>').action(text => console.log(memefy.ccfy(text)))
commander.command('escalate <text>').action(text => console.log(memefy.escalate(text)))
commander.command('leet <text>').action(text => console.log(memefy.leet(text)))
commander.command('spaceout <text>').action(text => console.log(memefy.spaceout(text)))

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}

commander.parse(process.argv);
