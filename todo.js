const add = require('./cmds/add');
const ls = require('./cmds/ls');
const check = require('./cmds/check');
const rm = require('./cmds/rm');
const init = require('./cmds/init');

const [execPath, jsPath, cmd, ...rest] = process.argv;

const { head } = require('ramda');
console.log(handleCmd(cmd));

function handleCmd(cmd) {
  switch (cmd) {
    case 'init':
      return init();
    case 'check':
      return check(head(rest));
    case 'rm':
      return rm(head(rest));
    case 'add':
      return add(rest);
    case 'ls':
      return ls();
    case 'help':
      return 'help is coming soon';
    default:
      return 'help is coming soon';
  }
}
