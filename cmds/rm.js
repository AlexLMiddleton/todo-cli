const store = require('../lib/store');
const { reject } = require('ramda');

const ls = require('./ls');

module.exports = function(id) {
  store.set(reject(todo => todo.id === Number(id), store.get()));

  return ls();
};
