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
  }
};
