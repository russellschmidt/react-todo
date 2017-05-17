var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var ToDoForm = require('ToDoForm');

describe("ToDoForm", () => {
  it("should exist", () => {
    expect(ToDoForm).toExist();
  });

  it("should call onAddToDo if valid input entered", () => {
    var dummyText = 'walk the turtle';
    var spy = expect.createSpy();

    var toDoForm = TestUtils.renderIntoDocument(<ToDoForm onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoForm));

    toDoForm.refs.todotext.value = dummyText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(dummyText);
  });

  it("should not call onAddToDo if invalid input entered", () => {
    var dummyText = null;
    var spy = expect.createSpy();

    var toDoForm = TestUtils.renderIntoDocument(<ToDoForm onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoForm));

    toDoForm.refs.todotext.value = dummyText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
