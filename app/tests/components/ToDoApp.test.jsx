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
  });

  it('should toggle *completed value when handleToggle is called', () => {
    var toDoData = {
      id: 11,
      text: 'test features',
      completed: false
    };

    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: [toDoData]});

    expect(toDoApp.state.todos[0].completed).toBe(false);
    toDoApp.handleToggle(toDoData.id);
    expect(toDoApp.state.todos[0].completed).toBe(true); 
  });
});
