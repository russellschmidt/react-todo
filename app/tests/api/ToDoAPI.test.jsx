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
});
