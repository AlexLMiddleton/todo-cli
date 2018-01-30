const store = require('../lib/store');
const { map, curry } = require('ramda');
const ls = require('./ls');

module.exports = function(itemToCheckId) {
  // converts things into a JSON string, maps them, gets the ID #, and flips the "completed" part to the opposite when it's selected
  store.set(
    map(
      todo =>
        todo.id === Number(itemToCheckId)
          ? { ...todo, completed: !todo.completed }
          : todo,
      store.get()
    )
  );

  return ls();
};
