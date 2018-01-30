const fs = require('fs');

// We only want to create one JSON file to store our todos.  If they run "init" and no todos.json exists, create one (it contains an empty array).
// If a todos.json already exists, ignore their request.
module.exports = function() {
  if (!fs.existsSync('./todos.json')) {
    fs.writeFileSync('todos.json', '[]');
  }

  return 'todos.json initialized';
};
