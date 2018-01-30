#todo-cli-alexmiddleton

A command line interface used to track todo items in a software project.  Use the CLI to create todo items, list todo items, mark a todo item as complete, and remove a todo item.

## Installation

```
npm i todo-cli-alexmiddleton -g
```

## Usage

```
mkdir my-project
cd my-project
todo init
todo add read a book
todo add take a nap
todo add run 5 miles
todo ls
```

## Commands

### Initialize todo List

Creates a **todos.json** file within the current directory.  Use when you wish to start a new list.  If **todos.json** already exists, `todo init` will not do anything.

### Add a todo

Adds a todo item to your list of todos.

```
todo add <some text describing the todo item>
```

**Example**

```
todo add feed the cat
```

### List todos

List all todos in your todo list.

```
todo ls
```

### Mark todo as complete

Toggle a todo item as completed.

```
todo check <TODO ID GOES HERE>
```

**Example**

Marks the 2nd todo item as complete or incomplete by providing the specific todo id.
```
todo check 2
```

### Remove todo

Deletes a specific todo by providing the todo id.

```
todo rm <TODO ID GOES HERE>
```

**Example**

```
todo rm 1
```

## Future Features

- Show percent of todos completed
- Assign a todo to a person
- Record the date and the time completed
- Export the todo items to github as issues
- Export to trello as a list
