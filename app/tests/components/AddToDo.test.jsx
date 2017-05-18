var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddToDo = require('AddToDo');

describe("AddToDo form component", () => {
  it("should exist", () => {
    expect(AddToDo).toExist();
  });

  it("should call onAddToDo if valid input entered", () => {
    var dummyText = 'walk the turtle';
    var spy = expect.createSpy();

    var toDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoForm));

    toDoForm.refs.toDoText.value = dummyText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(dummyText);
  });

  it("should not call onAddToDo if invalid input entered", () => {
    var dummyText = null;
    var spy = expect.createSpy();

    var toDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoForm));

    toDoForm.refs.toDoText.value = dummyText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
