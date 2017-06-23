var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should set completed to opposite boolean value', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'this is a to do',
          completed: false,
          createdAt: 98765432
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        text: 'Walk the cat',
        id: 123,
        completed: true,
        createdAt: 111111,
        completedAt: 555555
      }];
      var updates = {
        completed: false,
        completedAt: null
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing Todos', () => {
      var todos = [{
        id: '1234',
        text: 'some text',
        completed: false,
        completedAt: undefined,
        createdAt: 99999
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should delete todos array on LOGOUT', () => {
      var todos = [{
        id: '1234',
        text: 'some text',
        completed: false,
        completedAt: undefined,
        createdAt: 99999
      }];
      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res).toEqual([]);
    });
  });

  describe('authReducer', () => {
    it('should set auth on login', () => {
      const action = {
        type: 'LOGIN',
        uid: '12345abcde'
      };

      const res = reducers.authReducer(undefined, df(action));
      expect(res).toEqual({uid: action.uid});
    });

    it('should remove auth on logout', () => {
      const authData = {
        uid: 'abc123'
      }
      const action = {
        type: 'LOGOUT'
      };

      const res = reducers.authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });
  });

});
