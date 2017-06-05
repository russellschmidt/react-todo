var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {AddToDo} = require('AddToDo');

describe("AddToDo form component", () => {
  it("should exist", () => {
    expect(AddToDo).toExist();
  });

  it("should dipatch AddToDo when valid todo text entered", () => {
    var dummyText = 'walk the turtle';
    var action = {
      type: 'ADD_TODO',
      text: dummyText
    }
    var spy = expect.createSpy();
    var toDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoForm));

    toDoForm.refs.toDoText.value = dummyText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should not dispatch AddToDo when invalid text entered", () => {
    var dummyText = null;
    var spy = expect.createSpy();

    var toDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoForm));

    toDoForm.refs.toDoText.value = dummyText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
