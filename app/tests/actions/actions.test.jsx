import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {fb} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate SET_SEARCH_TEXT action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate ADD_TODO action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 123456,
        text: 'Some garbage',
        createdAt: 9876543,
        completed: false
      }
    };

    var res = actions.addToDo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'my todo item';

    store.dispatch(actions.startAddToDo(todoText)).then( () => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done());
  });

  it('should generate ADD_TODOS action', () => {
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
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate TOGGLE_SHOW_COMPLETED action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate UPDATE_TODO action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: { completed: false }
    };

    var res = actions.updateToDo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testToDoRef;

    beforeEach((done) => {
      var todosRef = fb.child('todos');

      todosRef.remove().then(() => {
        testToDoRef = fb.child('todos').push();
        return testToDoRef.set({
          text: 'something to do',
          completed: false,
          createdAt: 123456789
        })
      })
      .then( () => done() )
      .catch(done)
    });

    afterEach((done) => {
      testToDoRef.remove().then(() => done());
    });


    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleToDo(testToDoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testToDoRef.key,
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done())
    });
    
    it('should populate todos and dispatch ADD_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startAddToDos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toEqual({
          type: 'ADD_TODO'
        });

        expect(mockActions[0].length).toEqual(1);

        expect(mockActions[0].todos[0].text).toEqual(testToDoRef.text);

        done();
      }, done())
    });
  })
})
