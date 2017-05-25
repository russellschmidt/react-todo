var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
  beforeEach( () => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 666,
        text: 'this is a todo test',
        completed: false
      }];

      ToDoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = { a: 'b'};

      ToDoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array for bad localStorage data', () => {
      var actualTodos = ToDoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 666,
        text: 'this is a todo test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos)); // just add explicitly to localStorage

      var actualTodos = ToDoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
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
