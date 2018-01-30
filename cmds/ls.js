const store = require('../lib/store');
const { map, join, compose, filter, propEq, reduce, add } = require('ramda');

module.exports = render;
// compose function that creates a new line for each entry, then maps an "X" into the brackets if something is completed
const list = compose(join('\n  '), map(li));

const remaining = compose(
  reduce(add(1), 0),
  filter(propEq('completed', false))
);
// Receives data from add.js file's createTodo/newTodo function.
function li(todo) {
  return `[${todo.completed ? 'X' : ' '}] - #${todo.id}: ${
    todo.text
  } -- assign to: ${todo.assignTo}`;
}

function render() {
  const todos = store.get();

  const percentCompleted = (
    (todos.length - remaining(todos)) /
    todos.length *
    100
  ).toFixed(2);

  return `
  My To Do list
  ---------------------------------------
  ${list(todos)}
  ---------------------------------------
  ${remaining(todos)} remaining
  ---------------------------------------
  Status: ${percentCompleted}% completed
  `;
}
