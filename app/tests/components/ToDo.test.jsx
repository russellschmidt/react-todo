var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';
import {ToDo} from 'ToDo';

describe('ToDo component', () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it("should dispatch UPDATE_TODO action on click", () => {
    var toDoData = {
      id: 69,
      text: "Write todo.test.jsx test",
      completed: true
    };
    var action = actions.startToggleToDo(toDoData.id, !toDoData.completed)

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);
    // simulate click event by selecting the root element [0] using jquery
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
