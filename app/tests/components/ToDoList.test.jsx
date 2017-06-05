var React = require('react')
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var ToDoList = require('ToDoList');
import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';
// var ToDo = require('ToDo');

describe('ToDoList component', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render 1 todo component for each todo item', () => {
    var todos = [{
      id:1,
      text: 'do something',
      completed: false,
      completedAt: undefined,
      createdAt: 10000
    },
    {
      id: 2,
      text: 'do dat',
      completed: false,
      completedAt: undefined,
      createdAt: 99999
    }];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedToDo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empy message if no todos', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
