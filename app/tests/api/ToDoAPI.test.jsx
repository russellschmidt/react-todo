var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
  beforeEach( () => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: "test 1",
        completed: true
      },
      {
        id: 1111,
        text: "test 2",
        completed: false
      },
      {
        id: 123,
        text: "test 3",
        completed: false
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = ToDoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(3);
    });

    it('should return 2 uncompleted items if showCompleted is false', () => {
      var filteredTodos = ToDoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toEqual(2);
    });

    it('should sort by completed status', () => {
      var filteredTodos = ToDoAPI.filterTodos(todos, true, '');
       expect(filteredTodos[0].completed).toEqual(false);
    });

    it('should filter todos by search text', () => {
      var filteredTodos = ToDoAPI.filterTodos(todos, true, '1');
       expect(filteredTodos.length).toEqual(1);
    });

    it('should return all todos if search text was empty', () => {
      var filteredTodos = ToDoAPI.filterTodos(todos, true, '');
       expect(filteredTodos.length).toEqual(3);
    });
  });
});
