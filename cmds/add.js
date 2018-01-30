const store = require('../lib/store');
const { reduce, trim } = require('ramda');
const ls = require('./ls');
const readline = require('readline');
var fs = require('fs');

module.exports = function(arrText) {
  // todos is the array of todos from the json file that we get() from the store.
  const todos = store.get();
  //
  // newTodo/createTodo take our input to the 'add' function, put it in an array, join the array together based on a space, and increment the ID
  const newTodo = createTodo(arrText, todos.length);
  //
  // newTodos appends the 'todo' we just 'added' and attaches it to the end of our full todo list
  const newTodos = append(newTodo, todos);
  //
  // store.set converts the newTodos from a JSON object to a JSON string object (puts the JSON on one line)
  store.set(newTodos);
  //
  // show us our list of todos again after we add the new one
  return ls();

  // creates the function that allows us to add the todo item into the array within memory.
  function append(value, arr) {
    return [...arr, value];
  }

  // creates the function that allows us to join words in an array together and separate them with our chosen separator
  // takes in the separator, our array of words, and the value (the ID number we're assigning for each thing we add)
  // basically, we're creating the function that will edit the added todo into something readable, and passes that into "createTodo"
  function join(sep, arrWords) {
    return reduce(
      function(acc, value) {
        return trim(`${acc}${sep}${value}`);
      },
      '',
      arrWords
    );
  }
  // creates the function that takes our newly-added array of words, joins them together with a space, sets completed to false
  // and increments the ID by 1
  function createTodo(arrText, id) {
    return {
      text: join(' ', arrText),
      completed: false,
      id: id + 1,
      assignTo: 'Alex'
    };
  }
};
