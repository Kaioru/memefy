const memefy = require('../lib/memefy')
const commander = require('commander')
const pkg = require('../package.json')

commander
  .version(pkg.version)

commander.command('alternating').action(text => console.log(memefy.alternating(text)))
commander.command('alternating2').action(text => console.log(memefy.alternating2(text)))
commander.command('stoz').action(text => console.log(memefy.stoz(text)))

commander.command('ccfy').action(text => console.log(memefy.ccfy(text)))
commander.command('escalate').action(text => console.log(memefy.escalate(text)))
commander.command('leet').action(text => console.log(memefy.leet(text)))
commander.command('spaceout').action(text => console.log(memefy.spaceout(text)))

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}

commander.parse(process.argv);
