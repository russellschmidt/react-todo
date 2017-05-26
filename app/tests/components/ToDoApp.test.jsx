var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = "this is a to do item test test 123";
    var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    todoApp.setState({todos: []}); //empty the array
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle *completed value when handleToggle is called', () => {
    var toDoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: [toDoData]});

    expect(toDoApp.state.todos[0].completed).toBe(false);
    toDoApp.handleToggle(toDoData.id);
    expect(toDoApp.state.todos[0].completed).toBe(true);

    expect(toDoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle *completedAt value when handleToggle from completed to incomplete', () => {
    var toDoData = {
      id: 666,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 1000
    };

    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: [toDoData]});

    expect(toDoApp.state.todos[0].completed).toBe(true);
    toDoApp.handleToggle(toDoData.id);
    expect(toDoApp.state.todos[0].completed).toBe(false);

    expect(toDoApp.state.todos[0].completedAt).toNotBeA('number');
  });
});
