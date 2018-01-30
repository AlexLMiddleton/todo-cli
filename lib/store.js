const fs = require('fs');
module.exports = { get, set };

// Grab the contents of a file named "todos.json", parse it into a JSON object and return it from the function
// It's going to live in the current directory of where our app is running
function get() {
  return JSON.parse(fs.readFileSync('./todos.json', 'utf-8'));
}

// Take the data (a JSON object) and transform it to text and then write the text/JSON to the file system as todos.json
function set(data) {
  fs.writeFileSync('./todos.json', JSON.stringify(data));
}
