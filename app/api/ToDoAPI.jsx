var $ = require('jquery');

module.exports = {

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
