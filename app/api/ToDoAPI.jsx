var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)); // convert array to string
      return todos; // this way a failed call returns undefined if call fails
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos); // try to convert strings back to array OR object
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []; // fun ternary operator
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;
    var search = searchText.toLowerCase();

    // filter by show completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    // filter by search text
    filteredTodos = filteredTodos.filter((todo) => {
      return search.length === 0 || todo.text.toLowerCase().indexOf(search) > -1;
    });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
